<script setup lang="ts">
// Same accordion pattern as poistenie/Faq.vue, extended with an optional
// "Zdroj: …" citation line — the source cites specific institutions/laws
// for several answers here, unlike the other two service pages' FAQs.
const faqs = [
  {
    q: "Ako zistím, či mám druhý pilier?",
    a: "Overiť sa to dá cez Sociálnu poisťovňu alebo priamo v dôchodkovej správcovskej spoločnosti. Ak neviete, kde začať, ozvite sa nám — prejdeme to s vami.",
  },
  {
    q: "Do kedy môžem do druhého piliera vstúpiť?",
    a: "Dobrovoľne najneskôr do dovŕšenia 40 rokov veku, uzatvorením zmluvy s dôchodkovou správcovskou spoločnosťou. Po vstupe sa pre túto skupinu druhý pilier stáva povinným a už z neho nie je možné vystúpiť.",
    source: "Ministerstvo práce, sociálnych vecí a rodiny SR",
  },
  {
    q: "Vstúpil som do druhého piliera automaticky. Čo to znamená?",
    a: "Automatická účasť vzniká každému, komu vzniklo prvé dôchodkové poistenie po 1. máji 2023 a zároveň nemá viac ako 40 rokov. Nový sporiteľ má 180 dní na výber správcovskej spoločnosti; ak si nevyberie, Sociálna poisťovňa mu ju pridelí. Zároveň má právo do dvoch rokov z druhého piliera vystúpiť.",
    source: "Ministerstvo práce, sociálnych vecí a rodiny SR, NN Slovensko",
  },

  {
    q: "Aký je rozdiel medzi druhým a tretím pilierom?",
    a: "Druhý pilier je časť vašich povinných odvodov presmerovaná na váš osobný účet. Tretí pilier je dobrovoľné sporenie navyše, kam môže prispievať aj zamestnávateľ.",
  },
  {
    q: "Od kedy môžem vstúpiť do tretieho piliera?",
    a: "Vstúpiť môže každý, kto je starší ako 18 rokov.",
    source: "UNIQA",
  },
  {
    q: "Koľko ušetrím na daniach vďaka tretiemu pilieru?",
    a: "Vlastné príspevky do tretieho piliera si možno odpočítať od základu dane, a to najviac do výšky 180 eur ročne. Úľava sa nevzťahuje na príspevky, ktoré za zamestnanca platí zamestnávateľ. Reálna úspora závisí od vášho daňového pásma — prejdeme to s vami konkrétne.",
    source: "Podnikajte.sk, Finea",
  },
  {
    q: "Koľko potrebujem na začiatok investovania?",
    a: "Začať sa dá aj malými pravidelnými sumami. Dôležitejšie než výška je pravidelnosť a horizont — program pravidelného investovania Tempo počíta s minimálnym horizontom 5 rokov.",
    source: "UNIQA",
  },
]

const openIndex = ref<number | null>(null)

function toggle(i: number) {
  openIndex.value = openIndex.value === i ? null : i
}
</script>

<template>
  <section class="bg-surface-card py-16 sm:py-20">
    <div class="mx-auto max-w-[900px] px-5">
      <h2 class="section-heading">Časté otázky</h2>

      <div class="flex flex-col gap-4">
        <div v-for="(faq, i) in faqs" :key="faq.q" class="border-b border-border-subtle">
          <button
            type="button"
            class="flex w-full items-center gap-5 py-5 text-left"
            :aria-expanded="openIndex === i"
            @click="toggle(i)"
          >
            <h3 class="grow text-body-lg font-semibold font-display">{{ faq.q }}</h3>
            <span
              class="material-symbols-outlined shrink-0 text-2xl text-brand-primary transition-transform duration-300 ease-out"
              :class="openIndex === i && 'rotate-180'"
            >
              expand_more
            </span>
          </button>
          <div
            class="overflow-hidden transition-[max-height,opacity] duration-300 ease-out"
            :style="{ maxHeight: openIndex === i ? '400px' : '0px', opacity: openIndex === i ? 1 : 0 }"
          >
            <div class="mb-6 pr-11">
              <p class="text-body-sm leading-relaxed text-ink-muted">{{ faq.a }}</p>
              <p v-if="faq.source" class="mt-2 text-caption text-ink-subtle">Zdroj: {{ faq.source }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
