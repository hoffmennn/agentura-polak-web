<script setup lang="ts">
import { branches } from "~/data/branches"

const reasons = [
  {
    icon: "history",
    title: "20+ rokov na trhu",
    description: "Poznáme región a jeho ľudí. Zakladáme si na dlhodobých vzťahoch a dôvere.",
  },
  {
    icon: "storefront",
    title: "Dve pobočky",
    description: "Poprad a Kežmarok. Prídete kedykoľvek osobne, nie sme len hlas v telefóne.",
  },
  {
    icon: "account_balance",
    title: "Všetko pod jednou strechou",
    description: "Poistenie, hypotéka aj investície na jednom mieste, člen maklérskeho domu UNIVERSAL.",
  },
]
</script>

<template>
  <section class="border-y-2 border-border-strong bg-surface-alt py-24">
    <div class="container-page">
      <h2 class="section-heading">Prečo my</h2>

      <div class="mb-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="reason in reasons" :key="reason.title" class="flex items-start gap-4">
          <IconTile :icon="reason.icon" />
          <div>
            <h4 class="mb-1.5 text-h4 font-semibold font-display">{{ reason.title }}</h4>
            <p class="leading-relaxed text-ink-muted">{{ reason.description }}</p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <article v-for="b in branches" :key="b.slug" class="card relative overflow-hidden">
          <img :src="b.silhouette" alt="" class="absolute inset-0 h-full w-full object-cover opacity-[0.08]">
          <div class="relative p-8">
            <h3 class="mb-4 text-h3-lg font-semibold text-brand-primary font-display">Pobočka {{ b.name }}</h3>
            <p class="mb-2 text-ink-muted">Adresa: <em>doplníme</em></p>
            <p class="mb-2 text-ink-muted">Telefón: <em>doplníme</em></p>
            <p class="mb-5 text-ink-muted">Otváracie hodiny: <em>doplníme</em></p>
            <NuxtLink to="/kontakt" class="text-nav font-semibold tracking-wide text-brand-accent no-underline">
              Zobraziť na mape →
            </NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
