<template>
  <div class="flex justify-center items-center min-h-screen p-4 bg-gray-100">
    <div class="bg-white p-6 rounded-lg shadow-lg w-full h-full max-w-sm relative">
      <img
        src="~/assets/images/parallax.jpg"
        alt="Kizuma Hotel"
        class="absolute top-0 left-0 w-full h-32 object-cover rounded-t-lg"
      />
      <div class="mt-36">
        <h1 class="text-3xl font-semibold text-center text-slate-900 mb-6">
          Welcome to Kizuma Hotel
        </h1>

        <!-- Display error message -->
        <div v-if="error" class="bg-red-500 text-white text-sm p-2 mb-4 rounded">
          {{ error }}
        </div>

        <form @submit.prevent="login" class="">
          <div class="mb-4">
            <label
              for="username"
              class="block text-sm font-medium text-emerald-900 mb-2"
              >Username</label
            >
            <UInput 
              v-model="form.username"
              required
              size="md"
              color="black"
              placeholder="Enter your username">
              <template #trailing>
                <UButton
                  color="gray"
                  variant="link"
                  icon="i-heroicons-user"
                  :padded="false"
                />
              </template>
            </UInput>
          </div>
          
          <!-- Password field with eye icon to toggle visibility -->
          <div class="mb-6 relative">
            <label
              for="password"
              class="block text-sm font-medium text-emerald-900 mb-2"
              >Password</label
            >
            <UInput 
              :type="showPassword ? 'text' : 'password'"
              v-model="form.password"
              required
              size="md"
              color="black"
              :ui="{ icon: { trailing: { pointer: '' } } }"
              placeholder="Enter your password">
              <template #trailing>
                <UButton
                  color="gray"
                  :icon="showPassword ? 'i-heroicons-eye-slash' : 'i-heroicons-eye'"
                  :padded="false"
                  @click.prevent="showPassword = !showPassword"
                />
              </template>
            </UInput>
          </div>

          <UButton color="black" type="submit" width="w-full" size="md" class="flex w-full items-center justify-center" variant="solid">Login</UButton>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios"; // Import axios for API requests
import { useAuthStore } from "@/store/auth"; // Import the auth store
import { useRouter } from "vue-router"; // Import the router for navigation
import Swal from "sweetalert2"; // Import SweetAlert2
import { FormDx, handleApiError } from "@/utility/Helper.js";
import { getPermissions, getRoles } from "@/utility/PreProcess.js";
import { VUE_APP_API_URL } from "@/utility/Global.js";
// Define reactive variables
definePageMeta({
  layout: 'guest'
})

useHead({
  title: 'Login'
})

const error = ref(""); // Declare error ref to store the error message
const router = useRouter();

const form = ref({
  username: "",
  password: "",
});

const showPassword = ref(false); // Boolean to toggle password visibility

// Toggle function to show/hide password
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

// Login function using axios for HTTP request
const login = async () => {
  // Show the loading spinner alert using SweetAlert2
  const swalInstance = Swal.fire({
    title: 'Logging in...',
    text: 'Please wait while we authenticate you.',
    allowOutsideClick: false,  // Prevent closing the modal by clicking outside
    didOpen: () => {
      Swal.showLoading();  // Show the loading spinner
    }
  });

  try {
    const formData = FormDx(form.value);
    const response = await axios.post(`${VUE_APP_API_URL}login`, formData);
    if (response.data && response.data.token){
        // Assuming the response contains a token and user data
        const { token, userInfo } = response.data;

        console.log(response.data);
        // Save token and user data to store
        const authStore = useAuthStore();
        authStore.setAuthData(token, userInfo); // Store token and set authenticated to true

        // Close the Swal loading spinner
        swalInstance.close();

      // Redirect to the homepage or another page after login
        await preProcess(token);  // Call preprocessing function

        router.push("/admin/dashboard/"); // Redirect to the homepage or dashboard
    }
  } catch (error) {
    // Close the Swal loading spinner
    swalInstance.close();
    console.log(error);
    // Handle API error, show error message
    handleApiError(error);  // You can display this via Swal or console
  }
};

// Pre-process function to get permissions and roles
const preProcess = async (token) => {
  try {
    await getPermissions(token);  // Get permissions
    await getRoles(token);  // Get roles
  } catch (error) {
    // Handle errors in the preprocessing steps
    console.error("Error in preprocessing:", error);
    Swal.fire({
      icon: 'error',
      title: 'Preprocessing failed',
      text: 'There was an issue fetching permissions or roles. Please try again.',
    });
  }
};
</script>

<style scoped>
.bg-gray-100 {
  background-color: #f8f8f8;
}

img {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}
</style>
