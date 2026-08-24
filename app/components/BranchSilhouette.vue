<script setup lang="ts">
/**
 * Decorative city-silhouette watermark for branch cards (Kontakt + Landing's
 * "Prečo my" preview grid). Extracted into its own component because both
 * call sites were duplicating the same broken markup: the source images
 * (`/images/silhouette-*.png`) had been imported truncated — mostly blank
 * canvas with only a sliver of real artwork at the top — and shown at
 * 6–8% opacity on top of that, so nothing read as visible at any size.
 * The PNGs have since been re-cropped to their actual content (see
 * public/images/), so this only has to place them well.
 *
 * Poprad's tower is a tall portrait crop — anchored to the bottom-right
 * corner, height-driven so it scales with the card. Kežmarok's mountain
 * ridge is a wide horizontal crop — anchored along the bottom edge,
 * width-driven so it spans the card at any breakpoint. Both stay within
 * the card's own `overflow-hidden`, so neither can cause horizontal
 * scroll or spill past its corner.
 *
 * No `width`/`height` props: `src` is data-driven (a different file per
 * branch, different intrinsic size each), and the image is
 * `position: absolute` — taken out of document flow, so it can't cause
 * layout shift regardless. `alt=""` is intentional too: this is a
 * decorative watermark, not content.
 */
defineProps<{
  src: string
  variant: "tower" | "skyline"
}>()
</script>

<template>
  <NuxtImg
    :src="src"
    alt=""
    loading="lazy"
    class="pointer-events-none absolute opacity-[0.16] transition-opacity duration-150 group-hover:opacity-[0.24]"
    :class="
      variant === 'tower'
        ? 'right-0 bottom-0 h-full w-auto object-contain object-bottom'
        : 'inset-x-0 bottom-0 h-auto w-full object-contain object-bottom'
    "
  />
</template>
