<script setup lang="ts">
/**
 * Short full-width blue banner bridging "Prečo my" to the contact form —
 * collapsed down to a single centered CTA button (no separate heading/copy
 * — the button's own label carries the whole message). Same filled→outline
 * hover idiom as .btn-primary/.btn-primary-dark, inverted to white since it
 * sits on brand-primary itself, plus an arrow that nudges right on hover.
 */
</script>

<template>
  <section class="bg-brand-primary py-16 text-white">
    <div class="container-page flex justify-center">
      <NuxtLink
        to="/o-nas"
        class="group inline-flex items-center gap-3 border-2 border-white bg-white px-10 py-5 text-base font-semibold tracking-wider text-brand-primary uppercase transition-colors duration-150 hover:bg-transparent hover:text-white"
      >
        Spoznajte náš tím
        <span
          class="material-symbols-outlined text-[22px] transition-transform duration-150 ease-out group-hover:translate-x-1.5"
        >
          arrow_forward
        </span>
      </NuxtLink>
    </div>
  </section>
</template>
