export interface Branch {
  slug: string
  name: string
  address: string
  phone: string
  hours: string
  silhouette: string
  /**
   * Which BranchSilhouette.vue layout the image needs: "tower" for a tall
   * portrait landmark anchored bottom-right, "skyline" for a wide
   * horizontal ridge anchored along the bottom edge. The two source images
   * have very different aspect ratios, so one generic positioning rule
   * can't fit both. (Swapped 2026-08-21: the two files were assigned to
   * the wrong branch — silhouette-poprad.png now holds Poprad's own
   * landmark and silhouette-kezmarok.png Kežmarok's.)
   */
  silhouetteVariant: "tower" | "skyline"
  /**
   * Google Maps embed for the branch card — just the `src="…"` URL from
   * Google Maps' Share → Embed a map → Copy HTML dialog, nothing else from
   * that snippet (no width/height/style/allowfullscreen attributes — those
   * belong on the <iframe> in the component, not in this string).
   */
  mapEmbedUrl?: string
}

export const branches: Branch[] = [
  {
    slug: "poprad",
    name: "Poprad",
    address: "Námestie svätého Egídia 42, 058 01 Poprad",
    phone: "0907 119 734",
    hours: "Po - Pi: 10:00 - 16:00",
    silhouette: "/images/poprad.png",
    silhouetteVariant: "skyline",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17919.89138415131!2d20.28497886501249!3d49.05611529101018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473e3b7aae3f0991%3A0x29c845449f77d117!2sUNIQA!5e1!3m2!1ssk!2ssk!4v1787327146543!5m2!1ssk!2ssk",
  },
  {
    slug: "kezmarok",
    name: "Kežmarok",
    address: "Jakuba Kraya 20, 060 01 Kežmarok",
    phone: "0905 000 000",
    hours: "Po - Pi: 9:00 - 12:00, 13:00 - 16:00",
    silhouette: "/images/kezmarok.png",
    silhouetteVariant: "tower",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11804.343466076098!2d20.422924513734678!3d49.13424579485111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ee16b631a6ed7%3A0xbd973dae7267a139!2sUNIQA!5e1!3m2!1ssk!2ssk!4v1787326915941!5m2!1ssk!2ssk",
  },
]
