<script setup lang="ts">
const highlights = [
  { icon: "search", title: "Nájdeme pre vás najlepšiu ponuku" },
  { icon: "payments", title: "Bez poplatku pre klienta" },
  { icon: "description", title: "Papierovačky vybavíme za vás" },
]
</script>

<template>
  <section class="bg-surface-card py-12 sm:py-16">
    <div class="container-page grid grid-cols-1 gap-6 sm:grid-cols-3">
      <div v-for="h in highlights" :key="h.title" class="flex flex-col gap-4 bg-brand-primary p-8">
        <span class="material-symbols-outlined text-icon-lg text-brand-accent-dark">{{ h.icon }}</span>
        <h3 class="text-h4 font-semibold text-white font-display">{{ h.title }}</h3>
      </div>
    </div>
  </section>
</template>
