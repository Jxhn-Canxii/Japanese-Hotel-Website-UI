<template>
  <ClientOnly>
    <NuxtLayout>
      <template #default>
        <Loader v-if="isLoading" />
        <NuxtPage v-else />
      </template>
    </NuxtLayout>
  </ClientOnly>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Loader from '@/components/Loader.vue';

const isLoading = ref(false);
const router = useRouter();

router.beforeEach((to, from, next) => {
  isLoading.value = true;
  next();
});

router.afterEach(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 500); // Adjust delay as needed
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>