require('dotenv').config();

console.log(process.env);

export default {
  css: ['@/assets/css/mvp.css'],

  head: {
    htmlAttrs: {
      lang: 'en',
    },

    title: 'James Lee - Mentorship',

    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, maximum-scale=5, minimal-ui',
      },

      { property: 'og:url', content: 'https://www.jlee.biz' },
      { property: 'og:type', content: 'website' },

      {
        property: 'og:title',
        content: 'James Lee - Mentorship',
      },

      {
        vmid: 'description',
        hid: 'description',
        name: 'description',
        content: 'Your Personal VueJS Mentor',
      },

      {
        vmid: 'og:description',
        property: 'og:description',
        content: 'Your Personal VueJS Mentor',
      },

      /* {
        property: 'og:image',
        content: 'https://www.spacedtime.com/spacedtime-logo.png'
      }, */

      /* { property: 'og:image:type', content: 'image/png' } */
    ],
  },

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
  ],

  pwa: {
    meta: {
      name: 'Get Paid',
    },
    manifest: {
      name: 'Get Paid',
      lang: 'en',
      short_name: 'Get Paid',
    },
  },

  env: {
    STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
    URL: process.env.URL,
    MAGIC_KEY: process.env.MAGIC_KEY,
  },

  plugins: [{ src: '~/plugins/magic.js', mode: 'client' }],

  axios: {
    port: process.env.NETLIFY_DEV ? 8888 : 3000
  }
};
