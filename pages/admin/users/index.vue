<template>
  <div v-if="hasPermission('Navigation_Users')">
    <div class="flex flex-col space-y-6 p-1 min-h-screen">
      <!-- Breadcrumbs and Header -->
      <div class="flex items-center justify-between">
        <BreadCrumbs page="Users" />
      </div>

      <!-- Search & Add Room -->
      <UCard>
        <div class="flex flex-col md:flex-row md:justify-between items-center gap-4">
          <UInput 
            v-model="search.search" 
            @input.prevent="searchInput()" 
            placeholder="Search Users..."
            :trailing="true" 
            class="w-full md:w-1/3"
          />
          <AddUser @transaction_id="handleTransactions" />
        </div>

        <!-- Responsive Table Wrapper -->
        <div class="overflow-x-auto">
          <UCard v-if="!loading">
            <UTable :rows="data.users" :columns="columns">
              <template #actions-data="{ row }">
                <div class="flex space-x-2">
                  <EditUser :data="row" :key="row.id" @transaction_id="handleTransactions" />
                  <ResetPassword :data="row" :key="row.id" @transaction_id="handleTransactions" />
                  <DeleteUser :data="row" :key="row.id" @transaction_id="handleTransactions" />
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
  useDebounce,
} from "@/utility/Helper.js";
import { VUE_APP_API_URL } from "@/utility/Global.js";
import { hasPermission } from "@/utility/Permissions.js";

import BreadCrumbs from "@/components/BreadCrumbs.vue";
import Pagination from "@/components/Pagination.vue";
import Loader from "@/components/Loader.vue";
import Error403 from "@/error/Error403.vue";

//modules
import AddUser from "./module/AddUser.vue";
import EditUser from "./module/EditUser.vue";
import DeleteUser from "./module/DeleteUser.vue";
import ResetPassword from "./module/ResetPassword.vue";
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
  { key: "email", label: "Email" },
  { key: "roleName", label: "Role" },
  { key: "actions", label: "Actions" },
];

// Fetch Rooms
const getAboutsList = async () => {
  try {
    loading.value = true;
    const response = await axios.post(
      `${VUE_APP_API_URL}users/list`,
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
