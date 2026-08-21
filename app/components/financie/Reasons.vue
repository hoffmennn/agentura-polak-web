<script setup lang="ts">
// Same IconTile + heading + description row as landing/WhyUs.vue — reused
// directly rather than re-styling plain icons like the source does.
const reasons = [
  {
    icon: "hourglass_bottom",
    title: "Peniaze na bežnom účte ticho strácajú na hodnote",
    description:
      "Keď peniaze ležia na bežnom účte alebo v hotovosti doma, ich kúpna sila každý rok klesá. Poradíme vám ako nastaviť vaše sporenie.",
  },
  {
    icon: "trending_down",
    title: "Štátny dôchodok sám o sebe stačiť nebude",
    description:
      "Pomer pracujúcich k dôchodcom sa dlhodobo zhoršuje. Bez vlastných úspor či investícií bude udržať si životný štandard na dôchodku čoraz ťažšie.",
  },
  {
    icon: "schedule",
    title: "Pri sporení nerozhoduje suma, ale čas",
    description:
      "Sto eur mesačne od tridsiatky urobí viac než dvesto eur od päťdesiatky. Najdôležitejší krok pri tvorbe úspor je začať čo najskôr.",
  },
]
</script>

<template>
  <section class="bg-surface py-16 sm:py-20">
    <div class="container-page">
      <h2 class="section-heading">Prečo si sporiť na dôchodok?</h2>

      <div class="grid grid-cols-1 gap-8 sm:grid-cols-3">
        <div v-for="reason in reasons" :key="reason.title" class="flex flex-col gap-4">
          <IconTile :icon="reason.icon" />
          <h3 class="text-h4 font-semibold font-display">{{ reason.title }}</h3>
          <p class="text-body-sm leading-relaxed text-ink-muted">{{ reason.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
