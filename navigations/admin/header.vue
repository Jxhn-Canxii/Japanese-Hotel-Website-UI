<template>
  <header class="bg-white dark:bg-slate-900 shadow-md px-4 py-3 flex items-center justify-between lg:px-6 p-2">
    <!-- Mobile Sidebar Toggle Button (Hamburger Menu) -->
    <div class="flex justify-start items-center gap-1">
      <button @click="$emit('toggleSidebar')" class="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-200">
        <UIcon name="i-heroicons-bars-3" class="text-2xl" />
      </button>

      <h1 class="text-lg font-semibold text-gray-800">Admin Panel</h1>
    </div>
    <!-- User Dropdown (Right Side) -->
    <div class="flex justify-end items-center gap-1">
      <UButton color="red" title="Reload Permissions" size="lg" @click.prevent="reloadDefault()" icon="i-heroicons-arrow-path"></UButton>
      <UButton color="primary" size="lg" label="Admin" icon="i-heroicons-user"></UButton>
    </div>
  </header>
</template>

<script setup>
import { onMounted } from "vue";
import Swal from "sweetalert2";
import { getPermissions, getRoles } from "@/utility/PreProcess.js";
import { useAuthStore } from "@/store/auth";

defineEmits(["toggleSidebar"]);
const authStore = useAuthStore();

// Load token on component mount
onMounted(() => {
  // console.log(authStore.token);
});

const reloadDefault = async () => {
  Swal.fire({
    title: "Processing...",
    text: "Please wait while the data is being reloaded.",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  try {
    await getPermissions(authStore.token);
    await getRoles(authStore.token);

    Swal.close();
    Swal.fire("Success!", "Default data reloaded successfully.", "success");

    window.location.reload();
  } catch (error) {
    Swal.close();
    Swal.fire("Error", "An error occurred while reloading data. Please try again.", "error");
  }
};
</script>
