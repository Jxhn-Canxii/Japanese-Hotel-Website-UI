<template>
  <div class="loader-wrapper">
    <div class="loader">
      <div class="loader-text">清澄ホテル</div>
      <div class="loader-animation">
        <span class="loader-circle"></span>
        <span class="loader-circle"></span>
        <span class="loader-circle"></span>
      </div>
    </div>
  </div>
</template>

<script setup>
// No additional logic needed for the loader component
</script>

<style scoped>
.loader-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f8f8;
}

.loader {
  text-align: center;
}

.loader-text {
  font-family: 'Noto Serif JP', serif;
  font-size: 2rem;
  color: #1a1a1a;
  margin-bottom: 1rem;
}

.loader-animation {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.loader-circle {
  width: 1rem;
  height: 1rem;
  background-color: #1a1a1a;
  border-radius: 50%;
  animation: bounce 1.5s infinite ease-in-out;
}

.loader-circle:nth-child(2) {
  animation-delay: 0.3s;
}

.loader-circle:nth-child(3) {
  animation-delay: 0.6s;
}

@keyframes bounce {
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
</style>
