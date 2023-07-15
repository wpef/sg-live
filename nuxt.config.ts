// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    ['@storyblok/nuxt', { accessToken: 'P98lHCVtL7qDF2Qo2pFfBQtt' }],
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
  ],

})
