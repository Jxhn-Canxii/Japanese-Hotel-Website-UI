<template>
  <div class="about-page">
    <div class="hero-section">
      <h1 class="page-title">
        <span class="jp">私たちについて</span>
        <span class="en text-center">About Us</span>
      </h1>
    </div>

    <div class="about-container">
      <section class="history-section">
        <h2 class="section-title">
          <span class="jp">歴史と伝統</span>
          <span class="en">History & Tradition</span>
        </h2>
        <div class="content-grid">
          <div class="text-content">
            <p class="jp-text">1950年に創業された清澄ホテルは、京都の伝統とモダンな快適さが調和する空間を提供してきました。</p>
            <p class="en-text">Since 1950, Kizuma Hotel has been offering a harmonious blend of Kyoto's traditions and modern comfort.</p>
          </div>
          <div class="image-content">
            <img src="https://images.unsplash.com/photo-1542051841857-5f90071e7989" alt="Historic Kyoto" />
          </div>
        </div>
      </section>

      <section class="philosophy-section">
        <h2 class="section-title">
          <span class="jp">おもてなし</span>
          <span class="en">Our Philosophy</span>
        </h2>
        <div class="content-grid reverse">
          <div class="text-content">
            <p class="jp-text">私たちは、細部にまでこだわった日本のおもてなしの心を大切にしています。</p>
            <p class="en-text">We cherish the Japanese spirit of Omotenashi - hospitality that anticipates and fulfills the needs of our guests before they arise.</p>
          </div>
          <div class="image-content">
            <img src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e" alt="Tea Ceremony" />
          </div>
        </div>
      </section>

      <section class="location-section">
        <h2 class="section-title">
          <span class="jp">ロケーション</span>
          <span class="en">Location</span>
        </h2>
        <div class="content-grid">
          <div class="text-content">
            <p class="jp-text">東山区の中心に位置し、観光名所や寺院まで徒歩圏内です。</p>
            <p class="en-text">Located in the heart of Higashiyama district, within walking distance to major attractions and temples.</p>
            <div class="address-box">
              <p>〒605-0022</p>
              <p>京都市東山区黒谷堂ノ前町42</p>
              <p>42 Kurotani Donomae-cho, Higashiyama-ku</p>
              <p>Kyoto, Japan</p>
            </div>
          </div>
          <div class="image-content">
            <img src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e" alt="Kyoto Streets" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'guest'
})
</script>

<style scoped>
.about-page {
  background-color: #f8f8f8;
  min-height: 100vh;
}

.hero-section {
  height: 40vh;
  margin-top: 80px;
  background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),
    url('https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
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

.about-container {
  max-width: 1200px;
  margin: -50px auto 0;
  padding: 0 2rem 4rem;
}

.history-section, .philosophy-section, .location-section {
  background: white;
  margin: 2rem 0;
  padding: 3rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.section-title {
  text-align: center;
  margin-bottom: 2rem;
}

.section-title .jp {
  font-size: 2rem;
}

.section-title .en {
  font-size: 1.5rem;
  color: #666;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.content-grid.reverse {
  direction: rtl;
}

.content-grid.reverse > * {
  direction: ltr;
}

.text-content {
  padding: 2rem;
}

.jp-text {
  font-family: 'Noto Sans JP', sans-serif;
  margin-bottom: 1rem;
  line-height: 1.8;
  color: #333;
}

.en-text {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
}

.image-content img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 4px;
}

.address-box {
  margin-top: 2rem;
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: 'Noto Sans JP', sans-serif;
}

.address-box p {
  margin: 0.5rem 0;
  color: #333;
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

  .about-container {
    margin-top: -30px;
    padding: 0 1rem 2rem;
  }

  .content-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .image-content img {
    height: 300px;
  }

  .history-section, .philosophy-section, .location-section {
    padding: 1.5rem;
  }

  .text-content {
    padding: 0;
  }
}
</style>