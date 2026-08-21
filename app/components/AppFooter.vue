<script setup lang="ts">
/**
 * Site footer — brand block, three navigation columns (services / company /
 * contact) and a legal bar. Redesigned from the source's plain 3-column
 * list: adds a services column (previously missing from footer nav
 * entirely — the only way to reach /poistenie, /hypoteky, /financie from
 * the footer was via the header dropdown), icon-led contact details reusing
 * the same `material-symbols-outlined` + `.card`-adjacent visual language
 * as the rest of the site, and a legibly-grouped legal bar instead of a
 * bare `<ul>`.
 */
import { services } from "~/data/services"

const urgentPhone = "0901 234 567"
const companyAddress = "Slavkovská 1931/71, 060 01 Kežmarok"

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="border-t-2 border-border-strong bg-footer text-footer-text">
    <div
      class="container-page grid grid-cols-1 gap-10 pt-16 pb-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr] lg:gap-8"
    >
      <!-- Brand -->
      <div class="sm:col-span-2 lg:col-span-1">
        <div class="mb-4 flex items-center gap-2.5">
          <span class="text-xl font-bold tracking-tight text-white font-display">THE POLAK FINANCE</span>
        </div>
        <p class="max-w-[320px] text-label leading-relaxed text-footer-text-link">
          Sprostredkovanie poistenia, hypoték a investícií v Poprade a Kežmarku. Partner poisťovne UNIQA a člen
          maklérskeho domu UNIVERSAL.
        </p>
      </div>

      <!-- Služby -->
      <div>
        <div class="mb-4 text-caption font-semibold uppercase tracking-wider text-white">Služby</div>
        <nav class="flex flex-col gap-2.5">
          <NuxtLink
            v-for="s in services"
            :key="s.slug"
            :to="`/${s.slug}`"
            class="text-label text-footer-text-link no-underline transition-colors duration-150 hover:text-white"
          >
            {{ s.title }}
          </NuxtLink>
        </nav>
      </div>

      <!-- Spoločnosť -->
      <div>
        <div class="mb-4 text-caption font-semibold uppercase tracking-wider text-white">Spoločnosť</div>
        <nav class="flex flex-col gap-2.5">
          <NuxtLink to="/" class="text-label text-footer-text-link no-underline transition-colors duration-150 hover:text-white">
            Domov
          </NuxtLink>
          <NuxtLink to="/o-nas" class="text-label text-footer-text-link no-underline transition-colors duration-150 hover:text-white">
            O nás
          </NuxtLink>
          <NuxtLink to="/kontakt" class="text-label text-footer-text-link no-underline transition-colors duration-150 hover:text-white">
            Kontakt
          </NuxtLink>
          <NuxtLink
            to="/kontakt#gdpr"
            class="text-label text-footer-text-link no-underline transition-colors duration-150 hover:text-white"
          >
            Ochrana osobných údajov
          </NuxtLink>
        </nav>
      </div>

      <!-- Kontakt -->
      <div>
        <div class="mb-4 text-caption font-semibold uppercase tracking-wider text-white">Kontakt</div>
        <div class="flex flex-col gap-3">
          <a
            href="tel:+421901234567"
            class="flex items-center gap-2.5 text-label text-footer-text-link no-underline transition-colors duration-150 hover:text-white"
          >
            <span class="material-symbols-outlined text-[18px] text-brand-accent-dark">call</span>
            {{ urgentPhone }}
          </a>
          <div class="flex items-start gap-2.5 text-label text-footer-text-link">
            <span class="material-symbols-outlined text-[18px] text-brand-accent-dark">location_on</span>
            {{ companyAddress }}
          </div>
        </div>
        <NuxtLink to="/#kontaktny-formular" class="btn-ghost mt-5">Napíšte nám</NuxtLink>
      </div>
    </div>

    <div class="border-t border-footer-border">
      <div class="container-page flex flex-col gap-3 py-6 lg:flex-row lg:items-center lg:justify-between">
        <div class="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-footer-text-muted">
          <span class="font-semibold text-footer-text">The Polak Finance s. r. o.</span>
          <span aria-hidden="true">·</span>
          <span>IČO: 56174896</span>
          <span aria-hidden="true">·</span>
          <span>DIČ: 12345678</span>
          <span aria-hidden="true">·</span>
          <span>{{ companyAddress }}</span>
          <span aria-hidden="true">·</span>
          <a
            href="https://nbs.sk"
            target="_blank"
            rel="noopener"
            class="text-footer-text-muted underline underline-offset-2 transition-colors duration-150 hover:text-white"
          >
            Register finančných agentov NBS
          </a>
        </div>
        <p class="shrink-0 text-[11px] text-footer-text-muted">© {{ currentYear }} Agentúra Polák. Všetky práva vyhradené.</p>
      </div>
    </div>
  </footer>
</template>
