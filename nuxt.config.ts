import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxt/fonts', '@nuxt/image'],

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      htmlAttrs: { lang: 'sk' },
      title: 'Agentúra Polák',
      titleTemplate: '%s | Agentúra Polák',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Agentúra Polák — partner poisťovne UNIQA. Poistenie, hypotéky a investície v Poprade a Kežmarku.',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1',
        },
      ],
    },
  },

  fonts: {
    families: [
      { name: 'Hanken Grotesk', provider: 'google', weights: [600, 700] },
      { name: 'Inter', provider: 'google', weights: [400, 500, 600] },
      // Loaded manually above instead (see app.head.link) — tell
      // @nuxt/fonts to leave it alone rather than auto-generating
      // fallback-metrics for an icon font, which it otherwise does for
      // any font-family it finds while scanning the CSS.
      { name: 'Material Symbols Outlined', provider: 'none' },
    ],
  },
})
