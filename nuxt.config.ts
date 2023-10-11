import { createResolver, logger } from "@nuxt/kit";
const { resolve } = createResolver(import.meta.url);

// That allows to overwrite these dependencies paths via `.env` for local development
// fov local dev :
// PAXPAR_WIDGETS_PATH=../paxpar-widgets
const envModules = {
  ppw: process?.env?.PAXPAR_WIDGETS_PATH || "@arundo-tech/paxpar-widgets",
}


export default defineNuxtConfig({
  extends: [
    envModules.ppw,
  ],
  devtools: { enabled: true },

  modules: [
    // Remove it if you don't use Plausible analytics
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible'
  ]
})
