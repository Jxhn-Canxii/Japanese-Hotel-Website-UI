<template>
  <div class="dining-page">
    <div class="hero-section">
      <h1 class="page-title">
        <span class="jp">お食事</span>
        <span class="en">Dining</span>
      </h1>
    </div>

    <div class="dining-content">
      <!-- Main Restaurant Section -->
      <section class="restaurant-section">
        <h2 class="section-title">
          <span class="jp">清澄料亭</span>
          <span class="en">Kizuma Restaurant</span>
        </h2>
        <div class="restaurant-grid">
          <div class="restaurant-info">
            <p class="description">Experience the pinnacle of Japanese haute cuisine with our seasonal kaiseki menu, featuring locally sourced ingredients and artisanal presentation.</p>
            <div class="details">
              <div class="detail-item">
                <h4>Hours</h4>
                <p>Breakfast: 7:00 - 10:00</p>
                <p>Lunch: 11:30 - 14:00</p>
                <p>Dinner: 17:30 - 21:30</p>
              </div>
              <div class="detail-item">
                <h4>Dress Code</h4>
                <p>Smart Casual</p>
              </div>
              <div class="detail-item">
                <h4>Reservations</h4>
                <p>Required for Dinner</p>
              </div>
            </div>
          </div>
          <div class="restaurant-image">
            <img src="https://images.unsplash.com/photo-1516684732162-798a0062be99" alt="Kaiseki Dining" />
          </div>
        </div>
      </section>

      <!-- Menu Highlights -->
      <section class="menu-section">
        <h3 class="section-title">
          <span class="jp">お品書き</span>
          <span class="en">Seasonal Menus</span>
        </h3>
        <div class="menu-grid">
          <div v-for="menu in menus" :key="menu.id" class="menu-card">
            <img :src="menu.image" :alt="menu.nameEN" />
            <div class="menu-info">
              <h4>
                <span class="jp">{{ menu.nameJP }}</span>
                <span class="en">{{ menu.nameEN }}</span>
              </h4>
              <p class="menu-description">{{ menu.description }}</p>
              <p class="menu-price">¥{{ menu.price.toLocaleString() }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Tea Ceremony -->
      <section class="tea-ceremony">
        <div class="ceremony-content">
          <h3 class="section-title">
            <span class="jp">茶道体験</span>
            <span class="en">Tea Ceremony Experience</span>
          </h3>
          <p>Immerse yourself in the art of traditional Japanese tea ceremony in our dedicated tea room.</p>
          <button class="reserve-button">ご予約 | Make a Reservation</button>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'guest'
})
const menus = ref([
  {
    id: 'kaiseki',
    nameJP: '懐石料理',
    nameEN: 'Kaiseki Course',
    description: 'Traditional multi-course dinner featuring seasonal ingredients',
    price: 18000,
    image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99'
  },
  {
    id: 'breakfast',
    nameJP: '和朝食',
    nameEN: 'Japanese Breakfast',
    description: 'Traditional Japanese breakfast with grilled fish and seasonal sides',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1519624014191-508652cbd7b5'
  },
  {
    id: 'lunch',
    nameJP: '季節の膳',
    nameEN: 'Seasonal Lunch',
    description: 'Elegant lunch course featuring seasonal specialties',
    price: 8000,
    image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99'
  }
])
</script>

<style scoped>
.dining-page {
  background-color: #f8f8f8;
  min-height: 100vh;
  padding-top: 5rem;
}

.hero-section {
  height: 40vh;
  background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),
    url('https://images.unsplash.com/photo-1521017432531-fbd92d768814');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.page-title, .section-title {
  text-align: center;
}

.page-title .jp, .section-title .jp {
  display: block;
  font-family: 'Noto Serif JP', serif;
  margin-bottom: 0.5rem;
}

.page-title .jp {
  font-size: 3rem;
}

.page-title .en, .section-title .en {
  display: block;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 300;
}

.page-title .en {
  font-size: 2rem;
}

.dining-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.restaurant-section, .menu-section {
  margin-bottom: 4rem;
}

.restaurant-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 2rem;
}

.restaurant-info {
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.detail-item h4 {
  color: #1a1a1a;
  margin-bottom: 0.5rem;
  font-family: 'Noto Sans JP', sans-serif;
}

.detail-item p {
  color: #666;
  font-size: 0.9rem;
}

.restaurant-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.menu-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.menu-card:hover {
  transform: translateY(-5px);
}

.menu-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.menu-info {
  padding: 1.5rem;
}

.menu-info h4 {
  margin-bottom: 1rem;
}

.menu-info .jp {
  display: block;
  font-family: 'Noto Serif JP', serif;
  font-size: 1.2rem;
  color: #1a1a1a;
}

.menu-info .en {
  display: block;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1rem;
  color: #666;
}

.menu-description {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.menu-price {
  color: #1a1a1a;
  font-weight: 500;
  font-size: 1.1rem;
}

.tea-ceremony {
  background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
    url('https://images.unsplash.com/photo-1545622783-b3e021430fee');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 4rem 2rem;
  border-radius: 8px;
  text-align: center;
}

.ceremony-content {
  max-width: 600px;
  margin: 0 auto;
}

.reserve-button {
  margin-top: 2rem;
  background-color: white;
  color: #1a1a1a;
  border: none;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-family: 'Noto Sans JP', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
}

.reserve-button:hover {
  background-color: #1a1a1a;
  color: white;
}

@media (max-width: 768px) {
  .restaurant-grid {
    grid-template-columns: 1fr;
  }

  .restaurant-image {
    height: 300px;
  }

  .page-title .jp {
    font-size: 2rem;
  }

  .page-title .en {
    font-size: 1.5rem;
  }

  .dining-content {
    padding: 2rem 1rem;
  }
}
</style>