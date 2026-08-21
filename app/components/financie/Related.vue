<script setup lang="ts">
// Same pattern as hypoteky/Related.vue and poistenie/Related.vue —
// excludes financie itself, matching the source.
const related = [
  { icon: "real_estate_agent", label: "Hypotéky a úvery", to: "/hypoteky" },
  { icon: "shield_person", label: "Poistenie", to: "/poistenie" },
]
</script>

<template>
  <section class="bg-surface-card py-16 sm:pb-24">
    <div class="container-page">
      <h2 class="mb-6 text-h3-lg font-semibold font-display">Súvisiace služby</h2>
      <div class="flex flex-wrap gap-4">
        <NuxtLink
          v-for="item in related"
          :key="item.to"
          :to="item.to"
          class="flex items-center gap-2.5 border-2 border-border-strong px-6 py-4 text-body-sm font-semibold no-underline transition-colors duration-150 hover:border-brand-primary hover:text-brand-primary"
        >
          <span class="material-symbols-outlined text-brand-primary">{{ item.icon }}</span>
          {{ item.label }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
