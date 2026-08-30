// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    'usebootstrap'
  ],

  app: {
    head: {
      title: 'it Proger',
      meta: [
        { name: 'charset', content: 'utf-8'}
      ]
      // link: [
      //   {rel: 'stylesheet', href: 'css'}
      // ]
    }
  }
})