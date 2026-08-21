<script setup lang="ts">
/** Real client story from the source (unlike HypotekyCaseStudy, which still
 * carries a placeholder quote) — light bg, matching the source exactly
 * rather than reusing Hypotéky's brand-primary treatment for this section. */
</script>

<template>
  <section class="bg-surface py-16 sm:py-20">
    <div class="mx-auto grid max-w-[900px] grid-cols-[auto_1fr] gap-6 px-5 sm:gap-8">
      <span class="material-symbols-outlined text-[40px] text-brand-primary sm:text-[48px]">format_quote</span>
      <div>
        <h3 class="mb-4 text-h3-lg font-semibold font-display">„Reálna recenzia / príbeh klienta?“</h3>
        <p class="mb-4 leading-relaxed text-ink-muted">
          Popis situácie
        </p>
        <p class="mb-4 leading-relaxed text-ink-muted">
          Riešenie
        </p>
        <p class="text-body-lg font-semibold font-display">
          Poisťovňa vyplatila xxx €. &
        </p>
      </div>
    </div>
  </section>
</template>
