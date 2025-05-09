<template>
  <div class="booking-page">
    <div class="hero-section">
      <h1 class="page-title">
        <span class="jp">ご予約</span>
        <span class="en">Reservations</span>
      </h1>
    </div>

    <div class="booking-container">
      <form @submit.prevent="handleSubmit" class="booking-form">
        <div class="form-grid">
          <div class="form-group">
            <label for="checkIn">チェックイン | Check-in</label>
            <input 
              type="date" 
              id="checkIn" 
              v-model="formData.checkIn"
              required
              :min="today"
            >
          </div>

          <div class="form-group">
            <label for="checkOut">チェックアウト | Check-out</label>
            <input 
              type="date" 
              id="checkOut" 
              v-model="formData.checkOut"
              required
              :min="formData.checkIn"
            >
          </div>

          <div class="form-group">
            <label for="guests">ご人数 | Number of Guests</label>
            <select id="guests" v-model="formData.guests" required>
              <option value="1">1 Person</option>
              <option value="2">2 People</option>
              <option value="3">3 People</option>
              <option value="4">4 People</option>
            </select>
          </div>

          <div class="form-group">
            <label for="roomType">お部屋タイプ | Room Type</label>
            <select id="roomType" v-model="formData.roomType" required>
              <option value="" disabled selected>部屋を選択してください | Select a Room</option>
              <option value="kiku">菊の間 | Kiku Room</option>
              <option value="ume">梅の間 | Ume Room</option>
              <option value="momo">桃の間 | Momo Room</option>
              <option value="taka">鷹の間 | Taka Room</option>
              <option value="kame">亀の間 | Kame Room</option>
              <option value="kiri">桐の間 | Kiri Room</option>
              <option value="yuki">雪の間 | Yuki Room</option>
              <option value="sakura">桜スイート | Sakura Suite</option>
              <option value="matsu">松の間 | Matsu Room</option>
              <option value="take">竹の間 | Take Room</option>
            </select>
          </div>
        </div>

        <div class="guest-details">
          <h3>お客様情報 | Guest Information</h3>
          
          <div class="form-group">
            <label for="name">お名前 | Full Name</label>
            <input type="text" id="name" v-model="formData.name" required>
          </div>

          <div class="form-group">
            <label for="email">メールアドレス | Email</label>
            <input type="email" id="email" v-model="formData.email" required>
          </div>

          <div class="form-group">
            <label for="phone">電話番号 | Phone Number</label>
            <input type="tel" id="phone" v-model="formData.phone" required>
          </div>

          <div class="form-group">
            <label for="specialRequests">特別なご要望 | Special Requests</label>
            <textarea id="specialRequests" v-model="formData.specialRequests" rows="4"></textarea>
          </div>
        </div>

        <button type="submit" class="submit-button">
          予約を確認する | Confirm Reservation
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'guest',
})

useHead({
  title: 'Book Your Stay'
})

const formData = ref({
  checkIn: '',
  checkOut: '',
  guests: '2',
  roomType: '',
  name: '',
  email: '',
  phone: '',
  specialRequests: ''
})

const today = computed(() => {
  const date = new Date()
  return date.toISOString().split('T')[0]
})

const handleSubmit = async () => {
  // Handle form submission logic here
  console.log('Form submitted:', formData.value)
}
</script>

<style scoped>
.booking-page {
  background-color: #f8f8f8;
  min-height: 100vh;
  /* Remove padding-top as it's causing issues with the hero section */
}

.hero-section {
  position: relative;
  height: 40vh; /* Increased height */
  margin-top: 80px; /* Add margin to account for fixed header */
  background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),
    url('https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af');
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

.booking-container {
  position: relative;
  max-width: 1000px;
  margin: -50px auto 0;
  padding: 0 2rem 4rem;
  z-index: 1; /* Ensure form appears above hero section */
}

.booking-form {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #1a1a1a;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 0.9rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: 'Noto Sans JP', sans-serif;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #1a1a1a;
}

.guest-details {
  border-top: 1px solid #eee;
  padding-top: 2rem;
  margin-top: 2rem;
}

.guest-details h3 {
  margin-bottom: 1.5rem;
  font-family: 'Noto Sans JP', sans-serif;
  color: #1a1a1a;
}

.submit-button {
  background-color: #1a1a1a;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-family: 'Noto Sans JP', sans-serif;
  cursor: pointer;
  width: 100%;
  margin-top: 2rem;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #333;
}

/* Update responsive styles */
@media (max-width: 768px) {
  .hero-section {
    height: 30vh;
    margin-top: 60px; /* Adjusted for smaller header on mobile */
  }

  .page-title .jp {
    font-size: 2rem;
  }

  .page-title .en {
    font-size: 1.5rem;
  }

  .booking-container {
    margin-top: -30px;
    padding: 0 1rem 2rem;
  }

  .booking-form {
    padding: 1.5rem;
  }
}
</style>