<script setup lang="ts">

const related = [
  { icon: "shield_person", label: "Poistenie", to: "/poistenie" },
  { icon: "trending_up", label: "Investície a sporenie", to: "/financie" },
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
