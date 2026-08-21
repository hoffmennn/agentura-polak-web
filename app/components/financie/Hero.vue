<script setup lang="ts">
/**
 * Dark hero — same overlay/gradient treatment as Poistenie/Hypotéky Hero,
 * plus an eyebrow badge (new here: the source uses a raw cyan chip on the
 * hero, ported as brand-accent-dark on surface-dark rather than a new
 * hardcoded color).
 */
const URGENT_PHONE = "0901 234 567"
const URGENT_PHONE_TEL = "+421901234567"

const checklist = [
  "Bezplatná kontrola vášho dôchodkového nastavenia",
  "Osobne v Poprade a Kežmarku",
]
</script>

<template>
  <section class="relative overflow-hidden border-b-2 border-border-strong py-24 text-white sm:py-32">
    <div class="absolute inset-0 z-0">
      <img src="/services/invest.jpg" alt="Investície a sporenie" class="h-full w-full object-cover">
      <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,22,25,0.55)_0%,rgba(20,22,25,0.82)_100%)]" />
    </div>

    <div class="container-page relative z-10">
      <h1 class="mb-3 max-w-[780px] text-[40px] leading-[1.1] font-bold tracking-tight font-display sm:text-[48px]">
        Dôchodok, sporenie a investovanie
      </h1>
      <p class="mb-8 max-w-[600px] text-body-lg leading-relaxed text-border-subtle">
        Prejdeme, v akom stave máte financie, a ako môžu naberať na hodnote. Bez záväzku a bez poplatku.
      </p>

      <ul class="m-0 mb-10 flex list-none flex-col gap-3 p-0">
        <li v-for="item in checklist" :key="item" class="flex items-center gap-2.5">
          <span class="material-symbols-outlined text-[22px] text-brand-accent-dark">check</span>
          <span class="text-body-sm">{{ item }}</span>
        </li>
      </ul>

      <div class="flex flex-wrap gap-4">
        <a href="#kontaktny-formular" class="btn-primary-dark">Chcem bezplatnú kontrolu</a>
        <a
          :href="`tel:${URGENT_PHONE_TEL}`"
          class="inline-flex items-center justify-center gap-2 border-2 border-line-dark-subtle bg-transparent px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors duration-150 hover:border-brand-accent-dark hover:text-brand-accent-dark"
        >
          <span class="material-symbols-outlined text-[20px]">call</span>
          Zavolať: {{ URGENT_PHONE }}
        </a>
      </div>
    </div>
  </section>
</template>
