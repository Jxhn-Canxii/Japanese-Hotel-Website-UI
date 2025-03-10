<template>
  <div v-if="hasPermission('Navigation_Permissions')">
    <div class="flex flex-col space-y-6 p-1 min-h-screen">
      <!-- Breadcrumbs and Header -->
      <div class="flex items-center justify-between">
        <BreadCrumbs page="Permission" />
      </div>

      <!-- Search & Add Room -->
      <UCard>
        <div class="flex flex-col md:flex-row md:justify-between items-center gap-4">
          <UInput 
            v-model="search.search" 
            @input.prevent="searchInput()" 
            placeholder="Search Permission..."
            :trailing="true" 
            class="w-full md:w-1/3"
          />
          <AddPermission @transaction_id="handleTransactions" />
        </div>

        <!-- Responsive Table Wrapper -->
        <div class="overflow-x-auto">
          <UCard v-if="!loading">
            <UTable :rows="data.permissions" :columns="columns">
              <template #name-data="{ row }">
                {{  replaceUnderScore(row.name) }}
              </template>
              <template #actions-data="{ row }">
                <div class="flex space-x-2">
                  <DeletePermission :key="row.id" :data="row" @transaction_id="handleTransactions" />
                </div>
              </template>
            </UTable>
          </UCard>
        </div>

        <!-- Loading & No Data State -->
        <div v-if="loading" class="flex justify-center">
          <Loader />
        </div>
        <UAlert v-else-if="data.totalrows === 0" color="red" variant="soft">
          ***No data found***
        </UAlert>

        <!-- Pagination -->
        <UPagination
          v-if="data.totalrows > 0"
          v-model="search.page_num"
          :total="data.totalrows"
          :items-per-page="search.itemsperpage"
          @update:modelValue="handlePagination"
          class="justify-center"
        />
      </UCard>
    </div>
  </div>

  <div v-else>
    <Error403 />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import Swal from "sweetalert2";
import {
  Alerto,
  BearToken,
  handleApiError,
  moneyFormatter,
  replaceUnderScore,
  useDebounce,
} from "@/utility/Helper.js";
import { VUE_APP_API_URL } from "@/utility/Global.js";
import { hasPermission } from "@/utility/Permissions.js";

import BreadCrumbs from "@/components/BreadCrumbs.vue";
import Pagination from "@/components/Pagination.vue";
import Loader from "@/components/Loader.vue";
import Error403 from "@/error/Error403.vue";

//modules
import AddPermission from "./module/AddPermission.vue";
import DeletePermission from "./module/DeletePermission.vue";

definePageMeta({
  layout: "admin",
  middleware: ["auth"],
});

// Data & States
const data = ref([]);
const loading = ref(false);
const search = ref({ search: "", page_num: 1, itemsperpage: 10 });

const columns = [
  { key: "name", label: "Username" },
  { key: "type", label: "Type" },
  { key: "actions", label: "Actions" },
];

// Fetch Rooms
const getAboutsList = async () => {
  try {
    loading.value = true;
    const response = await axios.post(
      `${VUE_APP_API_URL}permissions/list`,
      search.value,
      BearToken()
    );
    data.value = response.data;
  } catch (error) {
    handleApiError(error);
  } finally {
    loading.value = false;
  }
};

// Pagination Handler
const handlePagination = (page_num) => {
  search.value.page_num = page_num ?? 1;
  getAboutsList();
};

// Search Handler with Debounce
const searchInput = useDebounce(async () => {
  search.value.page_num = 1;
  await getAboutsList();
  handlePagination(1);
}, 500);

// Handle Transactions (reload list)
const handleTransactions = () => getAboutsList();

// Load rooms on mount
onMounted(getAboutsList);
</script>
