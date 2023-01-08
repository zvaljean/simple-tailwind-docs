/** @type {import("tailwindcss").Config} */
module.exports = {
  mode: "jit",
  content: [
    "./themes/**/layouts/**/*.html",
    "./content/**/layouts/**/*.html",
    "./layouts/**/*.html",
    "./content/**/*.html"
  ],
  theme: {
    extend: {
      height: {
        "header-height": "var(--header-height)",
        "footer-height": "var(--footer-height)",
        "main-height": "calc(100vh - var(--header-height))",
        "content-height": "calc(100vh - var(--header-height) - var(--footer-height ) )"
      }
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman"
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar")
  ]
};