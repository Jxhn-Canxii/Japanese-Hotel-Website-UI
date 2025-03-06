<template>
  <div class="relative w-full">
    <!-- Selected Items Display -->
    <div class="flex flex-wrap gap-2 mb-2">
      <div
        v-for="(item, index) in selectedItems"
        :key="item[props.itemId]"
        class="bg-blue-200 text-sm p-1 rounded flex items-center space-x-1"
      >
        <span>{{ labelFormatter(item) }}</span>
        <button
          type="button"
          class="text-red-500 font-bold"
          @click="removeSelectedItem(index)"
        >
          &times;
        </button>
      </div>
    </div>

    <!-- Input Field -->
    <div class="flex">
      <input
        type="text"
        :id="inputId"
        :placeholder="placeholder"
        v-model="searchQuery"
        :title="searchQuery"
        @input="onInput"
        @keydown="handleKeyDown"
        autocomplete="off"
        :class="className ?? ''"
        class="min-w-full w-auto p-1 border rounded text-md md:text-lg truncate overflow-ellipsis whitespace-nowrap"
      />
      <button
        type="button"
        @click.prevent="viewItems()"
        :class="buttonClasses"
        class="absolute top-2 right-2"
      >
        <i class="fa fa-xs font-extrabold text-black fa-chevron-down"></i>
      </button>
    </div>

    <!-- Dropdown Menu -->
    <div
      class="dropdown-menu absolute bg-white shadow w-full mt-1"
      v-if="filteredItems.length > 0 && searchQuery.length > 0"
      @scroll="handleScroll"
      style="max-height: 200px; overflow-y: auto;"
    >
      <ul>
        <li
          v-for="(item, index) in filteredItems"
          :key="item[props.itemId]"
          :class="[ 
            'p-2 border-l-2 border-slate-200 flex py-2 font-bold shadow text-gray-600 cursor-pointer hover:bg-gray-100',
            { 'bg-slate-200': selectedIndex === index }
          ]"
          @click="toggleSelectItem(item)"
          @mouseover="selectedIndex = index"
        >
          {{ labelFormatter(item) }}
          <span v-if="isSelected(item)" class="ml-auto text-green-500 font-bold">
            ✓
          </span>
        </li>
        <li v-if="loadingMore" class="text-center py-2">Loading more...</li>
        <li v-if="!loadingMore && !hasMoreItems" class="text-center py-2 text-gray-500">No more items</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits, defineProps, onMounted } from "vue";
import axios from "axios";
import { useDebounce, convertStringToArray, BearToken } from "~/pages/utility/Helper";
import { VUE_APP_API_URL } from "~/pages/utility/Global";

const props = defineProps({
  apiEndpoint: String,
  searchModel: Object,
  placeholder: String,
  itemLabel: String,
  itemId: String,
  inputId: String,
  returnName: String,
  dataKey: String,
  className: {
    type: String,
    default: 'class="mt-0 p-2 border-l border-t border-b rounded-l w-full"',
  },
  defaultValue: Array,
  formatLabel: {
    type: String,
    default: 'none',
  },
});

const emit = defineEmits(["items-selected"]);

const keyName = ref(convertStringToArray(props.returnName));
const searchQuery = ref("");
const filteredItems = ref([]);
const selectedItems = ref(props.defaultValue || []); // Store selected items
const selectedIndex = ref(-1);
const loadingMore = ref(false);
const hasMoreItems = ref(true); // Track if more items can be loaded
const page = ref(1);
const token = localStorage.getItem("token");

const viewItems = () => {
  if (filteredItems.value.length > 0) {
    filteredItems.value = [];
  } else {
    fetchItems();
  }
};

