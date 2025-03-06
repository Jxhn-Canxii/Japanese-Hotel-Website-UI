<template>
  <div class="gallery-page">
    <div class="hero-section">
      <h1 class="page-title">
        <span class="jp">ギャラリー</span>
        <span class="en text-center">Gallery</span>
      </h1>
    </div>

    <div class="gallery-container">
      <div class="gallery-grid">
        <div 
          v-for="(image, index) in images" 
          :key="index"
          class="gallery-item"
          @mouseenter="image.isHovered = true"
          @mouseleave="image.isHovered = false"
        >
          <img :src="image.src" :alt="image.alt" />
          <div class="image-overlay" :class="{ 'visible': image.isHovered }">
            <div class="image-caption">
              <h3 class="caption-jp">{{ image.captionJP }}</h3>
              <p class="caption-en">{{ image.captionEN }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'guest'
})

const images = ref([
  {
    src: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9',
    alt: 'Japanese Temple',
    captionJP: '金閣寺',
    captionEN: 'Kinkaku-ji Temple',
    isHovered: false
  },
  {
    src: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186',
    alt: 'Cherry Blossoms',
    captionJP: '桜の季節',
    captionEN: 'Cherry Blossom Season',
    isHovered: false
  },
  {
    src: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3',
    alt: 'Japanese Garden',
    captionJP: '日本庭園',
    captionEN: 'Traditional Garden',
    isHovered: false
  },
  {
    src: 'https://images.unsplash.com/photo-1480796927426-f609979314bd',
    alt: 'Mount Fuji',
    captionJP: '富士山',
    captionEN: 'Mount Fuji',
    isHovered: false
  },
  {
    src: 'https://images.unsplash.com/photo-1578469645742-46cae010e5d4',
    alt: 'Tea Ceremony',
    captionJP: '茶道',
    captionEN: 'Tea Ceremony',
    isHovered: false
  },
  {
    src: 'https://images.unsplash.com/photo-1578469645742-46cae010e5d4',
    alt: 'Traditional Room',
    captionJP: '和室',
    captionEN: 'Traditional Room',
    isHovered: false
  }
])
</script>

<style scoped>
.gallery-page {
  background-color: #f8f8f8;
  min-height: 100vh;
}

.hero-section {
  height: 40vh;
  margin-top: 80px;
  background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),
    url('https://images.unsplash.com/photo-1545569341-9eb8b30979d9');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.page-title .jp {
  display: block;
  font-family: 'Noto Serif JP', serif;
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.page-title .en {
  display: block;
  font-family: 'Cormorant Garamond', serif;
  font-size: 2rem;
  font-weight: 300;
}

.gallery-container {
  max-width: 1200px;
  margin: -50px auto 0;
  padding: 0 2rem 4rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  aspect-ratio: 4/3;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-5px);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-overlay.visible {
  opacity: 1;
}

.image-caption {
  color: white;
  text-align: center;
  padding: 1rem;
}

.caption-jp {
  font-family: 'Noto Serif JP', serif;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.caption-en {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .hero-section {
    height: 30vh;
    margin-top: 60px;
  }

  .page-title .jp {
    font-size: 2rem;
  }

  .page-title .en {
    font-size: 1.5rem;
  }

  .gallery-container {
    margin-top: -30px;
    padding: 0 1rem 2rem;
  }

  .gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1rem;
  }
}
</style>