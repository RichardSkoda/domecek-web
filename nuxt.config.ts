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

  css: ['@vuepic/vue-datepicker/dist/main.css', '~/assets/css/main.css'],

  components: [{ path: '~/components', pathPrefix: false }],

  site: {
    url: 'https://domecek-osecek.cz',
    name: 'Domeček Oseček',
  },

  // Každý stránkový title v i18n překladech už obsahuje "— Domeček Oseček" sám o sobě,
  // takže výchozí šablonu @nuxtjs/seo (přidávající "| Domeček Oseček") vypínáme,
  // jinak by se název webu v <title> zdvojil.
  app: {
    head: {
      titleTemplate: '%s',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      ],
    },
  },

  image: {
    quality: 80,
    format: ['webp'],
  },

  typescript: {
    strict: true,
  },

  runtimeConfig: {
    // NUXT_RESEND_API_KEY — API klíč z https://resend.com. Dokud není nastaven,
    // formuláře jen zalogují odeslaná data na server (e-mail se neposílá).
    resendApiKey: '',
    // NUXT_EMAIL_FROM — odesílatel. Doména domecek-osecek.cz je v Resendu ověřená.
    emailFrom: 'Domeček Oseček <rezervace@domecek-osecek.cz>',
    // NUXT_EMAIL_TO — kam chodí notifikace z rezervačního a kontaktního formuláře.
    emailTo: 'michal.tauchman@silverdahl.cz',
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
