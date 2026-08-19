
export interface Branch {
  slug: string
  name: string
  silhouette: string
}

export const branches: Branch[] = [
  { slug: "poprad", name: "Poprad", silhouette: "/images/silhouette-poprad.png" },
  { slug: "kezmarok", name: "Kežmarok", silhouette: "/images/silhouette-kezmarok.png" },
]
