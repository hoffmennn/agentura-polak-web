<script setup lang="ts">
/**
 * "S čím vám vieme pomôcť" — 5 dark tiles, same flat bg-brand-primary block
 * pattern as HypotekyHighlights, extended with a subtitle/body/tags line and
 * a text link. The source's hover is a lift+shadow; kept flat instead (no
 * shadows anywhere in this design system) and swapped for a background
 * transition to brand-accent — the same institutional→action blue shift
 * `.btn-primary` already uses, just inverted (fill in, not fill out).
 */
const tiles = [
  {
    icon: "diversity_1",
    title: "Chráňte seba a svoju rodinu",
    subtitle: "Aby výpadok príjmu neohrozil to, čo ste vybudovali.",
    desc: "Životné a úrazové poistenie chráni váš príjem. Vďaka nemu zvládnete platiť nájom, splátky aj každodenné nákupy aj vtedy, keď zo dňa na deň nemôžete pracovať.",
    tags: "Riešime: životné poistenie · úrazové poistenie · krytie kritických chorôb · poistenie k hypotéke · poistenie detí",
  },
  {
    icon: "home",
    title: "Poistenie domova",
    subtitle: "Byt, dom, chatu a aj vaše zariadenie.",
    desc: "Najčastejšou škodou nie je požiar, ale voda. Prasknutá hadička od práčky vytopí vašu kúpeľňu aj strop susedovi pod vami. Bez poistenia to platíte z vlastného.",
    tags: "Riešime: poistenie nehnuteľnosti · poistenie domácnosti · zodpovednosť za škodu · poistenie k hypotéke",
  },
  {
    icon: "directions_car",
    title: "Poistenie auta",
    subtitle: "Povinné aj to, čo sa naozaj oplatí.",
    desc: "PZP musíte mať zo zákona. Ale kryje len škodu, ktorú spôsobíte niekomu inému — nie vaše vlastné auto.",
    tags: "Riešime: PZP · havarijné poistenie · pripoistenia (sklo, zver, asistencia) · poistenie firemných vozidiel",
  },
  {
    icon: "work",
    title: "Podnikateľské poistenie",
    subtitle: "Istota pre vašu firmu.",
    desc: "Pri podnikaní neriskujete len majetok firmy, ale často aj ten súkromný.",
    tags: "Riešime: majetok firmy · zodpovednosť pri výkone povolania · poistenie zamestnancov · prerušenie prevádzky",
  },
  {
    icon: "flight",
    title: "Cestovné poistenie",
    subtitle: "Jednorazové aj celoročné.",
    desc: "Vybavíme aj deň pred odchodom, na dovolenku aj po celý rok.",
    tags: null,
  },
]
</script>

<template>
  <section class="bg-surface-card py-16 sm:py-20">
    <div class="container-page">
      <h2 class="section-heading">S čím vám vieme pomôcť</h2>

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="tile in tiles"
          :key="tile.title"
          class="flex flex-col gap-3.5 bg-brand-primary p-8 transition-colors duration-150 hover:bg-brand-accent"
        >
          <span class="material-symbols-outlined text-icon-lg text-brand-accent-dark">{{ tile.icon }}</span>
          <h3 class="text-h4 font-semibold text-white font-display">{{ tile.title }}</h3>
          <p class="text-body-sm font-semibold text-brand-accent-dark">{{ tile.subtitle }}</p>
          <p class="text-body-sm leading-relaxed text-border-subtle">{{ tile.desc }}</p>
          <p v-if="tile.tags" class="text-label text-brand-accent-dark">{{ tile.tags }}</p>
          <a
            href="#kontaktny-formular"
            class="mt-auto pt-1 text-label font-semibold text-brand-accent-dark no-underline hover:underline"
          >
            Prebrať to s poradcom →
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
