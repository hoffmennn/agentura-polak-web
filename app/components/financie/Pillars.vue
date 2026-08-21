<script setup lang="ts">
/**
 * "Tri veci, ktoré riešime" — same flat bg-brand-primary tile pattern (and
 * hover:bg-brand-accent transition) as poistenie/Coverage.vue, 3 fixed
 * columns instead of a wrapping grid since there are exactly three.
 */
const tiles = [
  {
    icon: "account_balance",
    title: "II. pilier — starobné dôchodkové sporenie",
    subtitle: "Časť vašich odvodov, ktorá je vaším majetkom.",
    desc: "Namiesto toho, aby všetko išlo do Sociálnej poisťovne, časť z vašich odvodov ide na váš vlastný účet. Tie peniaze sú dedičné — v prvom pilieri takáto možnosť neexistuje.",
    tags: "Najčastejšie riešime: Mám vôbec druhý pilier? · V akom fonde mám peniaze? · Oplatí sa mi doň vstúpiť? · Chcem prestúpiť inam",
    linkLabel: "Viac o II. pilieri →",
  },
  {
    icon: "savings",
    title: "III. pilier — doplnkové dôchodkové sporenie",
    subtitle: "Jediné sporenie, kam vám prispieva zamestnávateľ.",
    desc: "Ak vám zamestnávateľ ponúka príspevok na tretí pilier a vy ho nevyužívate, prichádzate o peniaze. Navyše si viete znížiť daňový základ.",
    tags: "Najčastejšie riešime: Prispieva mi zamestnávateľ? · Koľko si mám dávať? · Ako uplatniť daňovú úľavu? · Mám starú zmluvu z roku 2010 — je dobrá?",
    linkLabel: "Viac o III. pilieri →",
  },
  {
    icon: "trending_up",
    title: "Investovanie a sporenie",
    subtitle: "Pre splnenie vašich cieľov",
    desc: "Byt pre deti, rezerva, väčší nákup o desať rokov. Dá sa začať aj malými pravidelnými sumami.",
    tags: "Najčastejšie riešime: Ako začať s malou sumou? · Koľko rizika mám zniesť? · Kam s jednorazovou sumou? · Sporenie pre deti",
    linkLabel: "Viac o investovaní →",
  },
]
</script>

<template>
  <section class="bg-surface-card py-16 sm:py-20">
    <div class="container-page">
      <h2 class="section-heading">Tri veci, ktoré riešime</h2>

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div
          v-for="tile in tiles"
          :key="tile.title"
          class="flex flex-col gap-3.5 bg-brand-primary p-8 transition-colors duration-150 hover:bg-brand-accent"
        >
          <span class="material-symbols-outlined text-icon-lg text-brand-accent-dark">{{ tile.icon }}</span>
          <h3 class="text-h4 font-semibold text-white font-display">{{ tile.title }}</h3>
          <p class="text-body-sm font-semibold text-brand-accent-dark">{{ tile.subtitle }}</p>
          <p class="text-body-sm leading-relaxed text-border-subtle">{{ tile.desc }}</p>
          <p class="text-label text-brand-accent-dark">{{ tile.tags }}</p>
          <a
            href="#kontaktny-formular"
            class="mt-auto pt-1 text-label font-semibold text-brand-accent-dark no-underline hover:underline"
          >
            {{ tile.linkLabel }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
