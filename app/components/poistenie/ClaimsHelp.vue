<script setup lang="ts">

const URGENT_PHONE = "0901 234 567"

const checklist = [
  "Poradíme, čo si zdokumentovať",
  "Pomôžeme s nahlásením a s vyplnením formulárov",
  "Sledujeme priebeh poistého konania",
  "Ak poisťovňa plnenie kráti alebo zamietne, pomôžeme vám sa brániť",
]

const incidents = [
  {
    icon: "directions_car",
    title: "Dopravná nehoda",
    desc: "Zabezpečte miesto, zapnite výstražné svetlá, oblečte vestu. Pri zranení alebo škode nad limit volajte políciu (158). Vyplňte správu o nehode a odfoťte: pozíciu vozidiel, poškodenia z viacerých uhlov, ŠPZ, dopravné značenie. Potom zavolajte nám — zvyšok prevezmeme.",
  },
  {
    icon: "home",
    title: "Škoda na dome alebo byte",
    desc: "Najprv zastavte príčinu (uzavrite vodu, vypnite elektrinu). Nič neupratujte a nevyhadzujte, kým to neodfotíte — poisťovňa potrebuje vidieť rozsah. Odfoťte všetko vrátane celkových záberov miestnosti. Ak škoda zasiahla susedov, informujte ich. Volajte nám čo najskôr.",
  },
  {
    icon: "personal_injury",
    title: "Úraz alebo hospitalizácia",
    desc: "Vyhľadajte lekárske ošetrenie a odložte si všetky správy, prepúšťacie správy a doklady o výdavkoch. Nahlásenie nemá zmysel odkladať — pri niektorých plneniach sú lehoty. Ozvite sa nám a povieme vám presne, čo poisťovňa bude potrebovať.",
  },
]

const openIndex = ref<number | null>(null)

function toggle(i: number) {
  openIndex.value = openIndex.value === i ? null : i
}
</script>

<template>
  <section class="bg-surface-dark py-16 text-white sm:py-20">
    <div class="mx-auto max-w-[1000px] px-5">
      <h2 class="mb-4 text-h1-section font-semibold tracking-tight font-display">
        Stalo sa niečo? Nezostanete na to sami.
      </h2>
      <p class="mb-6 max-w-[700px] leading-relaxed text-border-subtle">
        Nahláste škodovú udalosť bez stresu. Prevedieme vás celým procesom a pomôžeme vám v kritických chvíľach.
      </p>

      <div class="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div v-for="item in checklist" :key="item" class="flex items-start gap-2.5">
          <span class="material-symbols-outlined shrink-0 text-[20px] text-brand-accent-dark">check</span>
          <span class="text-body-sm text-border-subtle">{{ item }}</span>
        </div>
      </div>

      <p class="mb-11 flex items-center gap-2.5">
        <span class="material-symbols-outlined text-brand-accent-dark">call</span>
        <span class="text-body-sm">Linka pre poistné udalosti: {{ URGENT_PHONE }}</span>
      </p>

      <div class="flex flex-col gap-4">
        <div v-for="(inc, i) in incidents" :key="inc.title" class="border border-border-strong bg-surface-dark-alt">
          <button
            type="button"
            class="flex w-full items-center gap-4 px-6 py-5 text-left"
            :aria-expanded="openIndex === i"
            @click="toggle(i)"
          >
            <span class="material-symbols-outlined shrink-0 text-[26px] text-brand-accent-dark">{{ inc.icon }}</span>
            <h3 class="grow text-body-lg font-semibold font-display">{{ inc.title }}</h3>
            <span
              class="material-symbols-outlined shrink-0 text-2xl text-brand-accent-dark transition-transform duration-300 ease-out"
              :class="openIndex === i && 'rotate-180'"
            >
              expand_more
            </span>
          </button>
          <div
            class="overflow-hidden transition-[max-height,opacity] duration-300 ease-out"
            :style="{ maxHeight: openIndex === i ? '260px' : '0px', opacity: openIndex === i ? 1 : 0 }"
          >
            <p class="px-6 pb-6 pl-[66px] text-body-sm leading-relaxed text-border-subtle">{{ inc.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
