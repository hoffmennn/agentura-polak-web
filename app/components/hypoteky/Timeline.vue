<script setup lang="ts">
// Only title + desc are ported — the source's `timing`/`you` fields are
// built in its JS but never actually referenced by its own template.
const steps = [
  {
    title: "Krok 1: Nezáväzná konzultácia",
    desc: "Stretneme sa v Poprade, Kežmarku alebo online. Preberieme vašu predstavu a aké máte možnosti. Odchádzate s ponukou, bez záväzkov a poplatku.",
  },
  {
    title: "Krok 2: Porovnanie a výber banky",
    desc: "Na základe vašich potrieb vyberieme vhodnú banku pre vás. Predložíme vám najvýhodnejšie varianty a vysvetlíme rozdiely, nielen v sadzbe, ale aj v poplatkoch a podmienkach.",
  },
  {
    title: "Krok 3: Príprava dokladov",
    desc: "Pripravíme vám zoznam potrebných dokumentov. Doklady skontrolujeme a spoločne pripravíme kompletnú žiadosť.",
  },
  {
    title: "Krok 4: Podanie žiadosti a schvaľovanie",
    desc: "Žiadosť podáme a sledujeme jej priebeh. V prípade potreby doplníme potrebné informácie banke.",
  },
  {
    title: "Krok 5: Podpis zmluvy",
    desc: "Zmluvu s vami dôklade prejdeme a vysvetlíme všetky detaily. Po podpise zmluvy poradíme zo zápisom do katastra a poistením nehnuteľností.",
  },
  {
    title: "Krok 6: Čerpanie úveru",
    desc: "Pomôžeme so splnením podmienok čerpania.",
  },
]
</script>

<template>
  <section class="bg-surface py-8 sm:py-10">
    <div class="mx-auto max-w-[900px] px-5">
      <h2 class="section-heading">Ako to prebieha</h2>
      <p class="-mt-10 mb-10 text-body-lg italic text-ink-muted font-display">
        „Od prvého telefonátu po kľúče od nového domova“
      </p>

      <div class="flex flex-col gap-9 border-l-2 border-border-strong pl-8">
        <!-- The one deliberate rounded shape in this design system: the
             source's own timeline dots are circular (border-radius:50%),
             a decorative status marker rather than a card/button/badge,
             so it's kept round here rather than force-fit to the sharp
             corners used everywhere else. -->
        <div v-for="step in steps" :key="step.title" class="relative">
          <span class="absolute top-0.5 -left-[37px] h-[18px] w-[18px] rounded-full border-[3px] border-surface bg-brand-primary" />
          <h3 class="mb-1.5 text-h4 font-semibold font-display">{{ step.title }}</h3>
          <p class="text-body-sm leading-relaxed text-ink-muted">{{ step.desc }}</p>
        </div>
      </div>

      <div class="card mt-12 p-7 text-center">
        <p class="mb-2 text-body-lg font-semibold font-display">Ušetríme vám čas, peniaze a zbytočný stres</p>
        <p class="text-body-sm text-ink-muted">Agentúra Polák</p>
      </div>
    </div>
  </section>
</template>
