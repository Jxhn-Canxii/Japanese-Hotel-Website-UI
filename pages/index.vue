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

    <!-- Rooms section -->
    <section class="rooms">
      <h2 class="section-title">Our Rooms</h2>
      <div class="room-grid">
        <div class="room-item">
          <img src="https://images.unsplash.com/photo-1590490359683-658d3d23f972" alt="Kiku Room" class="room-image" />
          <h3>菊の間 | Kiku Room</h3>
          <p>Elegant room with a view of the garden</p>
          <button class="btn-primary mt-2">View Details</button>
        </div>
        <div class="room-item">
          <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427" alt="Ume Room" class="room-image" />
          <h3>梅の間 | Ume Room</h3>
          <p>Spacious room with modern amenities</p>
          <button class="btn-primary mt-2">View Details</button>
        </div>
        <div class="room-item">
          <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427" alt="Momo Room" class="room-image" />
          <h3>桃の間 | Momo Room</h3>
          <p>Cozy room with traditional decor</p>
          <button class="btn-primary mt-2">View Details</button>
        </div>
      </div>
      <div class="text-center mt-4">
        <NuxtLink to="/rooms" class="btn-secondary">View More Rooms</NuxtLink>
      </div>
    </section>

    <!-- Gallery section -->
    <section class="gallery">
      <h2 class="section-title">ギャラリー | Gallery</h2>
      <div class="gallery-grid">
        <div class="gallery-item">
          <img src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9" alt="Gallery Image 1" />
        </div>
        <div class="gallery-item">
          <img src="https://images.unsplash.com/photo-1528360983277-13d401cdc186" alt="Gallery Image 2" />
        </div>
        <div class="gallery-item">
          <img src="https://images.unsplash.com/photo-1528360983277-13d401cdc186" alt="Gallery Image 3" />
        </div>
      </div>
      <div class="text-center mt-4">
        <NuxtLink to="/gallery" class="btn-secondary">View Full Gallery</NuxtLink>
      </div>
    </section>
    <!-- Reviews section -->
    <section class="reviews">
      <h2 class="section-title">お客様の声 | Guest Reviews</h2>
      <div class="review-carousel-wrapper">
        <button class="carousel-arrow left-arrow" @click="scrollLeft">&#8592;</button>
        <div class="review-carousel">
          <div class="review-item">
            <p class="review-text">"A beautiful experience!"</p>
            <p class="review-author">- John Doe</p>
          </div>
          <div class="review-item">
            <p class="review-text">"The best hotel in Kyoto!"</p>
            <p class="review-author">- Jane Smith</p>
          </div>
          <div class="review-item">
            <p class="review-text">"I loved the onsen!"</p>
            <p class="review-author">- Hiroshi Tanaka</p>
          </div>
          <div class="review-item">
            <p class="review-text">"A beautiful experience!"</p>
            <p class="review-author">- John Doe</p>
          </div>
          <div class="review-item">
            <p class="review-text">"The best hotel in Kyoto!"</p>
            <p class="review-author">- Jane Smith</p>
          </div>
          <div class="review-item">
            <p class="review-text">"I loved the onsen!"</p>
            <p class="review-author">- Hiroshi Tanaka</p>
          </div>
          <div class="review-item">
            <p class="review-text">"A beautiful experience!"</p>
            <p class="review-author">- John Doe</p>
          </div>
          <div class="review-item">
            <p class="review-text">"The best hotel in Kyoto!"</p>
            <p class="review-author">- Jane Smith</p>
          </div>
          <div class="review-item">
            <p class="review-text">"I loved the onsen!"</p>
            <p class="review-author">- Hiroshi Tanaka</p>
          </div>
          <div class="review-item">
            <p class="review-text">"I loved the onsen!"</p>
            <p class="review-author">- Hiroshi Tanaka</p>
          </div>
          <div class="review-item">
            <p class="review-text">"A beautiful experience!"</p>
            <p class="review-author">- John Doe</p>
          </div>
          <div class="review-item">
            <p class="review-text">"The best hotel in Kyoto!"</p>
            <p class="review-author">- Jane Smith</p>
          </div>
          <div class="review-item">
            <p class="review-text">"I loved the onsen!"</p>
            <p class="review-author">- Hiroshi Tanaka</p>
          </div>
        </div>
        <button class="carousel-arrow right-arrow" @click="scrollRight">&#8594;</button>
      </div>
    </section>
    <!-- Contact section -->
    <section class="contact text-center">
      <h2 class="section-title">お問い合わせ | Contact Us</h2>
      <p>If you have any questions, feel free to reach out!</p>
      <form class="contact-form">
        <input type="text" placeholder="Your Name" class="form-input" />
        <input type="email" placeholder="Your Email" class="form-input" />
        <textarea placeholder="Your Message" class="form-textarea"></textarea>
        <button type="submit" class="btn-primary">Send Message</button>
      </form>
    </section>

  </div>
</template>

<script setup>
import ParallaxSection from '@/components/ParallaxSection.vue'

definePageMeta({
  layout: 'guest',
});

useHead({
  title: 'Welcome'
})

const parallaxImage = '@/assets/images/parallax.jpg';

const scrollLeft = () => {
  const carousel = document.querySelector('.review-carousel');
  carousel.scrollBy({ left: -300, behavior: 'smooth' });
};

const scrollRight = () => {
  const carousel = document.querySelector('.review-carousel');
  carousel.scrollBy({ left: 300, behavior: 'smooth' });
};

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
  padding: 2rem 2rem;
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

.rooms {
  padding: 2rem 2rem;
  background-color: #f8f8f8;
}

.room-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.room-item {
  text-align: center;
  padding: 2rem;
  border: 1px solid #eee;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.room-item:hover {
  transform: translateY(-5px);
}

.room-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.section-title {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 2rem;
  color: #1a1a1a;
  text-align: center;
  margin-bottom: 2rem;
}

.gallery {
  padding: 2rem 2rem;
  background-color: white;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.gallery-item {
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
}

.gallery-item img {
  width: 100%;
  height: auto;
  display: block;
}

.contact {
  padding: 2rem 2rem;
  background-color:rgb(255, 255, 255);
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-input, .form-textarea {
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 4px;
  font-family: 'Noto Sans JP', sans-serif;
}

.form-textarea {
  resize: vertical;
}

.reviews {
  padding: 2rem 2rem;
  background-color: #f8f8f8;
  text-align: center;
}

/* Updated review-carousel for scrollable carousel */
.review-carousel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

/* Hide the scrollbar for the review carousel */
.review-carousel {
  display: flex;
  overflow-x: auto;
  gap: 1.5rem;
  padding: 1rem;
  scroll-snap-type: x mandatory;
  scrollbar-width: none; /* For Firefox */
}

/* Add custom scrollbar styles */
.review-carousel::-webkit-scrollbar {
  display: none; /* For Chrome, Safari, and Edge */
}

.review-item {
  flex: 0 0 auto;
  scroll-snap-align: center;
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 300px;
}

.review-text {
  font-size: 1rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.review-author {
  font-size: 0.9rem;
  color: #666;
  font-style: italic;
}

.carousel-arrow {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #666;
}

.carousel-arrow:hover {
  color: #333;
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