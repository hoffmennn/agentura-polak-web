<script setup lang="ts">
/**
 * Auto-scrolling partner-bank logo marquee. Originally its own full-width
 * page section; now embedded inside the "Hypotéky a úvery" service card
 * (LandingServices.vue) in place of a plain text partner list, since
 * these are literally bank logos. No longer wrapped in `container-page` —
 * it fills whatever width its parent (the card's content column) gives
 * it instead of the page's 1280px cap.
 */
const banks = [
  { name: "ČSOB", src: "/banks/csob.png", width: 1585, height: 1313 },
  { name: "Raiffeisen Bank", src: "/banks/poistenie.png", width: 1562, height: 562 },
  { name: "Prima banka", src: "/banks/prima.png", width: 1359, height: 409 },
  { name: "Slovenská sporiteľňa", src: "/banks/slsp.png", width: 468, height: 167 },
  { name: "Tatra banka", src: "/banks/tatrav.png", width: 189, height: 181 },
  { name: "VÚB banka", src: "/banks/vub.png", width: 1329, height: 857 },
]
</script>

<template>
  <div class="marquee-fade relative w-full overflow-hidden">
    <!-- No `gap-*` on this wrapper or the two groups below — the
         translateX(-50%) loop only lines up seamlessly if each group's
         rendered width already includes its own trailing spacing (via
         `mr-10` on every image, including the last). A `gap` here as well
         as inside each group would add an extra gap between the two
         groups on top of each group's internal gaps, throwing off the
         -50% midpoint by half that extra gap and producing a periodic
         jump once per loop. -->
    <div class="flex w-max items-center animate-marquee hover:[animation-play-state:paused]">
      <div class="flex shrink-0 items-center">
        <NuxtImg
          v-for="bank in banks"
          :key="bank.name"
          :src="bank.src"
          :alt="bank.name"
          :width="bank.width"
          :height="bank.height"
          class="mr-10 h-8 w-auto shrink-0 object-contain"
        />
      </div>
      <!-- Duplicate pass for the seamless loop — hidden from the a11y
           tree so screen readers don't hear every bank name twice.
           Loaded eagerly like the first pass: this strip only ever moves
           via a CSS transform (no real scroll), which native
           `loading="lazy"` doesn't track — logos outside the initial
           layout viewport would never fire their fetch, leaving them
           permanently blank once the animation scrolls them into view. -->
      <div class="flex shrink-0 items-center" aria-hidden="true">
        <NuxtImg
          v-for="bank in banks"
          :key="'dup-' + bank.name"
          :src="bank.src"
          alt=""
          :width="bank.width"
          :height="bank.height"
          class="mr-10 h-8 w-auto shrink-0 object-contain"
        />
      </div>
    </div>
  </div>
</template>
