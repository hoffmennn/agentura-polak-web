<script setup lang="ts">
const products = [
  {
    icon: "home",
    title: "Hypotéka na kúpu nehnuteľnosti",
    desc: "Financovanie kúpy bytu, domu alebo pozemku. Pomôžeme vybrať banku podľa vašej situácie a pripravíme kompletné podklady k žiadosti.",
  },
  {
    icon: "construction",
    title: "Stavba a rekonštrukcia",
    desc: "Hypotéka na výstavbu domu alebo väčšiu rekonštrukciu, vrátane čerpania po etapách a komunikácie s bankou pri kontrolách stavby.",
  },
  {
    icon: "sync_alt",
    title: "Refinancovanie úveru",
    desc: "Ak sa vám blíži koniec fixácie alebo máte drahší úver, porovnáme aktuálne ponuky a prevedieme vás celým procesom prechodu do inej banky.",
  },
  {
    icon: "payments",
    title: "Spotrebné úvery a konsolidácia",
    desc: "Financovanie bez záložného práva na nehnuteľnosť — na vybavenie domácnosti, auto, alebo spojenie viacerých úverov do jednej nižšej splátky.",
  },
]
</script>

<template>
  <section id="produkty" class="bg-surface-card py-16 sm:py-20">
    <div class="mx-auto max-w-[900px] px-5">
      <h2 class="section-heading">Naše produkty</h2>

      <div class="flex flex-col">
        <div
          v-for="p in products"
          :key="p.title"
          class="flex items-start gap-5 border-b border-border-subtle py-6 first:pt-0 last:border-b-0"
        >
          <span class="material-symbols-outlined mt-0.5 shrink-0 text-[26px] text-brand-primary">{{ p.icon }}</span>
          <div>
            <h3 class="mb-2 text-body-lg font-semibold font-display">{{ p.title }}</h3>
            <p class="text-body-sm leading-relaxed text-ink-muted">{{ p.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
