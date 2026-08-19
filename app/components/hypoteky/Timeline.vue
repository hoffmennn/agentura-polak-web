<script setup lang="ts">
// Only title + desc are ported — the source's `timing`/`you` fields are
// built in its JS but never actually referenced by its own template.
const steps = [
  {
    title: "Krok 1: Nezáväzná konzultácia",
    desc: "Stretneme sa v Poprade, Kežmarku alebo online. Zistíme, koľko potrebujete, čo si môžete dovoliť a aké máte možnosti. Odchádzate s konkrétnou predstavou, bez záväzku a bez poplatku.",
  },
  {
    title: "Krok 2: Porovnanie a výber banky",
    desc: "Prejdeme ponuky bánk, ktoré prichádzajú do úvahy práve pre vás. Predložíme vám najvýhodnejšie varianty a vysvetlíme rozdiely, nielen v sadzbe, ale aj v poplatkoch a podmienkach.",
  },
  {
    title: "Krok 3: Príprava dokladov",
    desc: "Dáme vám presný zoznam toho, čo treba. Doklady skontrolujeme a pripravíme kompletnú žiadosť.",
  },
  {
    title: "Krok 4: Podanie žiadosti a schvaľovanie",
    desc: "Žiadosť podáme a sledujeme jej priebeh. Ak banka niečo doplní alebo spochybní, riešime to okamžite my.",
  },
  {
    title: "Krok 5: Znalecký posudok a poistenie",
    desc: "Zabezpečíme znalca, skontrolujeme list vlastníctva, zariadime poistenie nehnuteľnosti.",
  },
  {
    title: "Krok 6: Podpis zmluvy",
    desc: "Zmluvu s vami dôklade prejdeme a vysvetlíme všetky nejasností.",
  },
  {
    title: "Krok 7: Čerpanie úveru",
    desc: "Pomôžeme so splnením podmienok čerpania.",
  },
]
</script>

<template>
  <section class="bg-surface py-16 sm:py-20">
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
