<script setup lang="ts">
// Same accordion pattern as hypoteky/Faq.vue, own content.
const faqs = [
  {
    q: "Je poistenie cez vás drahšie než online?",
    a: "Nie. Poistné máte rovnaké. Za sprostredkovanie nás odmeňuje poisťovňa, nie vy.",
  },
  {
    q: "Musím starú poistku v inej poisťovni vypovedať sám?",
    a: "Poradíme vám, kedy a ako sa zmluva dá vypovedať, a s výpoveďou vám pomôžeme. Dôležité je nezrušiť starú skôr, než začne platiť nová.",
  },
  {
    q: "Kedy môžem vypovedať poistnú zmluvu?",
    a: "Najčastejšie ku koncu poistného obdobia, pri určitých situáciách aj skôr. Závisí to od typu zmluvy — povedzte nám, akú máte, a overíme to.",
  },
  {
    q: "Čo je spoluúčasť a akú si mám zvoliť?",
    a: "Je to časť škody, ktorú platíte sami. Vyššia spoluúčasť znamená nižšie poistné, ale viac z vlastného pri škode. Prejdeme to podľa toho, koľko by ste vedeli zaplatiť naraz.",
  },
  {
    q: "Prečo poisťovňa niekedy nezaplatí celú škodu?",
    a: "Najčastejšie kvôli podpoisteniu — poistná suma je nižšia než skutočná hodnota majetku. Presne toto kontrolujeme, keď s vami prechádzame existujúce zmluvy.",
  },
  {
    q: "Potrebujem životné poistenie, keď som mladý a zdravý?",
    a: "Životné poistenie nechráni vás, ale ľudí závislých od vášho príjmu, a splátky, ktoré bežia ďalej. Ak nikoho takého nemáte a nemáte úver, možno ho naozaj nepotrebujete — a povieme vám to.",
  },
  {
    q: "Banka mi pri hypotéke vnucuje poistenie — musím ho brať?",
    a: "Poistenie nehnuteľnosti banka pri hypotéke zvyčajne vyžaduje, ale nemusí byť nutne od nej. Prejdeme s vami, čo banka požaduje, a čo z toho vieme pokryť.",
  },
  {
    q: "Ako rýchlo viete vybaviť PZP?",
    a: "Vo väčšine prípadov v deň, keď sa ozvete. Aj na diaľku.",
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
            <p class="mb-6 pr-11 text-body-sm leading-relaxed text-ink-muted">{{ faq.a }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
