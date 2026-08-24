<script setup lang="ts">

import { services } from "~/data/services"

const props = defineProps<{
  slug: string
}>()

const svc = services.find((s) => s.slug === props.slug)
if (!svc) {
  throw createError({ statusCode: 404, statusMessage: `Unknown service: ${props.slug}` })
}

useSeoMeta({
  title: svc.title,
  description: svc.description,
})
</script>

<template>
  <div>
    <section class="container-page pt-20 pb-12">
      <div class="max-w-[760px] border-l-4 border-brand-primary pl-6">
        <h1 class="mb-4 text-h1 font-bold tracking-tight text-brand-primary font-display">{{ svc.title }}</h1>
        <p class="text-lede leading-relaxed text-ink-muted">{{ svc.description }}</p>
      </div>
    </section>

    <section class="container-page pb-12">
      <div class="card relative min-h-[280px] overflow-hidden sm:min-h-[380px]">
        <NuxtImg
          :src="svc.image"
          :alt="svc.title"
          :width="svc.imageWidth"
          :height="svc.imageHeight"
          class="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>

    <section class="container-page pb-20">
      <div class="card p-8 sm:p-10">
        <div class="mb-6 flex h-14 w-14 items-center justify-center bg-surface-alt">
          <span class="material-symbols-outlined text-icon-lg text-brand-primary">{{ svc.icon }}</span>
        </div>

        <h2 class="mb-6 text-h2 font-semibold font-display">Čo pre vás zabezpečíme</h2>
        <ServiceChecklist :rows="svc.rows" class="mb-8" />

        <div class="mb-8 border-t border-border-subtle pt-6">
          <div class="label-caption mb-3">{{ svc.partnersLabel }}</div>
          <LandingTrustBar v-if="svc.partnersMarquee" />
          <div v-else class="flex flex-wrap gap-x-4 gap-y-1">
            <span v-for="p in svc.partners" :key="p" class="text-label font-semibold text-ink-muted">{{ p }}</span>
          </div>
        </div>

        <NuxtLink to="/#kontaktny-formular" class="btn-primary">Nezáväzný dopyt</NuxtLink>
      </div>
    </section>
  </div>
</template>
