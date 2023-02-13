/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./composables/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./App.{js,ts,vue}",
    "./app.{js,ts,vue}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      // "light",
      // "dark",
    ],
    // styled: false,
    // themes: false,
    // base: true,
    // utils: true,
    // logs: true,
    // rtl: false,
    // prefix: "",
    darkTheme: "dark",
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
    require("daisyui"),
  ],
};
