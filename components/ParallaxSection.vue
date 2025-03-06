<template>
  <section class="parallax-container">
    <div 
      class="parallax-background" 
      :style="{ transform: `translateY(${translateY}px)` }"
    >
      <img :src="backgroundImage" alt="Parallax Background" />
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  backgroundImage: string
}>()

const translateY = ref(0)

const handleScroll = () => {
  translateY.value = window.scrollY * 0.5
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.parallax-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.parallax-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%; /* Extra height for parallax effect */
  will-change: transform;
}

.parallax-background img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.content {
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  background: rgba(0, 0, 0, 0.3); /* Optional overlay */
}

@media (max-width: 768px) {
  .parallax-background {
    position: fixed;
    height: 100%;
  }
}
</style>