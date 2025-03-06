import { ref, onMounted } from 'vue';

export function useParallax() {
  const scrollY = ref(0);

  const updateScroll = () => {
    scrollY.value = window.scrollY;
  };

  onMounted(() => {
    window.addEventListener('scroll', updateScroll);
  });

  return {
    scrollY,
  };
}