<template>
  <div class="layout-wrapper">
    <TheHeader />
    <main class="main-content">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import TheHeader from '@/navigations/website/header.vue'
import TheFooter from '@/navigations/website/footer.vue'

// Ensure dynamic page titles are applied
useHead({
  title: useRoute().meta.title
});
</script>

<style>
.layout-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}
</style>

