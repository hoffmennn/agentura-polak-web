

export interface ServiceDef {
  slug: string
  icon: string
  image: string
  title: string
  description: string
  rows: string[][]
  partnersLabel: string
  partnersMarquee?: boolean
  partners?: string[]
}

export const services: ServiceDef[] = [
  {
    slug: "hypoteky",
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
    // a plain text list wherever partnersMarquee is true.
    partnersMarquee: true,
  },
  {
    slug: "poistenie",
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
    slug: "financie",
    icon: "trending_up",
    image: "/services/invest.jpg",
    title: "Investície a sporenie",
    description: "Aby peniaze neležali na účte a nestrácali hodnotu.",
    rows: [["II. a III. dôchodkový pilier", "Pravidelné investovanie"], ["Sporenie na bývanie a na deti"]],
    partnersLabel: "Spolupracujeme so správcovskými spoločnosťami",
    partners: ["UNIQA investičná spoločnosť", "UNIQA d.s.s.", "UNIQA d.d.s."],
  },
]
