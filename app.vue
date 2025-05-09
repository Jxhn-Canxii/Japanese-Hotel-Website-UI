<template>
  <ClientOnly>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </ClientOnly>
</template>

<script setup>

</script>

<style>
/* Updated page transition for a Japanese theme */
.page-enter-active,
.page-leave-active {
  transition: transform 0.6s ease, opacity 0.6s ease;
}
.page-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.page-enter-to {
  transform: translateX(0);
  opacity: 1;
}
.page-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.page-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>