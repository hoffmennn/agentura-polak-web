<script setup lang="ts">
const checkItems = [
  "Kde máte medzery — čo si myslíte, že je kryté, a nie je",
  "Kde je krytie poddimenzované",
  "Za čo platíte a nepotrebujete to",
]
</script>

<template>
  <section class="bg-surface-card py-16 sm:py-20">
    <div class="mx-auto max-w-[820px] px-5">
      <h2 class="mb-4 text-h1-section font-semibold tracking-tight font-display">
        Máte poistky uzavreté pred rokmi? Prineste ich.
      </h2>
      <p class="mb-6 leading-relaxed text-ink-muted">
        To, čo stačilo pred rokmi, vás dnes neochráni. Dom za poistnú sumu z roku 2015 už nepostavíte..
      </p>
      <p class="mb-4 text-body-lg font-semibold font-display">Prejdeme spoločne s vami vaše zmluvy a poradíme:</p>

      <ul class="m-0 mb-7 flex list-none flex-col gap-3 p-0">
        <li v-for="item in checkItems" :key="item" class="flex items-start gap-2.5">
          <span class="material-symbols-outlined shrink-0 text-[20px] text-brand-primary">check</span>
          <span class="text-body-sm text-ink">{{ item }}</span>
        </li>
      </ul>

      <p class="mb-7 leading-relaxed text-ink-muted">
        Ak vám vieme z portfólia UNIQA ponúknuť lepšie riešenie, ukážeme vám ho a vysvetlíme rozdiel.
      </p>

      <a href="#kontaktny-formular" class="btn-primary">Chcem prejsť svoje poistky</a>
    </div>
  </section>
</template>
