<template>
  <USidebar v-model="isSidebarOpen" class="w-full shadow-xl text-white shadow-xl">
    <div class="flex items-center justify-start space-x-2 text-nowrap p-4 mb-4 bg-emerald-600">
        <UIcon name="i-heroicons-globe-alt" class="w-6 h-6 text-lime-500 space-x-4" />
        <span class="text-xl font-bold text-gray-900 text-nowrap">Admin Panel</span>
    </div>
    <UVerticalNavigation :links="sidebarLinks"/>
  </USidebar>
</template>

<script setup>
import { ref } from 'vue'
import Swal from 'sweetalert2'
import { VUE_APP_API_URL } from "@/utility/Global.js";
const isSidebarOpen = ref(true)

const logout = () => {
  localStorage.clear() // Clear all stored data
  Swal.fire('Logged Out', 'You have been successfully logged out', 'success');
  router.push('/login') // Redirect to login page
}

const sidebarLinks = [
  { label: "Dashboard", to: "/admin/dashboard/", icon: "i-heroicons-home", badge: '4' },

  // System Management
  { label: "Users", to: "/admin/users/", icon: "i-heroicons-user-group" },
  { label: "Roles", to: "/admin/roles/", icon: "i-heroicons-identification" },
  { label: "Permissions", to: "/admin/permissions/", icon: "i-heroicons-key" },

  // Logout
  { label: "Logout", icon: "i-heroicons-arrow-left-on-rectangle", click: logout }
]
</script>
