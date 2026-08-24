<script setup lang="ts">
/**
 * Sticky site header — logo lockup, primary nav, CTA button.
 *
 * "Služby" is a custom dropdown (desktop) / expandable section (mobile)
 * listing the three service detail routes from `~/data/services`, rather
 * than a plain anchor link — so both the dropdown and the mobile panel
 * stay in sync with `/hypoteky`, `/poistenie`, `/financie` automatically
 * if that list ever changes.
 *
 * Below `lg` the nav + CTA collapse into a hamburger-triggered panel;
 * above `lg` it's the original horizontal bar. `lg` matches the
 * breakpoint already used elsewhere for two-column layouts (Kontakt,
 * O nás, service cards), kept consistent rather than introducing `md`
 * just for the header.
 */
import { services } from "~/data/services"

const route = useRoute()

const navLinks = [
  { label: "Domov", to: "/" },
  { label: "O nás", to: "/o-nas" },
  { label: "Kontakt", to: "/kontakt" },
]

const servicesOpen = ref(false)
const mobileMenuOpen = ref(false)
const headerEl = ref<HTMLElement | null>(null)

const isServicesRoute = computed(() => services.some((s) => route.path === `/${s.slug}`))

// Whole-page links only — "/#sluzby" is never its own "active" nav item
// (matches the source design; the services dropdown handles that spot now).
function isActive(to: string) {
  if (to.includes("#")) return false
  return route.path === to
}

function closeMenus() {
  servicesOpen.value = false
  mobileMenuOpen.value = false
}

// Scoped to the whole header, not just the desktop dropdown's own
// wrapper — the desktop dropdown container never contains the mobile
// "Služby" toggle, so checking only against it made the mobile
// accordion open and immediately re-close on the same click (the click
// bubbling to `document` looked like an "outside" click).
function onClickOutside(event: MouseEvent) {
  if (!headerEl.value?.contains(event.target as Node)) {
    servicesOpen.value = false
    mobileMenuOpen.value = false
  }
}

watch(() => route.fullPath, closeMenus)

onMounted(() => document.addEventListener("click", onClickOutside))
onBeforeUnmount(() => document.removeEventListener("click", onClickOutside))
</script>

<template>
  <header ref="headerEl" class="sticky top-0 z-50 border-b-2 border-border-strong bg-surface">
    <div class="container-page flex h-20 items-center justify-between gap-3">
      <NuxtLink to="/" class="flex flex-col gap-1 leading-tight no-underline">
        <NuxtImg src="/logo.png" alt="Agentúra Polák" width="870" height="354" class="h-14 w-auto lg:h-16" />
      </NuxtLink>

      <!-- Desktop nav -->
      <nav class="hidden h-full items-center gap-7 lg:flex">
        <NuxtLink
          to="/"
          class="flex h-full items-center pt-1 text-nav font-semibold tracking-wide no-underline transition-colors duration-150"
          :class="isActive('/') ? 'border-b-4 border-brand-primary text-brand-primary' : 'text-ink-muted hover:text-brand-primary'"
        >
          Domov
        </NuxtLink>

        <div class="relative h-full">
          <button
            type="button"
            class="flex h-full items-center gap-1 pt-1 text-nav font-semibold tracking-wide transition-colors duration-150"
            :class="
              isServicesRoute || servicesOpen
                ? 'border-b-4 border-brand-primary text-brand-primary'
                : 'text-ink-muted hover:text-brand-primary'
            "
            :aria-expanded="servicesOpen"
            @click="servicesOpen = !servicesOpen"
          >
            Služby
            <span
              class="material-symbols-outlined text-[20px] transition-transform duration-200"
              :class="servicesOpen && 'rotate-180'"
            >
              expand_more
            </span>
          </button>

          <div
            v-if="servicesOpen"
            class="absolute top-full left-0 mt-[2px] w-72 border-2 border-border-strong bg-surface-card"
          >
            <NuxtLink
              v-for="svc in services"
              :key="svc.slug"
              :to="`/${svc.slug}`"
              class="flex items-center gap-3 border-b border-border-subtle px-4 py-3 text-nav font-medium text-ink-muted no-underline last:border-b-0 hover:bg-surface-alt hover:text-brand-primary"
            >
              <span class="material-symbols-outlined text-[20px] text-brand-primary">{{ svc.icon }}</span>
              {{ svc.title }}
            </NuxtLink>
          </div>
        </div>

        <NuxtLink
          v-for="link in navLinks.slice(1)"
          :key="link.label"
          :to="link.to"
          class="flex h-full items-center pt-1 text-nav font-semibold tracking-wide no-underline transition-colors duration-150"
          :class="isActive(link.to) ? 'border-b-4 border-brand-primary text-brand-primary' : 'text-ink-muted hover:text-brand-primary'"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <NuxtLink to="/#kontaktny-formular" class="btn-primary hidden lg:inline-flex">Kontaktuje nás!</NuxtLink>

      <!-- Mobile hamburger -->
      <button
        type="button"
        class="flex h-11 w-11 items-center justify-center border-2 border-border-strong text-ink lg:hidden"
        :aria-expanded="mobileMenuOpen"
        aria-label="Prepnúť menu"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        <span class="material-symbols-outlined">{{ mobileMenuOpen ? "close" : "menu" }}</span>
      </button>
    </div>

    <!-- Mobile panel -->
    <div v-if="mobileMenuOpen" class="border-t-2 border-border-strong bg-surface lg:hidden">
      <nav class="container-page flex flex-col py-4">
        <NuxtLink
          to="/"
          class="border-b border-border-subtle py-3 text-nav font-semibold tracking-wide no-underline"
          :class="isActive('/') ? 'text-brand-primary' : 'text-ink-muted'"
        >
          Domov
        </NuxtLink>

        <button
          type="button"
          class="flex items-center justify-between border-b border-border-subtle py-3 text-left text-nav font-semibold tracking-wide"
          :class="isServicesRoute || servicesOpen ? 'text-brand-primary' : 'text-ink-muted'"
          :aria-expanded="servicesOpen"
          @click="servicesOpen = !servicesOpen"
        >
          Služby
          <span
            class="material-symbols-outlined text-[20px] transition-transform duration-200"
            :class="servicesOpen && 'rotate-180'"
          >
            expand_more
          </span>
        </button>
        <div v-if="servicesOpen" class="flex flex-col border-b border-border-subtle bg-surface-alt">
          <NuxtLink
            v-for="svc in services"
            :key="svc.slug"
            :to="`/${svc.slug}`"
            class="flex items-center gap-3 py-3 pl-4 text-nav font-medium text-ink-muted no-underline"
          >
            <span class="material-symbols-outlined text-[20px] text-brand-primary">{{ svc.icon }}</span>
            {{ svc.title }}
          </NuxtLink>
        </div>

        <NuxtLink
          v-for="link in navLinks.slice(1)"
          :key="link.label"
          :to="link.to"
          class="border-b border-border-subtle py-3 text-nav font-semibold tracking-wide no-underline"
          :class="isActive(link.to) ? 'text-brand-primary' : 'text-ink-muted'"
        >
          {{ link.label }}
        </NuxtLink>

        <NuxtLink to="/#kontaktny-formular" class="btn-primary mt-4 justify-center">Kontaktuje nás!</NuxtLink>
      </nav>
    </div>
  </header>
</template>
