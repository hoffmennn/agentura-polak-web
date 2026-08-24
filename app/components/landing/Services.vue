<script setup lang="ts">

import { services } from "~/data/services"

// One-shot scroll reveal for each card's CTA button — plain
// IntersectionObserver rather than a new dependency (@vueuse/core isn't
// installed and nothing else in the codebase needs it yet).
const cardEls: (Element | null)[] = []
const buttonVisible = reactive(services.map(() => false))

function setCardRef(el: Element | null, index: number) {
  cardEls[index] = el
}

onMounted(() => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  if (prefersReducedMotion) {
    buttonVisible.fill(true)
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        const index = cardEls.indexOf(entry.target)
        if (index !== -1) buttonVisible[index] = true
        observer.unobserve(entry.target)
      }
    },
    { threshold: 0.3 },
  )

  for (const el of cardEls) {
    if (el) observer.observe(el)
  }

  onBeforeUnmount(() => observer.disconnect())
})
</script>

<template>
  <section id="sluzby" class="bg-surface py-12">
    <div class="container-page">
      <h2 class="section-heading">Naše služby</h2>

      <div class="flex flex-col gap-4">
        <article
          v-for="(svc, index) in services"
          :key="svc.title"
          :ref="(el) => setCardRef(el as Element | null, index)"
          class="card group overflow-hidden border-t-4 border-t-brand-primary"
        >
          <div class="grid lg:grid-cols-[1.15fr_1fr]">
            <div class="relative order-2 min-w-0 p-8 sm:p-10 lg:order-1">

              <span
                class="pointer-events-none absolute top-4 right-6 text-[40px] leading-none font-bold text-border-subtle select-none sm:text-[40px]"
              >
                {{ String(index + 1).padStart(2, "0") }}
              </span>


              <div class="relative flex flex-col">
                <h3 class="mb-3 text-h2 font-semibold font-display">{{ svc.title }}</h3>
                <p class="mb-6 max-w-[46ch] leading-relaxed text-ink-muted">{{ svc.description }}</p>

                <ServiceChecklist :rows="svc.rows" class="mb-6" />

                <div class="mb-6 border-t border-border-subtle pt-5">
                  <div class="label-caption mb-3">{{ svc.partnersLabel }}</div>
                  <LandingTrustBar v-if="svc.partnersMarquee" />
                  <div v-else class="flex flex-wrap gap-x-4 gap-y-1">
                    <span v-for="p in svc.partners" :key="p" class="text-label font-semibold text-ink-muted">{{ p }}</span>
                  </div>
                </div>

                <div
                  class="origin-left self-start transition duration-700 ease-out"
                  :class="buttonVisible[index] ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'"
                >
                  <NuxtLink :to="`/${svc.slug}`" class="btn-primary group/btn">
                    Zistiť viac
                    <span class="inline-block transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                  </NuxtLink>
                </div>
              </div>
            </div>

            <div class="relative order-1 min-h-[220px] overflow-hidden lg:order-2 lg:min-h-full">
              <NuxtImg
                :src="svc.image"
                :alt="svc.title"
                :width="svc.imageWidth"
                :height="svc.imageHeight"
                loading="lazy"
                class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
