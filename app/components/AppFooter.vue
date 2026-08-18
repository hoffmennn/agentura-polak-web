<script setup lang="ts">

</script>

<template>
  <footer class="border-t-2 border-border-strong bg-footer text-footer-text">

    <template v-else>
      <div class="container-page grid gap-8 pt-14 pb-8 [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]">
        <div>
          <div class="mb-3 text-xl font-bold text-white font-display">AGENTÚRA POLÁK</div>
          <p class="text-label leading-relaxed text-footer-text-link">
            Sprostredkovanie poistenia, hypoték a investícií v Poprade a Kežmarku. Partner poisťovne UNIQA a člen
            maklérskeho domu UNIVERSAL.
          </p>
        </div>

        <div>
          <div class="mb-3.5 text-caption font-semibold uppercase tracking-wider text-white">Odkazy</div>
          <div class="flex flex-col gap-2.5">
            <NuxtLink to="/o-nas" class="text-label text-footer-text-link no-underline hover:text-white">O nás</NuxtLink>
            <NuxtLink to="/kontakt" class="text-label text-footer-text-link no-underline hover:text-white">Kontakt</NuxtLink>
            <NuxtLink to="/kontakt#gdpr" class="text-label text-footer-text-link no-underline hover:text-white">
              Ochrana osobných údajov
            </NuxtLink>
          </div>
        </div>

        <div>
          <div class="mb-3.5 text-caption font-semibold uppercase tracking-wider text-white">Urgentný kontakt</div>
          <p class="text-label text-footer-text-link">0901 234 567</p>
        </div>
      </div>

      <div class="container-page border-t border-footer-border pt-6 pb-8">
        <p class="text-[11px] leading-relaxed text-footer-text-muted">
          Podriadený finančný agent v podregistri poskytovania úverov, úverov na bývanie a spotrebiteľských úverov
          (reg. č. navrhovateľa 3389 — UNIVERSAL maklérsky dom, a.s.). Viazaný finančný agent v podregistri poistenia
          alebo zaistenia (UNIQA poisťovňa, a.s.), podregistri kapitálového trhu (UNIQA investičná spoločnosť, a.s.),
          podregistri starobného dôchodkového sporenia (UNIQA d.s.s., a.s.) a podregistri doplnkového dôchodkového
          sporenia (UNIQA d.d.s., a.s.). Zapísaný v registri finančných agentov NBS, nbs.sk.
        </p>
        <p class="mt-3 text-[11px] text-footer-text-muted">© 2026 Agentúra Polák. Všetky práva vyhradené.</p>
      </div>
    </template>
  </footer>
</template>
