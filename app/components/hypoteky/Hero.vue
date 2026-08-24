<script setup lang="ts">

</script>

<template>
  <section class="relative overflow-hidden border-b-2 border-border-strong py-24 text-white sm:py-32">
    <div class="absolute inset-0 z-0">
      <NuxtImg src="/services/mortage.jpg" alt="Stavba domu s lešením" width="768" height="1024" class="h-full w-full object-cover" />
      <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,22,25,0.55)_0%,rgba(20,22,25,0.82)_100%)]" />
    </div>

    <div class="container-page relative z-10">
      <h1 class="mb-5 max-w-[780px] text-[40px] leading-[1.1] font-bold tracking-tight font-display sm:text-[48px]">
        Hypotéka a úver u nás
      </h1>
      <p class="mb-10 max-w-[600px] text-body-lg leading-relaxed text-border-subtle">
        Nezávisle. Bez poplatku za sprostredkovanie. Vybavíme papierovačky za vás a nájdeme pre vás tie najlepšie
        podmienky.
      </p>
      <div class="flex flex-wrap gap-4">
        <a href="#kontaktny-formular" class="btn-primary-dark">Nezáväzná konzultácia</a>
        <a
          href="#produkty"
          class="inline-flex items-center justify-center gap-2 border-2 border-line-dark-subtle bg-transparent px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors duration-150 hover:border-brand-accent-dark hover:text-brand-accent-dark"
        >
          Naše produkty
        </a>
      </div>
    </div>
  </section>
</template>
