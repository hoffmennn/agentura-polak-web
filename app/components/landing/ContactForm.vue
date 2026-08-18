<script setup lang="ts">
/**
 * Multi-step "Nezáväzný dopyt" form. Ported from the prototype's DCLogic
 * class (Landing.dc.html) — state/setState becomes plain refs, sc-if/sc-for
 * become v-if/v-for, style-hover becomes Tailwind hover: classes.
 *
 * Flow: 1) pick a service → 2) pick a sub-type (only for poistenie/
 * hypotéka) → 3) contact details → 4) success. Steps 2 is skipped for
 * "investície"/"neviem", so the progress bar's total-step count and
 * displayed step number both adapt (see displayStep/totalSteps below).
 */

type ServiceKey = "poistenie" | "hypoteka" | "investicie" | "nevie"

// TODO(Phase 8): move alongside AppFooter's urgentPhone into shared config
// once it exists, so the page shows one consistent number everywhere.
const RESPONSE_HOURS = 24
const URGENT_PHONE = "0901 234 567"

const tileDefs: { key: ServiceKey; icon: string; label: string }[] = [
  { key: "poistenie", icon: "shield_person", label: "Poistenie" },
  { key: "hypoteka", icon: "home", label: "Hypotéku alebo úver" },
  { key: "investicie", icon: "trending_up", label: "Investície a sporenie" },
  { key: "nevie", icon: "help", label: "Neviem, potrebujem poradiť" },
]

const subLabelsByService: Partial<Record<ServiceKey, string[]>> = {
  poistenie: ["Auto", "Život a zdravie", "Nehnuteľnosť", "Cestovné", "Iné"],
  hypoteka: ["Kúpa nehnuteľnosti", "Stavba/rekonštrukcia", "Refinancovanie", "Spotrebný úver"],
}

const branchLabels = ["Poprad", "Kežmarok", "Je mi to jedno / online"]
const timeLabels = ["Doobeda", "Poobede", "Podvečer"]

const step = ref(1)
const service = ref<ServiceKey | null>(null)
const subservice = ref<string | null>(null)
const name = ref("")
const phone = ref("")
const email = ref("")
const branch = ref("")
const time = ref("")
const message = ref("")
const consent = ref(false)
const error = ref("")

const hasSub = computed(() => service.value === "poistenie" || service.value === "hypoteka")
const totalSteps = computed(() => (hasSub.value ? 4 : 3))
const displayStep = computed(() => {
  if (step.value === 1) return 1
  if (step.value === 2) return 2
  if (step.value === 3) return hasSub.value ? 3 : 2
  return hasSub.value ? 4 : 3
})
const progressPercent = computed(() => Math.round((displayStep.value / totalSteps.value) * 100))
const subOptions = computed(() => (service.value ? (subLabelsByService[service.value] ?? []) : []))

function selectService(key: ServiceKey) {
  service.value = key
  subservice.value = null
  step.value = key === "poistenie" || key === "hypoteka" ? 2 : 3
}

function selectSub(sub: string) {
  subservice.value = sub
  step.value = 3
}

function goBack() {
  if (step.value === 2) step.value = 1
  else if (step.value === 3) step.value = hasSub.value ? 2 : 1
}

function submit() {
  if (!name.value.trim() || !phone.value.trim() || !email.value.trim() || !consent.value) {
    error.value = "Prosím vyplňte meno, telefón, e-mail a odsúhlaste spracovanie osobných údajov."
    return
  }
  error.value = ""
  step.value = 4
}

function reset() {
  step.value = 1
  service.value = null
  subservice.value = null
  name.value = ""
  phone.value = ""
  email.value = ""
  branch.value = ""
  time.value = ""
  message.value = ""
  consent.value = false
  error.value = ""
}

// Shared look for the step-2/step-3 pill-style option buttons — only the
// "selected" background differs (accent blue) from the step-1 tiles (dark
// surface), matching the source exactly.
function optionClass(selected: boolean) {
  return [
    "border-2 px-4.5 py-2.5 text-label font-semibold transition-colors duration-150 hover:border-brand-accent-dark",
    selected ? "border-brand-accent-dark bg-brand-accent text-white" : "border-line-dark-subtle bg-transparent text-white",
  ]
}
</script>

