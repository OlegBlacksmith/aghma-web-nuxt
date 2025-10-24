// https://nuxt.com/docs/api/configuration/nuxt-config
import tsconfigPaths from "vite-tsconfig-paths";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n"],
  css: ['./assets/styles/style.css'],
  i18n: {
    strategy: 'prefix',
    locales: [
      { code: "en", name: "English", iso: "en-US", file: "en-US.json" },
      { code: "ru", name: "Русский", iso: "ru-RU", file: "ru-RU.json" },
      { code: "ka", name: "ქართული", iso: "ka-GE", file: "ka-GE.json" },
      { code: "kk", name: "қазақ", iso: "kk-KZ", file: "kk-KZ.json" },
      { code: "uk", name: "Українська", iso: "uk-UA", file: "uk-UA.json" },
      { code: "uz", name: "O'zbek", iso: "uz-UZ", file: "uz-UZ.json" },
    ],
    defaultLocale: "ru-RU",
    langDir: "locales/",
    vueI18n: "./i18n.config.ts",
  },
  vite: {
    plugins: [tsconfigPaths()],
  },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
        },
      ],
    },
  },
});
