// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  app: {

    head: {
      title: 'CAU Pulls - AI Medical Solutions',
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
      ],
    },
  },

  modules: [
    '@pinia/nuxt',
    '@nuxt/devtools',
    '@nuxt/fonts',
    'nuxt-svgo',
    'nuxt-swiper',
  ],
  svgo: {
    autoImportPath: '~/assets/images/svgs/',
    // componentPrefix: 'i',
  },
  fonts: {
    families: [
      { name: 'Manrope', provider: 'google' },
    ]
  },
  css: [
    '~/assets/styles/css/tailwind.css',
    '~/assets/styles/scss/main.scss',
    'swiper/css', // Swiper CSS importi
    'swiper/css/pagination', // Swiper pagination CSS importi
    'swiper/css/navigation', // Swiper navigation CSS importi
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nitro: {
    prerender: {
      crawlLinks: false,
    }
  },
  compatibilityDate: '2025-01-08',
});
