<script setup lang="ts">
const faqs = [
  {
    q: "Koľko stojí vaše sprostredkovanie?",
    a: "Nič. Odmenu nám platí banka, s ktorou úver uzatvoríte. Vy neplatíte za sprostredkovanie žiadny poplatok.",
  },
  {
    q: "Aká je minimálna akontácia pri hypotéke?",
    a: "Štandardne banky financujú do 80 % hodnoty nehnuteľnosti, u niektorých klientov aj viac. Presné podmienky prejdeme na osobnej konzultácii.",
  },
  {
    q: "Ako dlho trvá vybavenie hypotéky?",
    a: "Od podania kompletnej žiadosti do podpisu zmluvy to zvyčajne trvá 2 až 4 týždne, v závislosti od banky a znaleckého posudku.",
  },
  {
    q: "Môžem si vybrať banku sám, alebo mi ju vyberiete vy?",
    a: "Pripravíme odporúčanie na základe porovnania podmienok všetkých bánk, konečné rozhodnutie je vždy na vás.",
  },
  {
    q: "Čo ak mám už hypotéku v inej banke?",
    a: "Poradíme, či sa oplatí refinancovanie, prepočítame úsporu a v prípade záujmu vybavíme prechod do výhodnejšej banky.",
  },
  {
    q: "Potrebujem znalecký posudok vopred?",
    a: "Nie, posudok vieme zabezpečiť v rámci procesu vybavovania hypotéky, odporučíme overeného znalca.",
  },
  {
    q: "Dá sa hypotéka vybaviť aj online?",
    a: "Časť procesu áno, no odporúčame osobné stretnutie, aby sme prešli všetky detaily.",
  },
]

const openIndex = ref<number | null>(null)

function toggle(i: number) {
  openIndex.value = openIndex.value === i ? null : i
}
</script>

<template>
  <section class="bg-surface py-16 sm:py-20">
    <div class="mx-auto max-w-[900px] px-5">
      <h2 class="section-heading">Najčastejšie otázky</h2>

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
            <p class="mb-6 pr-11 text-body-sm leading-relaxed text-ink-muted">{{ faq.a }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
