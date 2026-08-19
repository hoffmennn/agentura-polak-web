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
  { name: "ČSOB", src: "/banks/csob.png" },
  { name: "Raiffeisen Bank", src: "/banks/poistenie.png" },
  { name: "Prima banka", src: "/banks/prima.png" },
  { name: "Slovenská sporiteľňa", src: "/banks/slsp.png" },
  { name: "Tatra banka", src: "/banks/tatrav.png" },
  { name: "VÚB banka", src: "/banks/vub.png" },
]
</script>

<template>
  <div class="marquee-fade relative w-full overflow-hidden">
    <div class="flex w-max items-center gap-10 animate-marquee hover:[animation-play-state:paused]">
      <div class="flex shrink-0 items-center gap-10">
        <img
          v-for="bank in banks"
          :key="bank.name"
          :src="bank.src"
          :alt="bank.name"
          class="h-8 w-auto shrink-0 object-contain"
        >
      </div>
      <!-- Duplicate pass for the seamless loop — hidden from the a11y
           tree so screen readers don't hear every bank name twice. -->
      <div class="flex shrink-0 items-center gap-10" aria-hidden="true">
        <img
          v-for="bank in banks"
          :key="'dup-' + bank.name"
          :src="bank.src"
          alt=""
          class="h-8 w-auto shrink-0 object-contain"
        >
      </div>
    </div>
  </div>
</template>