<template>
  <section id="kontaktny-formular" class="bg-surface-dark py-24 text-white">
    <div class="mx-auto max-w-[800px] px-5">
      <div class="mb-10 border-b-2 border-border-strong pb-5">
        <h2 class="text-h1-section font-semibold tracking-tight font-display">Nezáväzný dopyt</h2>
        <p class="mt-3 text-border-subtle">Odpovieme rýchlo — zvyčajne do {{ RESPONSE_HOURS }} hodín v pracovné dni.</p>
      </div>

      <template v-if="step !== 4">
        <div class="mb-8 h-1 bg-line-dark">
          <div
            class="h-full bg-brand-accent-dark transition-[width] duration-300"
            :style="{ width: progressPercent + '%' }"
          />
        </div>
        <div class="mb-6 text-caption font-semibold uppercase tracking-wider text-brand-accent-dark">
          Krok {{ displayStep }} z {{ totalSteps }}
        </div>
      </template>

      <!-- STEP 1 — service -->
      <template v-if="step === 1">
        <h3 class="mb-6 text-h3-lg font-semibold font-display">Mám záujem o…</h3>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <button
            v-for="tile in tileDefs"
            :key="tile.key"
            type="button"
            class="flex flex-col items-start gap-3.5 border-2 p-7 text-left font-body transition-colors duration-150 hover:border-brand-accent-dark"
            :class="
              service === tile.key ? 'border-brand-accent-dark bg-surface-dark-alt' : 'border-line-dark-subtle bg-transparent'
            "
            @click="selectService(tile.key)"
          >
            <span class="material-symbols-outlined text-[32px] text-brand-accent-dark">{{ tile.icon }}</span>
            <span class="text-body-lg font-semibold text-white font-display">{{ tile.label }}</span>
          </button>
        </div>
      </template>

      <!-- STEP 2 — sub-type (poistenie/hypotéka only) -->
      <template v-else-if="step === 2">
        <h3 class="mb-6 text-h3-lg font-semibold font-display">Aký typ?</h3>
        <div class="mb-8 flex flex-wrap gap-3">
          <button
            v-for="opt in subOptions"
            :key="opt"
            type="button"
            :class="optionClass(subservice === opt)"
            @click="selectSub(opt)"
          >
            {{ opt }}
          </button>
        </div>
        <button
          type="button"
          class="border-2 border-line-dark-subtle bg-transparent px-6 py-3 text-xs font-semibold uppercase tracking-wider text-border-subtle transition-colors duration-150 hover:border-brand-accent-dark hover:text-brand-accent-dark"
          @click="goBack"
        >
          ← Späť
        </button>
      </template>

      <!-- STEP 3 — details -->
      <template v-else-if="step === 3">
        <form class="flex flex-col gap-5" @submit.prevent="submit">
          <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <label class="flex flex-col gap-2">
              <span class="text-caption font-semibold uppercase tracking-wider text-border-subtle">Meno a priezvisko *</span>
              <input
                v-model="name"
                type="text"
                class="h-12 border border-line-dark-subtle bg-transparent px-3.5 text-body-sm text-white"
              >
            </label>
            <label class="flex flex-col gap-2">
              <span class="text-caption font-semibold uppercase tracking-wider text-border-subtle">Telefón *</span>
              <input
                v-model="phone"
                type="tel"
                class="h-12 border border-line-dark-subtle bg-transparent px-3.5 text-body-sm text-white"
              >
            </label>
          </div>

          <label class="flex flex-col gap-2">
            <span class="text-caption font-semibold uppercase tracking-wider text-border-subtle">E-mail *</span>
            <input
              v-model="email"
              type="email"
              class="h-12 border border-line-dark-subtle bg-transparent px-3.5 text-body-sm text-white"
            >
          </label>

          <div>
            <span class="mb-2.5 block text-caption font-semibold uppercase tracking-wider text-border-subtle">
              Preferovaná pobočka
            </span>
            <div class="flex flex-wrap gap-2.5">
              <button
                v-for="opt in branchLabels"
                :key="opt"
                type="button"
                :class="optionClass(branch === opt)"
                @click="branch = opt"
              >
                {{ opt }}
              </button>
            </div>
          </div>

          <div>
            <span class="mb-2.5 block text-caption font-semibold uppercase tracking-wider text-border-subtle">
              Kedy vám môžeme zavolať
            </span>
            <div class="flex flex-wrap gap-2.5">
              <button
                v-for="opt in timeLabels"
                :key="opt"
                type="button"
                :class="optionClass(time === opt)"
                @click="time = opt"
              >
                {{ opt }}
              </button>
            </div>
          </div>

          <label class="flex flex-col gap-2">
            <span class="text-caption font-semibold uppercase tracking-wider text-border-subtle">Vaša správa (voliteľné)</span>
            <textarea
              v-model="message"
              rows="3"
              class="resize-y border border-line-dark-subtle bg-transparent px-3.5 py-3 text-body-sm text-white"
            />
          </label>

          <label class="flex cursor-pointer items-start gap-3">
            <input v-model="consent" type="checkbox" class="mt-0.5 h-5 w-5 shrink-0 accent-brand-accent">
            <span class="text-label leading-relaxed text-border-subtle">
              Súhlasím so spracovaním osobných údajov podľa
              <NuxtLink to="/kontakt#gdpr" class="text-brand-accent-dark">zásad ochrany osobných údajov</NuxtLink>.
            </span>
          </label>

          <div v-if="error" class="text-body-sm text-danger">{{ error }}</div>

          <div class="mt-2 flex flex-wrap gap-4">
            <button
              v-if="hasSub"
              type="button"
              class="border-2 border-line-dark-subtle bg-transparent px-6 py-4 text-xs font-semibold uppercase tracking-wider text-border-subtle transition-colors duration-150 hover:border-brand-accent-dark hover:text-brand-accent-dark"
              @click="goBack"
            >
              ← Späť
            </button>
            <button type="submit" class="btn-primary-dark">Odoslať dopyt</button>
          </div>
        </form>
      </template>

      <!-- STEP 4 — success -->
      <template v-else>
        <div class="py-8 text-center">
          <span class="material-symbols-outlined text-[56px] text-brand-accent-dark">check_circle</span>
          <h3 class="mb-4 mt-5 text-h2-lg font-semibold font-display">Ďakujeme, {{ name }}!</h3>
          <p class="mx-auto mb-2 max-w-[520px] text-body-lg leading-relaxed text-border-subtle">
            Ozveme sa vám na číslo <strong class="text-white">{{ phone }}</strong> najneskôr do {{ RESPONSE_HOURS }}
            hodín (v pracovné dni zvyčajne do 2 hodín).
          </p>
          <p class="my-6 text-body-sm text-border-subtle">
            Ak to súri, zavolajte priamo: <strong class="text-brand-accent-dark">{{ URGENT_PHONE }}</strong>
          </p>
          <button
            type="button"
            class="border-2 border-line-dark-subtle bg-transparent px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-border-subtle transition-colors duration-150 hover:border-brand-accent-dark hover:text-brand-accent-dark"
            @click="reset"
          >
            Nová požiadavka
          </button>
        </div>
      </template>
    </div>
  </section>
</template>
