<script setup lang="ts">
const services = [
  {
    icon: "shield_person",
    title: "Poistenie",
    description: "Ochrana toho, na čom vám záleží — od auta po zdravie.",
    items: [
      "Životné a úrazové poistenie",
      "PZP a havarijné poistenie",
      "Poistenie domu a domácnosti",
      "Cestovné poistenie",
    ],
  },
  {
    icon: "real_estate_agent",
    title: "Hypotéky a úvery",
    description: "Porovnáme ponuky všetkých bánk na Slovensku a vybavíme papierovačky za vás.",
    items: [
      "Hypotéka na kúpu, stavbu, rekonštrukciu",
      "Refinancovanie existujúceho úveru",
      "Spotrebné úvery a konsolidácia",
      "Lízing a financovanie",
    ],
  },
  {
    icon: "trending_up",
    title: "Investície a sporenie",
    description: "Aby peniaze neležali na účte a nestrácali hodnotu.",
    items: ["II. a III. dôchodkový pilier", "Pravidelné investovanie", "Sporenie na bývanie a na deti"],
  },
]
</script>

<template>
  <section id="sluzby" class="bg-surface py-24">
    <div class="container-page">
      <h2 class="section-heading">Naše služby</h2>

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article v-for="svc in services" :key="svc.title" class="card flex flex-col">
          <div class="grow p-8">
            <span class="material-symbols-outlined text-icon-lg text-brand-primary">{{ svc.icon }}</span>
            <h3 class="mb-3 mt-5 text-[22px] font-semibold font-display">{{ svc.title }}</h3>
            <p class="mb-6 leading-relaxed text-ink-muted">{{ svc.description }}</p>
            <ul class="m-0 flex list-none flex-col gap-2.5 p-0">
              <li v-for="item in svc.items" :key="item" class="flex gap-2">
                <span class="material-symbols-outlined shrink-0 text-[20px] text-brand-primary">check_box</span>
                {{ item }}
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
