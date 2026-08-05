export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/image',
    '@nuxtjs/seo',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
  ],

  css: ['~/assets/css/main.css'],

  components: [{ path: '~/components', pathPrefix: false }],

  app: {
    head: {
      htmlAttrs: { lang: 'cs' },
    },
  },

  site: {
    url: 'https://domecek-osecek.cz',
    name: 'Domeček Oseček',
    defaultLocale: 'cs',
  },

  image: {
    quality: 80,
    format: ['webp'],
  },

  typescript: {
    strict: true,
  },
})
