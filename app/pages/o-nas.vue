<script setup lang="ts">
useSeoMeta({
  title: "O nás",
  description:
    "Naša agentúra a tím — odborníci na poistenie, hypotéky a investície v Poprade a Kežmarku, s dôrazom na osobný prístup.",
})

// Placeholder names/roles/photos, exactly as the source prototype ships
// them (its own on-page copy: "Zástupné mená a pozície — nahraďte
// reálnymi členmi tímu"). Replace with the real team once photos/bios
// exist — intentionally not shown as on-page text to site visitors.
const team = [
  {
    name: "Meno Priezvisko",
    role: "Poistný poradca",
    description: "Životné a neživotné poistenie na mieru pre rodiny a jednotlivcov.",
  },
  {
    name: "Meno Priezvisko",
    role: "Hypotekárny špecialista",
    description: "Popis...",
  },
  {
    name: "Meno Priezvisko",
    role: "Investičné poradenstvo",
    description: "Popis...",
  },
  {
    name: "Meno Priezvisko",
    role: "Klientsky servis",
    description: "Popis...",
  },
]
</script>

<template>
  <div>
    <section class="container-page pt-20 pb-16">
      <div class="max-w-[760px] border-l-4 border-brand-primary pl-6">
        <h1 class="mb-4 text-h1 font-bold tracking-tight text-brand-primary font-display">Naša agentúra a tím</h1>
        <p class="text-lede leading-relaxed text-ink-muted">
          Náš tím má dlhoročné skúsenosti v oblasti poisťovníctva a bankovníctva. Poskytujeme klientom v Poprade a Kežmarku odborné poradenstvo bez záväzku.
        </p>
      </div>
    </section>

    <section class="container-page pb-20">
      <div class="grid grid-cols-1 gap-6 lg:grid-cols-[5fr_7fr]">
        <PhotoPlaceholder class="min-h-[420px] w-full border-2 border-border-strong" />
        <div class="card flex flex-col justify-center p-10">
          <h2 class="mb-4 text-h2-lg font-semibold font-display">Ing. Matúš Polák</h2>
          <p class="mb-6 leading-relaxed text-ink-muted">
            Popis...
          </p>
          <div class="flex gap-10 border-t border-border-subtle pt-5">
            <StatBlock value="20+" label="rokov praxe" />
            <StatBlock value="500+" label="spokojných klientov" />
          </div>
        </div>
      </div>
    </section>

    <section class="border-y-2 border-border-strong bg-surface-alt py-20">
      <div class="container-page">
        <h2 class="section-heading">Náš odborný tím</h2>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <article v-for="member in team" :key="member.name" class="card">
            <PhotoPlaceholder class="h-[220px] w-full border-b-2 border-border-strong" />
            <div class="p-5">
              <h3 class="mb-1 text-h4 font-semibold font-display">{{ member.name }}</h3>
              <div class="mb-2.5 text-label font-semibold text-brand-accent">{{ member.role }}</div>
              <p class="text-body-sm leading-relaxed text-ink-muted">{{ member.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
