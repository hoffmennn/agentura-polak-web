<script setup lang="ts">
import { branches } from "~/data/branches"
import ContactForm from "~/components/landing/ContactForm.vue";

useSeoMeta({
  title: "Kontakt",
  description: "Kontaktné údaje pobočiek Agentúry Polák v Poprade a Kežmarku a formulár na nezáväzný dopyt.",
})
</script>

<template>
  <div>
    <section class="container-page pt-10 pb-12">
      <div class="max-w-[760px] border-l-4 border-brand-primary pl-6">
        <h1 class="mb-4 text-h1 font-bold tracking-tight text-brand-primary font-display">Sme tu pre vás</h1>
        <p class="text-lede leading-relaxed text-ink-muted">Kontaktujte nás telefonicky alebo vyplňte formulár.</p>
      </div>
    </section>

    <section class="container-page grid grid-cols-1 gap-6 py-4 md:grid-cols-2">
      <article v-for="b in branches" :key="b.slug" class="card overflow-hidden">
        <!-- Text content + silhouette watermark share this zone only —
             kept separate from the map panel below so the map can never
             cover the silhouette, and vice versa. -->
        <div class="group relative overflow-hidden p-8">
          <!--<BranchSilhouette :src="b.silhouette" :variant="b.silhouetteVariant" />-->
          <div class="relative">
            <h2 class="mb-5 text-h2 font-semibold text-brand-primary font-display">Pobočka {{ b.name }}</h2>
            <div class="grid grid-cols-1 gap-5 text-ink-muted sm:grid-cols-2">
              <div>
                <div class="mb-1.5 flex items-center gap-1.5 text-label font-semibold text-brand-primary">
                  <span class="material-symbols-outlined text-[18px]">location_on</span>Adresa
                </div>
                <p class="m-0">{{ b.address }}</p>
              </div>
              <div>
                <div class="mb-1.5 flex items-center gap-1.5 text-label font-semibold text-brand-primary">
                  <span class="material-symbols-outlined text-[18px]">call</span>Kontakt
                </div>
                <p class="m-0">
                  <a :href="`tel:+421${b.phone.replace(/\s/g, '').replace(/^0/, '')}`" class="text-ink-muted no-underline hover:text-brand-primary">
                    {{ b.phone }}
                  </a>
                </p>
              </div>
            </div>
            <div class="mt-6 flex justify-between border-t border-border-subtle pt-5">
              <span class="flex items-center gap-1.5 text-label font-semibold text-brand-primary">
                <span class="material-symbols-outlined text-[18px]">schedule</span>Otváracie hodiny
              </span>
              <em class="text-ink-muted">{{ b.hours }}</em>
            </div>
          </div>
        </div>

        <!-- Map panel — real embed once b.mapEmbedUrl is set (see
             data/branches.ts for how to fill it in), placeholder until
             then so the card never ships a broken/empty iframe. -->
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
    </section>
  </div>

  <contact-form></contact-form>
</template>
