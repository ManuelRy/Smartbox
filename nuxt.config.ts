// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  devtools: { enabled: true },
  colorMode: {
    preference: 'light',
  },
  modules: ["@nuxt/ui", "@nuxt/image", "nuxt-aos", "nuxt-icon", "@nuxtjs/google-fonts"],
  css: [
    '~/assets/css/main.css',
    'animate.css/animate.min.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // image: {
  //   dir: 'assets/img'
  // }
})