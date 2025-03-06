<script setup>
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { computed, onMounted, onUnmounted, watch } from "vue";
import { DEFAULT_BG } from "~/pages/utility/Global";

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
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

watch(
  () => props.show,
  () => {
    if (props.show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = null;
    }
  }
);

const close = () => {
  if (props.closeable) {
    emit("close");
  }
};

const closeOnEscape = (e) => {
  if (e.key === "Escape" && props.show) {
    close();
  }
};

onMounted(() => document.addEventListener("keydown", closeOnEscape));

onUnmounted(() => {
  document.removeEventListener("keydown", closeOnEscape);
  document.body.style.overflow = null;
});

const maxWidthClass = computed(() => {
  return {
    sm: "sm:max-w-sm",
    md: "sm:max-w-md",
    lg: "sm:max-w-lg",
    xl: "sm:max-w-xl",
    "2xl": "sm:max-w-2xl",
    "4xl": "sm:max-w-4xl",
    "6xl": "sm:max-w-6xl",
    "8xl": "sm:max-w-8xl",
    fullscreen: "absolute top-0 mt-0 pt-0 h-screen w-screen",
  }[props.maxWidth];
});
</script>

<template>
  <Teleport to="body">
    <Transition leave-active-class="duration-200">
      <div
        v-show="show"
        class="fixed inset-0 overflow-auto px-4 py-6 sm:px-0 z-50 min-h-full"
        scroll-region
      >
        <!-- Overlay -->
        <div class="fixed  inset-0 opacity-80" :class="DEFAULT_BG" @click="close">

        </div>
        <Transition
          enter-active-class="ease-out duration-300"
          enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enter-to-class="opacity-100 translate-y-0 sm:scale-100"
          leave-active-class="ease-in duration-200"
          leave-from-class="opacity-100 translate-y-0 sm:scale-100"
          leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div
            v-show="show"
            class="mb-6 bg-white rounded-lg overflow-auto shadow-xl transform transition-all sm:w-full sm:mx-auto"
            :class="maxWidthClass"
          >
            <div class="flex justify-between p-3" :class="DEFAULT_BG">
              <h2 class="text-lg font-semibold text-white">
                {{ title }}
              </h2>
              <button
                class="flex float-end p-3 bg-transparent mr-4 md:mr-1"
                @click.prevent="close"
              >
              <font-awesome :icon="faTimesCircle" class="dark:text-red-500" />
              </button>
            </div>
            <slot v-if="show" />
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
