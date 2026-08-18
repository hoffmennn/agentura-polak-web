<script setup lang="ts">
/**
 * Sticky site header — logo lockup, primary nav, CTA button.
 * Identical across all three pages in the source prototype; only the
 * active-nav underline changes per route, computed here rather than
 * hardcoded per page.
 */

const route = useRoute()

const navLinks = [
  { label: "Domov", to: "/" },
  { label: "Služby", to: "/#sluzby" },
  { label: "O nás", to: "/o-nas" },
  { label: "Kontakt", to: "/kontakt" },
]

// Anchor links (e.g. "/#sluzby") are never their own "active" nav item in
// the source design — only whole-page links (Domov/O nás/Kontakt) get the
// underline. Plain path equality would wrongly match "/#sluzby" against
// "/" too, since both share the "/" path while on the homepage.
function isActive(to: string) {
  if (to.includes("#")) return false
  return route.path === to
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b-2 border-border-strong bg-surface">
    <div class="container-page flex h-20 flex-wrap items-center justify-between gap-3">
      <NuxtLink to="/" class="flex flex-col leading-tight no-underline">
        <span class="text-[22px] font-bold tracking-tight text-brand-primary font-display">AGENTÚRA POLÁK</span>
        <span class="text-eyebrow font-semibold uppercase tracking-widest text-ink-subtle">Partner poisťovne UNIQA</span>
      </NuxtLink>

      <nav class="flex h-full flex-wrap items-center gap-7">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.label"
          :to="link.to"
          class="flex h-full items-center pt-1 text-nav font-semibold tracking-wide no-underline transition-colors duration-fast"
          :class="
            isActive(link.to)
              ? 'border-b-4 border-brand-primary text-brand-primary'
              : 'text-ink-muted hover:text-brand-primary'
          "
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <NuxtLink to="/#kontaktny-formular" class="btn-primary">Nezáväzný dopyt</NuxtLink>
    </div>
  </header>
</template>
