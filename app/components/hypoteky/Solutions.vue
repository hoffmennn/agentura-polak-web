<script setup lang="ts">
const groups = [
  {
    title: "Žiadosť o hypotéku",
    items: [
      "Preveríme všetky dostupné ponuky",
      "Vypíšeme za vás žiadosti do vybraných bánk",
      "Skontrolujeme kompletnosť dokladov predtým, než ich podáme",
    ],
  },
  {
    title: "Komunikácia s bankou",
    items: ["Sledujeme priebeh schvaľovania a priebežne vás informujeme", "Prípadné problémy riešime my"],
  },
  {
    title: "Nehnuteľnosť",
    items: [
      "Zabezpečíme znalecký posudok cez overeného znalca v regióne",
      "Skontrolujeme list vlastníctva a upozorníme na ťarchy a záložné práva",
      "Poradíme s návrhom na vklad do katastra",
      "Zariadime poistenie nehnuteľnosti",
    ],
  },
  {
    title: "Po podpise zmluvy",
    items: [
      "Pomôžeme s čerpaním úveru a splnením podmienok banky",
      "Ustrážime termín konca fixácie a ozveme sa 3 mesiace vopred",
      "Pri zmene situácie (narodenie dieťaťa, zmena príjmu, predaj bytu) prehodnotíme nastavenie",
      "Zostávame vaším kontaktom aj po vyplatení",
    ],
  },
]
</script>

<template>
  <section class="bg-surface-card py-16 sm:py-20">
    <div class="container-page">
      <h2 class="section-heading">Vyriešime to za vás</h2>

      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="group in groups" :key="group.title">
          <h3 class="mb-4 text-body-lg font-semibold font-display">{{ group.title }}</h3>
          <ul class="m-0 flex list-none flex-col gap-3 p-0">
            <li v-for="item in group.items" :key="item" class="flex gap-2.5 text-body-sm leading-relaxed text-ink-muted">
              <span class="material-symbols-outlined shrink-0 text-[20px] text-brand-primary">check</span>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
