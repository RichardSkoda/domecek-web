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

  runtimeConfig: {
    // NUXT_RESEND_API_KEY — API klíč z https://resend.com. Dokud není nastaven,
    // formuláře jen zalogují odeslaná data na server (e-mail se neposílá).
    resendApiKey: '',
    // NUXT_EMAIL_FROM — odesílatel. Bez ověřené vlastní domény v Resendu je nutné
    // nechat výchozí sdílenou doménu (funguje jen pro doručení na emailTo níže).
    emailFrom: 'Domeček Oseček <onboarding@resend.dev>',
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
