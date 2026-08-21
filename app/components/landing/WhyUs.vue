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
    description: "Poprad a Kežmarok. Navštívte nás kedykoľvek osobne na našich pobočkách.",
  },
  {
    icon: "account_balance",
    title: "Všetko pod jednou strechou",
    description: "Poistenie, hypotéka aj investície na jednom mieste.",
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
        <article v-for="b in branches" :key="b.slug" class="card overflow-hidden">
          <!-- Text content + silhouette watermark share this zone only —
               kept separate from the map panel below so the map can never
               cover the silhouette, and vice versa (same split as
               /kontakt). Given a min-height so the tall "tower" crop has
               room to show in full instead of getting clipped short. -->
          <div class="group relative min-h-[320px] overflow-hidden p-8 sm:min-h-[360px]">
            <BranchSilhouette :src="b.silhouette" :variant="b.silhouetteVariant" />
            <div class="relative">
              <h3 class="mb-4 text-h3-lg font-semibold text-brand-primary font-display">Pobočka {{ b.name }}</h3>
              <p class="mb-2 text-ink-muted">Adresa: {{ b.address }}</p>
              <p class="mb-2 text-ink-muted">Telefón: {{ b.phone }}</p>
              <p class="mb-5 text-ink-muted">Otváracie hodiny: {{ b.hours }}</p>
              <NuxtLink to="/kontakt" class="text-nav font-semibold tracking-wide text-brand-accent no-underline">
                Viac o pobočke →
              </NuxtLink>
            </div>
          </div>

          <!-- Map panel — same real embed/placeholder split as /kontakt. -->
          <div class="border-t-2 border-border-strong">
            <iframe
              v-if="b.mapEmbedUrl"
              :src="b.mapEmbedUrl"
              :title="`Mapa — Pobočka ${b.name}`"
              class="block h-56 w-full border-0 sm:h-64"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
            <div v-else class="flex h-40 flex-col items-center justify-center gap-2 bg-surface-alt sm:h-48">
              <span class="material-symbols-outlined text-3xl text-ink-subtle">map</span>
              <span class="text-label text-ink-subtle">Mapa bude doplnená</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
