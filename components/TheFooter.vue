<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <div class="hotel-info">
          <h3 class="footer-title">
            <span class="jp">清澄ホテル</span>
            <span class="en">KIZUMA HOTEL</span>
          </h3>
          <p class="address">
            〒605-0022<br />
            京都市東山区黒谷堂ノ前町42<br />
            Kyoto, Japan
          </p>
        </div>
      </div>

      <div class="footer-section">
        <h4>Quick Links</h4>
        <nav class="space-y-1">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/rooms">Rooms</NuxtLink>
          <NuxtLink to="/dining">Dining</NuxtLink>
          <NuxtLink to="/gallery">Gallery</NuxtLink>
          <NuxtLink to="/booking">Book Now</NuxtLink>
        </nav>
      </div>

      <div class="footer-section">
        <h4>Contact</h4>
        <div class="contact-info">
          <p>Tel: +81 (075) 123-4567</p>
          <p>Email: info@kizumahotel.jp</p>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; {{ currentYear }} Kizuma Hotel. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background-color: #1a1a1a;
  color: #fff;
  padding: 4rem 2rem 2rem;
  font-family: 'Noto Sans JP', sans-serif;
  width: 100%;
  margin-top: auto; /* Push footer to bottom */
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.footer-title {
  margin: 0 0 1rem;
  text-align: left;
}

.footer-title .jp {
  display: block;
  font-family: 'Noto Serif JP', serif;
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
}

.footer-title .en {
  display: block;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1rem;
  letter-spacing: 2px;
  color: #888;
}

.address {
  color: #888;
  line-height: 1.6;
  font-size: 0.9rem;
}

/* Add these new styles for footer links */
.footer-section nav {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.footer-section nav a {
  color: #888;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section nav a:hover {
  color: #fff;
}

.footer-section h4 {
  color: #fff;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.contact-info p {
  color: #888;
  margin: 0.5rem 0;
}

.footer-bottom {
  border-top: 1px solid #333;
  margin-top: 2rem;
  padding-top: 2rem;
  text-align: center;
  color: #888;
  font-size: 0.9rem;
}
</style>