const fetchItems = async (loadMore = false) => {
  try {
    if (!loadMore) {
      filteredItems.value = [];
      page.value = 1; // Reset page for fresh searches
      hasMoreItems.value = true; // Reset hasMoreItems when performing a new search
    }

    const response = await axios.post(
      `${VUE_APP_API_URL}${props.apiEndpoint}`,
      {
        ...props.searchModel,
        page_num: page.value,
      },
      BearToken(token)
    );

    const newItems =
      props.dataKey && response.data[props.dataKey]
        ? response.data[props.dataKey]
        : Array.isArray(response.data)
        ? response.data
        : Object.values(response.data).find((val) => Array.isArray(val)) || [];

    if (newItems.length === 0) {
      hasMoreItems.value = false; // No more items to load
    } else if (loadMore) {
      filteredItems.value.push(...newItems); // Append new items to the list
    } else {
      filteredItems.value = newItems;
    }

    loadingMore.value = false;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const handleScroll = (event) => {
  const { scrollTop, scrollHeight, clientHeight } = event.target;

  if (scrollTop + clientHeight >= scrollHeight - 5 && !loadingMore.value && hasMoreItems.value) {
    page.value += 1;
    loadingMore.value = true;
    fetchItems(true); // Load more items on scroll
  }
};

const labelFormatter = (item) => {
  const formatLabel = props.formatLabel;
  const key = keyName.value;
  if (key.length > 3) return "Maximum Allowed key is 3 only!";

  const third_value =
    key?.length >= 2 && item[key[2]]?.length > 0 ? " (" + (item[key[2]] ?? "") + ")" : "";
  switch (formatLabel) {
    case "none":
      return key?.length > 0
        ? (item[key[0]] ?? "") + "  " + (item[key[1]] ?? "") + " " + (item[key[2]] ?? "")
        : item[key[0]] ?? "";
    case "dashed":
      return key?.length > 0
        ? (item[key[0]] ?? "") + " - " + (item[key[1]] ?? "") + "  " + (item[key[2]] ?? "")
        : item[key[0]] ?? "";
    case "dashed_and_parenthesis":
      return key?.length > 0
        ? (item[key[0]] ?? "") + " - " + (item[key[1]] ?? "") + third_value
        : item[key[0]] ?? "";
    case "parenthesis":
      return key?.length == 2
        ? (item[key[0]] ?? "") + " (" + (item[key[1]] ?? ")")
        : item[key[0]] ?? ""; //max two keys
    case "third_parenthesis":
      return key?.length > 0
        ? (item[key[0]] ?? "") + "  " + (item[key[1]] ?? "") + third_value
        : item[key[0]] ?? "";
    default:
      return key?.length > 0
        ? (item[key[0]] ?? "") + "  " + (item[key[1]] ?? "") + (item[key[2]] ?? "")
        : item[key[0]] ?? "";
  }
};

const onInput = () => {
  props.searchModel.search = searchQuery.value;
  fetchItems();
};

const handleKeyDown = (event) => {
  switch (event.key) {
    case "ArrowDown":
      event.preventDefault();
      if (selectedIndex.value < filteredItems.value.length - 1) {
        selectedIndex.value += 1;
      }
      break;
    case "ArrowUp":
      event.preventDefault();
      if (selectedIndex.value > 0) {
        selectedIndex.value -= 1;
      }
      break;
    case "Enter":
      event.preventDefault();
      if (selectedIndex.value >= 0 && filteredItems.value[selectedIndex.value]) {
        toggleSelectItem(filteredItems.value[selectedIndex.value]);
      }
      break;
  }
};

const toggleSelectItem = (item) => {
  const isAlreadySelected = selectedItems.value.some(
    (selected) => selected[props.itemId] === item[props.itemId]
  );
  if (isAlreadySelected) {
    selectedItems.value = selectedItems.value.filter(
      (selected) => selected[props.itemId] !== item[props.itemId]
    );
  } else {
    selectedItems.value.push(item);
  }
  emit("items-selected", selectedItems.value);
};

const isSelected = (item) => {
   return selectedItems.value.some((selected) => selected[props.itemId] === item[props.itemId]);
};

const removeSelectedItem = (index) => {
  selectedItems.value.splice(index, 1);
  emit("items-selected", selectedItems.value);
};

onMounted(() => {
  selectedItems.value = props.defaultValue || [];
});
</script>
