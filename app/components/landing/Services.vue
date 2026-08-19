<script setup lang="ts">
/**
 * Wide horizontal service cards, one per row — redesigned per
 * public/inspo/services.png (content pane + photo, split ~55/45,
 * a faint oversized index number, a zebra-striped checklist, and a
 * "spolupracujeme s…" partner line before the CTA). A deliberate
 * departure from the source prototype's plain 3-up card grid (Phase 7),
 * same underlying copy/checklist content though.
 *
 * `partners` per card is grounded in facts already established
 * elsewhere on the site rather than invented: the footer's compliance
 * paragraph names the specific UNIQA entities per subregister, and
 * TrustBar already lists the real partner banks.
 *
 * Bug fixed here: the content column needs `min-w-0`. Without it, a CSS
 * grid track sizes to its content's min-content width by default — and
 * the embedded marquee (LandingTrustBar, a non-wrapping `w-max` flex
 * track) has a huge intrinsic width, so the Hypotéky card's content
 * column was blowing out past its `1.15fr` share and squeezing the image
 * column to ~0, making the photo disappear.
 */
const services = [

  {
    icon: "real_estate_agent",
    image: "/services/mortage2.jpg",
    title: "Hypotéky a úvery",
    description: "Porovnáme ponuky všetkých bánk na Slovensku a vybavíme papierovačky za vás.",
    rows: [
      ["Hypotéka na kúpu, stavbu, rekonštrukciu", "Refinancovanie existujúceho úveru"],
      ["Spotrebné úvery a konsolidácia", "Lízing a financovanie"],
    ],
    partnersLabel: "Spolupracujeme s bankami",
    // Rendered as the scrolling logo marquee (LandingTrustBar) instead of
    // a plain text list — see the `v-if="svc.partnersMarquee"` branch below.
    partnersMarquee: true,
  },
  {
    icon: "shield_person",
    image: "/services/insurance.jpg",
    title: "Poistenie",
    description: "Ochrana toho, na čom vám záleží — od auta po zdravie.",
    rows: [
      ["Životné a úrazové poistenie", "PZP a havarijné poistenie"],
      ["Poistenie domu a domácnosti", "Cestovné poistenie"],
    ],
    partnersLabel: "Spolupracujeme s poisťovňou",
    partners: ["UNIQA poisťovňa"],
  },
  {
    icon: "trending_up",
    image: "/services/investing.jpg",
    title: "Investície a sporenie",
    description: "Aby peniaze neležali na účte a nestrácali hodnotu.",
    rows: [["II. a III. dôchodkový pilier", "Pravidelné investovanie"], ["Sporenie na bývanie a na deti"]],
    partnersLabel: "Spolupracujeme so správcovskými spoločnosťami",
    partners: ["UNIQA investičná spoločnosť", "UNIQA d.s.s.", "UNIQA d.d.s."],
  },
]
</script>

<template>
  <section id="sluzby" class="bg-surface py-24">
    <div class="container-page">
      <h2 class="section-heading">Naše služby</h2>

      <div class="flex flex-col gap-8">
        <article
          v-for="(svc, index) in services"
          :key="svc.title"
          class="card overflow-hidden border-t-4 border-t-brand-primary"
        >
          <div class="grid lg:grid-cols-[1.15fr_1fr]">
            <div class="relative order-2 min-w-0 p-8 sm:p-10 lg:order-1">
              <span
                class="pointer-events-none absolute top-4 right-6 text-[80px] leading-none font-bold text-border-subtle select-none sm:text-[96px]"
              >
                {{ String(index + 1).padStart(2, "0") }}
              </span>

              <div class="relative flex flex-col">
                <div class="mb-6 flex h-14 w-14 items-center justify-center bg-surface-alt">
                  <span class="material-symbols-outlined text-icon-lg text-brand-primary">{{ svc.icon }}</span>
                </div>

                <h3 class="mb-3 text-h2 font-semibold font-display">{{ svc.title }}</h3>
                <p class="mb-6 max-w-[46ch] leading-relaxed text-ink-muted">{{ svc.description }}</p>

                <div class="mb-6 border border-border-subtle">
                  <div
                    v-for="(row, ri) in svc.rows"
                    :key="ri"
                    class="flex flex-col sm:flex-row"
                    :class="[ri > 0 && 'border-t border-border-subtle', ri % 2 === 1 ? 'bg-surface-alt' : 'bg-surface-card']"
                  >
                    <div
                      v-for="(item, ii) in row"
                      :key="item"
                      class="flex flex-1 items-start gap-3 p-4"
                      :class="ii === 0 && row.length > 1 && 'border-b border-border-subtle sm:border-b-0 sm:border-r'"
                    >
                      <span class="material-symbols-outlined shrink-0 text-[20px] text-brand-primary">check_box</span>
                      <span class="text-body-sm font-medium text-ink">{{ item }}</span>
                    </div>
                  </div>
                </div>

                <div class="mb-6 border-t border-border-subtle pt-5">
                  <div class="label-caption mb-3">{{ svc.partnersLabel }}</div>
                  <LandingTrustBar v-if="svc.partnersMarquee" />
                  <div v-else class="flex flex-wrap gap-x-4 gap-y-1">
                    <span v-for="p in svc.partners" :key="p" class="text-label font-semibold text-ink-muted">{{ p }}</span>
                  </div>
                </div>

                <NuxtLink to="/#kontaktny-formular" class="btn-primary self-start">Zistiť viac →</NuxtLink>
              </div>
            </div>

            <div class="relative order-1 min-h-[220px] lg:order-2 lg:min-h-full">
              <img :src="svc.image" :alt="svc.title" class="absolute inset-0 h-full w-full object-cover">
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
