<script setup lang="ts">
// Headline phrases that cycle via the shared `.animate-cycle-text` keyframe
// (main.css). Order matters — it drives the animation's timing steps.
const cyclePhrases = ["vaše financie", "vašu hypotéku", "vaše poistenie", "váš lízing", "vaše investície"]
</script>

<template>
  <section class="relative overflow-hidden border-b-2 border-border-strong bg-surface-dark py-24 text-white sm:py-28">
    <div class="absolute inset-0 z-0">
      <img
        src="/hero.png"
        alt="Panoramatický výhľad na Poprad a Vysoké Tatry"
        class="h-full w-full object-cover"
      >
      <div class="absolute inset-0 bg-[rgba(20,22,25,0.68)]" />

    </div>

    <div class="container-page relative z-10">
      <div class="max-w-[680px]">
        <h1 class="mb-6 text-h1-hero leading-[52px] font-bold tracking-tight font-display">
          Riešenia na mieru pre<br>
          <span class="inline-flex h-[1.15em] overflow-hidden align-bottom text-brand-accent-dark">
            <ul class="m-0 list-none p-0 animate-cycle-text">
              <li v-for="phrase in cyclePhrases" :key="phrase" class="h-[1.15em] leading-[1.15em]">
                {{ phrase }}
              </li>
            </ul>
          </span>
        </h1>

        <p class="mb-10 max-w-[520px] border-l-4 border-brand-accent-dark pl-6 text-body-lg leading-7 text-border-subtle">
          Už viac ako 20 rokov pomáhame ľuďom v Poprade a Kežmarku rozhodovať sa o peniazoch. Osobne, zrozumiteľne,
          bez záväzku.
        </p>

        <div class="flex flex-wrap gap-4">
          <NuxtLink to="#kontaktny-formular" class="btn-primary-dark">Dohodnúť stretnutie</NuxtLink>
          <NuxtLink
            to="#sluzby"
            class="inline-flex items-center justify-center gap-2 border-2 border-line-dark-subtle bg-transparent px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors duration-150 hover:border-brand-accent-dark hover:text-brand-accent-dark"
          >
            Naše služby
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
