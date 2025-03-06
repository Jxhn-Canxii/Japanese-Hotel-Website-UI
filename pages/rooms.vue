<template>
  <div class="rooms-page">
    <div class="hero-section">
      <h1 class="page-title">
        <span class="jp">客室</span>
        <span class="en">Our Rooms</span>
      </h1>
    </div>

    <div class="rooms-grid">
      <div v-for="room in rooms" :key="room.id" class="room-card">
        <div class="room-image">
          <img :src="room.image" :alt="room.name" />
        </div>
        <div class="room-info">
          <h2 class="room-title">
            <span class="jp">{{ room.nameJP }}</span>
            <span class="en">{{ room.nameEN }}</span>
          </h2>
          <p class="room-description">{{ room.description }}</p>
          <ul class="room-amenities">
            <li v-for="amenity in room.amenities" :key="amenity">{{ amenity }}</li>
          </ul>
          <div class="room-footer">
            <p class="room-price">From ¥{{ room.price.toLocaleString() }} per night</p>
            <NuxtLink :to="`/booking?room=${room.id}`" class="book-button">
              予約する | Book Now
            </NuxtLink>
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

const rooms = ref([
  {
    id: 'deluxe',
    nameJP: '桜スイート',
    nameEN: 'Sakura Suite',
    description: 'Elegant suite with garden views, featuring traditional Japanese design elements and modern amenities.',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1592229505726-ca121723b8ef',
    amenities: [
      'Private Garden View',
      'Traditional Tatami Area',
      'Modern Bathroom',
      'King Size Bed',
      'Mini Bar'
    ]
  },
  {
    id: 'premium',
    nameJP: '松の間',
    nameEN: 'Matsu Room',
    description: 'Spacious room combining contemporary comfort with Japanese aesthetics, perfect for couples.',
    price: 35000,
    image: 'https://images.unsplash.com/photo-1590490359683-658d3d23f972',
    amenities: [
      'City View',
      'Seating Area',
      'Rain Shower',
      'Queen Size Bed',
      'Tea Set'
    ]
  },
  {
    id: 'traditional',
    nameJP: '竹の間',
    nameEN: 'Take Room',
    description: 'Traditional Japanese-style room with authentic furnishings and peaceful atmosphere.',
    price: 30000,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427',
    amenities: [
      'Garden View',
      'Tatami Flooring',
      'Futon Bedding',
      'Traditional Bath',
      'Yukata Robes'
    ]
  }
])
</script>

<style scoped>
.rooms-page {
  background-color: #f8f8f8;
  min-height: 100vh;
  padding-top: 5rem;
}

.hero-section {
  height: 40vh;
  background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),
    url('https://images.unsplash.com/photo-1601924582970-9238bcb495d9');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.page-title {
  text-align: center;
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

.rooms-grid {
  max-width: 1200px;
  margin: -50px auto 0;
  padding: 0 2rem 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.room-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  display: flex;
  transition: transform 0.3s ease;
}

.room-card:hover {
  transform: translateY(-5px);
}

.room-image {
  flex: 1;
  min-height: 300px;
}

.room-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.room-info {
  flex: 1;
  padding: 2rem;
}

.room-title {
  margin-bottom: 1rem;
}

.room-title .jp {
  display: block;
  font-family: 'Noto Serif JP', serif;
  font-size: 1.5rem;
  color: #1a1a1a;
}

.room-title .en {
  display: block;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.2rem;
  color: #666;
}

.room-description {
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.room-amenities {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 0.5rem;
}

.room-amenities li {
  color: #666;
  font-size: 0.9rem;
  padding-left: 1.5rem;
  position: relative;
}

.room-amenities li::before {
  content: "•";
  position: absolute;
  left: 0.5rem;
  color: #1a1a1a;
}

.room-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.room-price {
  font-size: 1.2rem;
  color: #1a1a1a;
  font-weight: 500;
}

.book-button {
  background-color: #1a1a1a;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.book-button:hover {
  background-color: #333;
}

@media (max-width: 768px) {
  .room-card {
    flex-direction: column;
  }

  .room-image {
    min-height: 200px;
  }

  .rooms-grid {
    margin-top: -30px;
    padding: 0 1rem 2rem;
  }

  .page-title .jp {
    font-size: 2rem;
  }

  .page-title .en {
    font-size: 1.5rem;
  }

  .room-footer {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
</style>