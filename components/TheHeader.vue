<template>
  <header :class="{ 'scrolled': isScrolled, 'hidden': isHidden }">
    <nav>
      <NuxtLink to="/" class="logo">
        <span class="logo-jp">清澄</span>
        <span class="logo-en">KIZUMA</span>
      </NuxtLink>
      
      <div class="nav-links">
        <NuxtLink to="/" class="nav-link">Home</NuxtLink>
        <NuxtLink to="/rooms" class="nav-link">Rooms</NuxtLink>
        <NuxtLink to="/dining" class="nav-link">Dining</NuxtLink>
        <NuxtLink to="/gallery" class="nav-link">Gallery</NuxtLink>
        <NuxtLink to="/about" class="nav-link">About</NuxtLink>
        <NuxtLink to="/booking" class="book-now">Book Now</NuxtLink>
      </div>

      <button class="menu-toggle" @click="isMenuOpen = !isMenuOpen">
        <span :class="{ 'open': isMenuOpen }"></span>
        <span :class="{ 'open': isMenuOpen }"></span>
        <span :class="{ 'open': isMenuOpen }"></span>
      </button>
    </nav>

    <div class="mobile-menu" :class="{ 'open': isMenuOpen }">
      <NuxtLink to="/" class="mobile-link" @click="isMenuOpen = false">Home</NuxtLink>
      <NuxtLink to="/rooms" class="mobile-link" @click="isMenuOpen = false">Rooms</NuxtLink>
      <NuxtLink to="/dining" class="mobile-link" @click="isMenuOpen = false">Dining</NuxtLink>
      <NuxtLink to="/gallery" class="mobile-link" @click="isMenuOpen = false">Gallery</NuxtLink>
      <NuxtLink to="/about" class="mobile-link" @click="isMenuOpen = false">About</NuxtLink>
      <NuxtLink to="/booking" class="mobile-link book-now" @click="isMenuOpen = false">Book Now</NuxtLink>
    </div>
  </header>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false)
const isScrolled = ref(false)
const isHidden = ref(false)
const lastScrollPosition = ref(0)

const handleScroll = () => {
  const currentScrollPosition = window.scrollY
  isScrolled.value = currentScrollPosition > 50
  
  // Don't hide header at the top of page
  if (currentScrollPosition < 50) {
    isHidden.value = false
    return
  }
  
  // Hide/show based on scroll direction
  isHidden.value = currentScrollPosition > lastScrollPosition.value
  lastScrollPosition.value = currentScrollPosition
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  padding: 1rem 2rem;
  transform: translateY(0);
}

header.scrolled {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.98);
}

header.hidden {
  transform: translateY(-100%);
}

nav {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo-jp {
  font-family: 'Noto Serif JP', serif;
  color: #1a1a1a;
  font-size: 1.5rem;
}

.logo-en {
  font-family: 'Cormorant Garamond', serif;
  color: #666;
  font-size: 0.9rem;
  letter-spacing: 2px;
}

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #000;
}

.book-now {
  background-color: #1a1a1a;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
}

.book-now:hover {
  background-color: #333;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.menu-toggle span {
  display: block;
  width: 25px;
  height: 2px;
  background-color: #1a1a1a;
  transition: all 0.3s ease;
  transform-origin: center;
}

.menu-toggle span.open:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.menu-toggle span.open:nth-child(2) {
  opacity: 0;
}

.menu-toggle span.open:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

.mobile-menu {
  display: none;
  position: fixed;
  top: -100%;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  padding: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.mobile-menu.open {
  top: 72px; /* Adjusted to match header height */
  display: flex;
  flex-direction: column;
}

.mobile-link {
  text-decoration: none;
  color: #333;
  padding: 1rem;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 1rem;
  border-bottom: 1px solid #eee;
  transition: background-color 0.3s ease;
}

.mobile-link:hover {
  background-color: #f5f5f5;
}

.mobile-link.book-now {
  margin: 1rem;
  text-align: center;
  background-color: #1a1a1a;
  color: white;
  border-radius: 4px;
  border: none;
}

.mobile-link.book-now:hover {
  background-color: #333;
}

@media (max-width: 1024px) {
  nav {
    padding: 0 1rem;
  }

  .nav-links {
    gap: 1rem;
  }

  .nav-link {
    font-size: 0.85rem;
  }
}

@media (max-width: 768px) {
  header {
    padding: 0.75rem 1rem;
  }

  .logo-jp {
    font-size: 1.25rem;
  }

  .logo-en {
    font-size: 0.8rem;
  }

  .nav-links {
    display: none;
  }

  .menu-toggle {
    display: flex;
  }
}

@media (min-width: 769px) {
  .mobile-menu {
    display: none !important;
  }
}
</style>