import tailwindcss from '@tailwindcss/vite'

const baseURL = process.env.NUXT_APP_BASE_URL || '/'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxt/fonts', '@nuxt/image'],

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    public: {
      // Origin only (protocol + domain, no path) — the GitHub Pages
      // subpath is already added by whatever combines this with an
      // asset path (see app.vue's og:image, useAssetUrl.ts). Falls back
      // to this repo's actual Pages URL; override with
      // NUXT_PUBLIC_SITE_URL once the custom domain is live.
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://hoffmennn.github.io',
    },
  },

  // No explicit `image.provider` here — @nuxt/image auto-selects
  // "ipxStatic" whenever `nitro.options.static` is true (see
  // @nuxt/image's module.js), which the `github_pages` preset below sets
  // implicitly (it extends Nitro's own `static` preset). ipxStatic bakes
  // resized/optimized images into the prerendered output as real files
  // and — same as the default "ipx" provider — resolves their URLs
  // through `app.baseURL` automatically, which is the whole reason
  // <NuxtImg> is used instead of plain <img> in this project. GitHub
  // Pages serves the generated output as pure static files, so this
  // matters: a provider that expects a live image-transform server (the
  // plain "ipx" default outside a static preset) would 404 in
  // production. Re-verify this after any Nitro/@nuxt-image upgrade.
  nitro: {
    preset: 'github_pages',
    // Nuxt's own crawler-seeding always pushes bare "/" onto
    // prerender.routes (see nuxt/dist/index.mjs), never the
    // baseURL-prefixed root — but Nitro's router only serves paths
    // under `app.baseURL` once it's a non-root value, so that bare "/"
    // 404s internally and the crawler records nitro's baseURL-redirect
    // stub instead of real content (silently: `nuxt generate` still
    // exits 0). Seeding the *actual* root here fixes it — the crawler
    // then discovers every other route from the links it finds there,
    // same as it would from "/" when baseURL is "/". Confirmed by
    // generating with NUXT_APP_BASE_URL=/agentura-polak-web/ and
    // checking .output/public/agentura-polak-web/ contains every page,
    // not just a 16-byte redirect placeholder.
    prerender: {
      routes: [baseURL],
      // Serialized rather than the default concurrency: on Windows,
      // concurrent prerender routes racing to rename their cache files
      // in .nuxt/cache/nitro/prerender/ intermittently hit EPERM (file
      // locked, most likely by Defender/an indexer) and fail the whole
      // generate. Route-by-route is slower but reliable everywhere.
      concurrency: 1,
    },
  },

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
        { rel: 'icon', type: 'image/png', href: `${baseURL}favicon.png` },
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
