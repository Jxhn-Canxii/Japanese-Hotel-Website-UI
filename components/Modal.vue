<template>
  <UModal v-model="isOpen" :ui="{ width: maxWidthClass }" >
    <!-- Modal Header -->
    <!--- -->
    <template #header>
      <div class="flex items-center justify-between">
        <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
          {{ title }}
        </h3>
        <UButton color="red" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
      </div>
    </template>
    <!-- Modal Content -->
    <div class="p-4">
      <slot />
    </div>

    <!-- Modal Footer -->
    <template #footer>
      <div class="p-4 flex justify-end bg-gray-100 rounded-b-lg">
        <UButton v-if="closeable" color="gray" icon="i-heroicons-x-mark-20-solid" @click="close">Close</UButton>
      </div>
    </template>
  </UModal>
</template>

<script setup>
import { ref, watch, computed } from "vue";

const props = defineProps({
  show: Boolean,
  maxWidth: {
    type: String,
    default: "2xl",
  },
  title: {
    type: String,
    default: "Modal",
  },
  closeable: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(["close"]);
const isOpen = ref(props.show);

// Watch for external prop changes
watch(
  () => props.show,
  (val) => (isOpen.value = val)
);

// Close function
const close = () => {
  if (props.closeable) {
    isOpen.value = false;
    emit("close");
  }
};

// Max-width mapping for Nuxt UI
const maxWidthClass = computed(() => ({
  sm: "sm:max-w-sm",
  md: "sm:max-w-md",
  lg: "sm:max-w-lg",
  xl: "sm:max-w-xl",
  "2xl": "sm:max-w-2xl",
  "4xl": "sm:max-w-4xl",
  "6xl": "sm:max-w-6xl",
  "8xl": "sm:max-w-8xl",
  fullscreen: "w-screen h-screen",
}[props.maxWidth] || "sm:max-w-2xl"));
</script>
