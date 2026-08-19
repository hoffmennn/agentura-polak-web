<script setup lang="ts">
import { branches } from "~/data/branches"
import ContactForm from "~/components/landing/ContactForm.vue";

useSeoMeta({
  title: "Kontakt",
  description: "Kontaktné údaje pobočiek Agentúry Polák v Poprade a Kežmarku a formulár na nezáväzný dopyt.",
})
</script>

<template>
  <div>
    <section class="container-page pt-20 pb-12">
      <div class="max-w-[760px] border-l-4 border-brand-primary pl-6">
        <h1 class="mb-4 text-h1 font-bold tracking-tight text-brand-primary font-display">Sme tu pre vás</h1>
        <p class="text-lede leading-relaxed text-ink-muted">Kontaktné údaje pobočiek a formulár na nezáväzný dopyt.</p>
      </div>
    </section>

    <section class="container-page grid grid-cols-1 items-start gap-6 py-16 lg:grid-cols-[7fr_5fr]">
      <div class="flex flex-col gap-6">
        <article v-for="b in branches" :key="b.slug" class="card relative overflow-hidden">
          <img :src="b.silhouette" alt="" class="absolute top-0 right-0 h-full w-auto object-contain opacity-[0.06]">
          <div class="relative p-8">
            <h2 class="mb-5 text-h2 font-semibold text-brand-primary font-display">Pobočka {{ b.name }}</h2>
            <div class="grid grid-cols-1 gap-5 text-ink-muted sm:grid-cols-2">
              <div>
                <div class="mb-1.5 flex items-center gap-1.5 text-label font-semibold text-brand-primary">
                  <span class="material-symbols-outlined text-[18px]">location_on</span>Adresa
                </div>
                <p class="m-0"><em>doplníme</em></p>
              </div>
              <div>
                <div class="mb-1.5 flex items-center gap-1.5 text-label font-semibold text-brand-primary">
                  <span class="material-symbols-outlined text-[18px]">call</span>Kontakt
                </div>
                <p class="m-0"><em>doplníme</em></p>
              </div>
            </div>
            <div class="mt-6 flex justify-between border-t border-border-subtle pt-5">
              <span class="flex items-center gap-1.5 text-label font-semibold text-brand-primary">
                <span class="material-symbols-outlined text-[18px]">schedule</span>Otváracie hodiny
              </span>
              <em class="text-ink-muted">doplníme</em>
            </div>
          </div>
        </article>

        <div id="gdpr" class="border-2 border-border-strong bg-surface-alt p-8">
          <h2 class="mb-3 text-h3 font-semibold text-brand-primary font-display">Ochrana osobných údajov</h2>
          <p class="mb-3 leading-relaxed text-ink-muted">
            Agentúra Polák je podriadeným finančným agentom v podregistri poskytovania úverov (reg. č. navrhovateľa
            3389 — UNIVERSAL maklérsky dom, a.s.) a viazaným finančným agentom v podregistroch poistenia, kapitálového
            trhu, starobného a doplnkového dôchodkového sporenia (UNIQA poisťovňa, a.s., UNIQA investičná spoločnosť,
            a.s., UNIQA d.s.s., a.s., UNIQA d.d.s., a.s.).
          </p>
          <p class="leading-relaxed text-ink-muted">
            Osobné údaje z formulárov spracúvame výlučne za účelom vybavenia vášho dopytu a sprostredkovania
            finančných produktov. Register finančných agentov: nbs.sk.
          </p>
        </div>
      </div>

      <div class="card sticky top-[100px] p-8">
        <h3 class="mb-2 text-h3 font-semibold font-display">Napíšte nám</h3>
        <p class="mb-6 leading-relaxed text-ink-muted">
          Máte otázku alebo záujem o cenovú ponuku? Náš interaktívny formulár vás prevedie krok za krokom.
        </p>
        <NuxtLink to="/#kontaktny-formular" class="btn-primary">Otvoriť formulár</NuxtLink>
      </div>
    </section>
  </div>

  <contact-form></contact-form>
</template>
