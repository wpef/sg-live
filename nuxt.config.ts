// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  build :  {
    //Fix fsevent bug
    transpile: ['fsevents']
  },
  modules: [
    ['@storyblok/nuxt', { accessToken: 'P98lHCVtL7qDF2Qo2pFfBQtt' }],
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
  ],
  app : {
    head: {
      link: [
        {
          rel: 'preconnect',
          href: "https://fonts.googleapis.com"
        },
        {
          rel: 'preconnect',
          href: "https://fonts.gstatic.com",
          crossorigin : ""
        },
        {
          rel: 'stylesheet',
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;700;800&display=swap"
        }
      ]
    }
  }

})
