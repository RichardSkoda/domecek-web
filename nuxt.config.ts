export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxtjs/seo',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
  ],

  css: ['~/assets/css/main.css'],

  components: [{ path: '~/components', pathPrefix: false }],

  site: {
    url: 'https://domecek-osecek.cz',
    name: 'Domeček Oseček',
  },

  image: {
    quality: 80,
    format: ['webp'],
  },

  typescript: {
    strict: true,
  },

  i18n: {
    locales: [
      { code: 'cs', language: 'cs-CZ', name: 'Čeština', file: 'cs.json' },
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
      { code: 'de', language: 'de-DE', name: 'Deutsch', file: 'de.json' },
    ],
    defaultLocale: 'cs',
    strategy: 'prefix_except_default',
    customRoutes: 'meta',
    detectBrowserLanguage: false,
    baseUrl: 'https://domecek-osecek.cz',
  },
})
