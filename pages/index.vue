<template>
  <div class="landing-page">
    <!-- <ParallaxSection :backgroundImage="parallaxImage" /> -->
    
    <section class="welcome-section">
      <div class="japanese-pattern"></div>
      <h1 class="main-title">
        <span class="japanese">清澄ホテル</span>
        <span class="english">Kizuma Hotel</span>
      </h1>
      <p class="subtitle">京都の伝統と現代の贅沢の出会い</p>
      <p class="subtitle-en">Where Kyoto's Tradition Meets Modern Luxury</p>
      
      <div class="cta-buttons">
        <NuxtLink to="/booking" class="btn-primary">予約する | Book Now</NuxtLink>
        <NuxtLink to="/gallery" class="btn-secondary">ギャラリー | Gallery</NuxtLink>
      </div>
    </section>

    <section class="features">
      <div class="feature-grid">
        <div class="feature-item">
          <h3>温泉 | Onsen</h3>
          <p>Natural hot springs with mountain views</p>
        </div>
        <div class="feature-item">
          <h3>茶道 | Tea Ceremony</h3>
          <p>Traditional tea ceremony experience</p>
        </div>
        <div class="feature-item">
          <h3>懐石料理 | Kaiseki</h3>
          <p>Seasonal multi-course dining</p>
        </div>
        <div class="feature-item">
          <h3>庭園 | Gardens</h3>
          <p>Peaceful traditional Japanese gardens</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import ParallaxSection from '@/components/ParallaxSection.vue'

definePageMeta({
  layout: 'guest'
});

const parallaxImage = '@/assets/images/parallax.jpg';

</script>

<style scoped>
.landing-page {
  background-color: #f8f8f8;
  min-height: 100vh;
}

.welcome-section {
  padding: 6rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.japanese-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background-image: url('@/assets/images/pattern.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.05;
  z-index: 0;
}

.main-title {
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}

.japanese {
  display: block;
  font-family: 'Noto Serif JP', serif;
  font-size: 3rem;
  margin-bottom: 0.5rem;
  color: #1a1a1a;
}

.english {
  display: block;
  font-family: 'Cormorant Garamond', serif;
  font-size: 2.5rem;
  color: #666;
  font-weight: 300;
}

.subtitle, .subtitle-en {
  font-family: 'Noto Sans JP', sans-serif;
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 1;
}

.subtitle {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.25rem;
}

.subtitle-en {
  font-size: 1rem;
  color: #666;
  margin-bottom: 3rem;
}

.cta-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 2rem;
  position: relative;
  z-index: 1;
}

.btn-primary, .btn-secondary {
  padding: 1rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.3s ease;
  font-family: 'Noto Sans JP', sans-serif;
}

.btn-primary {
  background-color: #1a1a1a;
  color: white;
}

.btn-primary:hover {
  background-color: #333;
}

.btn-secondary {
  border: 1px solid #1a1a1a;
  color: #1a1a1a;
}

.btn-secondary:hover {
  background-color: #1a1a1a;
  color: white;
}

.features {
  padding: 4rem 2rem;
  background-color: white;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-item {
  text-align: center;
  padding: 2rem;
  border: 1px solid #eee;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-5px);
}

.feature-item h3 {
  font-family: 'Noto Sans JP', sans-serif;
  margin-bottom: 1rem;
  color: #1a1a1a;
}

.feature-item p {
  color: #666;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .japanese {
    font-size: 2.5rem;
  }
  
  .english {
    font-size: 2rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>