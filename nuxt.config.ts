// https://nuxt.com/docs/api/configuration/nuxt-config
import { ref, onMounted } from "vue";
import axios from 'axios';

const siteTitle = 'KIZUMA HOTEL'

const search = ref({
  search: "",
  page_num: 1,
  itemsperpage: 1000,
});

export default defineNuxtConfig({
  ssr: false,          // Ensure SSR is enabled explicitly
  // Configure Nuxt to listen on the local network
  devServer: {
    port: 8089
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: ['~/plugins/auth.js'],
  css: ['@/assets/css/main.css'],
  app: {
    head: {
      titleTemplate: '%s - Kizuma Hotel',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#121212' },
        { name: 'description', content: 'Experience the elegance and tradition of Kizuma Hotel in Kyoto, where modern luxury meets Japanese heritage.' },
        { name: 'keywords', content: 'Kizuma Hotel, Kyoto, Japanese tradition, luxury hotel, onsen, tea ceremony, kaiseki dining, Japanese gardens' },
        { name: 'author', content: 'Kizuma Hotel' },
        { property: 'og:title', content: 'Kizuma Hotel - Experience Japanese Elegance' },
        { property: 'og:description', content: 'Discover the perfect blend of tradition and modern luxury at Kizuma Hotel in Kyoto.' },
        { property: 'og:image', content: '/images/parallax.jpg' },
        { property: 'og:url', content: 'https://www.kizumahotel.com' },
        // ...
    ],
    
      link: [
        // { rel: 'manifest', href: 'pwa/manifest.json' },
        // { rel: 'apple-touch-icon', href: 'pwa/icons/apple-touch-icon.png' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap' },
      ],
    },
    
    pageTransition: { name: 'page', mode: 'out-in' }
  },

   /**
   * * Nuxt 3 Modules
   * Official modules: https://nuxt.com/modules
   */
   modules: ['@nuxt/ui', '@pinia/nuxt'],
   colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'dark'
  }
})