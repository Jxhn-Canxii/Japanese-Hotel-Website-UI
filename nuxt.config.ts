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
  // devServer: {
  //   host: "10.20.1.69",
  //   port: 8089
  // },
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
      title: siteTitle, // App window nav title
      
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#121212' },
        { name: 'description', content: 'Discover modern living at Diane Residences. We offer beautifully designed spaces that enhance community and comfort in a vibrant environment.' },
        { name: 'keywords', content: 'Diane Residences, luxury condominiums, real estate, property development, apartments, community living, Cebu' },
        { name: 'author', content: 'Diane Properties Corporation' },
        { property: 'og:title', content: 'Diane Residences - Luxury Living in Cebu' },
        { property: 'og:description', content: 'Explore Diane Residences for exquisite condominiums that blend style, comfort, and a sense of community.' },
        { property: 'og:image', content: '/images/diane_logo.jpg' },
        { property: 'og:url', content: 'https://www.dianeresidences.com' },
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
   modules: ['@nuxt/content', '@nuxtjs/color-mode', '@vesp/nuxt-fontawesome', '@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxt/image'],
   colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'dark'
  }
})