require('dotenv').config()

console.log(process.env)

export default {
  css: ['@/assets/css/mvp.css'],

  head: {
    htmlAttrs: {
      lang: 'en'
    },

    title: 'Get paid',

    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, maximum-scale=5, minimal-ui'
      },

      { property: 'og:url', content: 'https://www.get.paid' },
      { property: 'og:type', content: 'website' },

      {
        property: 'og:title',
        content: 'Get Paid'
      },

      {
        vmid: 'description',
        hid: 'description',
        name: 'description',
        content:
          'Get paid for your services'
      },

      {
        vmid: 'og:description',
        property: 'og:description',
        content:
          'Get paid for your services'
      },

      /* {
        property: 'og:image',
        content: 'https://www.spacedtime.com/spacedtime-logo.png'
      }, */

      /* { property: 'og:image:type', content: 'image/png' } */
    ]
  },

  modules: [
      '@nuxtjs/pwa',
      ['vue-currency-filter/nuxt', {
        symbol: '$',
        thousandsSeparator: ',',
        fractionCount: 2,
        fractionSeparator: '.',
        symbolPosition: 'front',
        symbolSpacing: false
      }],
  ],

  pwa: {
      meta: {
          name: 'Get Paid'
      },
      manifest: {
          name: 'Get Paid',
          lang: 'en',
          short_name: 'Get Paid'
      }
  },

  env: {
    STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY
  }
};