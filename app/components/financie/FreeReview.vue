<script setup lang="ts">
const checkItems = [
  "Či máte druhý pilier založený",
  "V akom fonde máte peniaze, či to zodpovedá vášmu veku a horizontu",
  "Či vám zamestnávateľ prispieva na tretí pilier a či ten príspevok naozaj čerpáte",
  "Či si uplatňujete daňovú úľavu, na ktorú máte nárok",
]
</script>

<template>
  <section class="bg-surface py-16 sm:py-20">
    <div class="mx-auto max-w-[820px] px-5">
      <h2 class="mb-4 text-h1-section font-semibold tracking-tight font-display">Poradíme vám </h2>
      <p class="mb-6 leading-relaxed text-ink-muted">
        Pomôžeme vám nastaviť optimálné riešenie pre vaše financie:
      </p>

      <ul class="m-0 mb-6 flex list-none flex-col gap-3 p-0">
        <li v-for="item in checkItems" :key="item" class="flex items-start gap-2.5">
          <span class="material-symbols-outlined shrink-0 text-[20px] text-brand-primary">check</span>
          <span class="text-body-sm text-ink">{{ item }}</span>
        </li>
      </ul>

      <p class="mb-7 text-body-sm text-ink-muted">Konzultácia je bezplatná a k ničomu vás nezaväzuje.</p>

      <a href="#kontaktny-formular" class="btn-primary mb-8 inline-flex">Chcem bezplatnú kontrolu</a>

      <div class="card p-6 sm:p-7">
        <h3 class="mb-2 text-body-lg font-semibold font-display">Čo si priniesť</h3>
        <p class="text-body-sm leading-relaxed text-ink-muted">
          Ročný výpis z druhého piliera · zmluvu o treťom pilieri, ak ju máte · občiansky preukaz. Ak nič z toho
          nemáte, príďte aj tak, poradíme ako to zistiť.
        </p>
      </div>
    </div>
  </section>
</template>
