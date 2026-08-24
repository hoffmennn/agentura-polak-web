<script setup lang="ts">
/**
 * Site-wide og:image/og:url default. Facebook/Twitter require an
 * *absolute* image URL (protocol + domain) — a root-relative one is
 * silently ignored by their scrapers. `assetUrl()` only adds the
 * baseURL subpath (e.g. `/agentura-polak-web/hero.png`); `siteUrl` (see
 * nuxt.config.ts) supplies the origin on top of that. No dedicated
 * og-card asset exists yet, so this reuses the landing hero photo —
 * swap for a purpose-made 1200×630 image later if needed.
 *
 * Set once here rather than per-page: every current page shares the
 * same image/description, so there's nothing for individual pages to
 * override yet.
 */
const { public: publicConfig } = useRuntimeConfig()
const assetUrl = useAssetUrl()

useSeoMeta({
  ogImage: publicConfig.siteUrl + assetUrl("/hero.png"),
  ogUrl: publicConfig.siteUrl + assetUrl("/"),
  twitterCard: "summary_large_image",
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
