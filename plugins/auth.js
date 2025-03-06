import { useAuthStore } from "~/store/auth";

export default defineNuxtPlugin(nuxtApp => {
  const authStore = useAuthStore();

  // Call initializeAuth when the app starts to load the token from localStorage
  authStore.initializeAuth();
});
