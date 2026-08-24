import { withBase } from "ufo"

/**
 * Prefixes a root-relative public/ path with `app.baseURL` — for the
 * assets `<NuxtImg>` can't cover: SVGs, favicon/link hrefs, og:image
 * (needs an absolute URL, see app.vue), PDFs, and any other raw `<img>`
 * or `<link>`/`<meta>` reference. `<NuxtImg>` already resolves baseURL
 * itself for raster images, so don't wrap its `src` in this too.
 *
 * Usage: `useAssetUrl()('/uniqa-logo.svg')` → `/agentura-polak-web/uniqa-logo.svg`
 * in the GitHub Pages build, `/uniqa-logo.svg` unchanged once baseURL is `/`.
 */
export const useAssetUrl = () => {
  const { app } = useRuntimeConfig()
  return (path: string) => withBase(path, app.baseURL)
}
