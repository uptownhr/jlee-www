require('dotenv').config()

export default {
  target: 'static',
  srcDir: 'src/',
  rootDir: './',

  components: true,

  env: {
    STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
    URL: process.env.URL,
    MAGIC_KEY: process.env.MAGIC_KEY,
    AUTOCODE_ENVIRONMENT: process.env.AUTOCODE_ENVIRONMENT,
  },

  head: {
    htmlAttrs: {
      lang: 'en',
    },

    meta: [
      { charset: 'utf-8' },

      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, maximum-scale=5, minimal-ui',
      },

      { property: 'og:type', content: 'website' },
    ],
  },

  buildModules: ['@nuxtjs/tailwindcss', '@braid/vue-formulate/nuxt'],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    [
      'vue-currency-filter/nuxt',
      {
        symbol: '$',
        thousandsSeparator: ',',
        fractionCount: 2,
        fractionSeparator: '.',
        symbolPosition: 'front',
        symbolSpacing: false,
      },
    ],
    '@nuxtjs/sitemap',
    'nuxt-lazy-load'
  ],

  pwa: {
    meta: {
      name: 'James Lee - Software Engineer',
    },
    manifest: {
      name: 'James Lee - Software Engineer',
      lang: 'en',
      short_name: 'James Lee',
    },
  },

  sitemap: {
    hostname: 'https://www.jlee.biz'
  },

  plugins: [
    { src: '@/plugins/magic.js', mode: 'client' },
    { src: '@/plugins/auth.js', mode: 'client' },
  ],

  axios: {
    baseURL: '/',
    /* port: process.env.NETLIFY_DEV 
      ? 8888 
      : process.env.PORT */
  },

  tailwindcss: {
    jit: false,
    config: './tailwind.config.js',
    viewer: true,
  },
}
