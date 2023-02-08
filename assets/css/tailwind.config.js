const themeDir = __dirname + "/../../";
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import("tailwindcss").Config} */
module.exports = {
  darkMode: "class",
  mode: "jit",
  content: [
    themeDir + "layouts/**/*.html",
    themeDir + "exampleSite/content/**/*.html",
    "./layouts/**/*.html",
    "./content/**/*.html",
  ],
  theme: {
    extend: {
      height: {
        "header-height": "var(--header-height)",
        "footer-height": "var(--footer-height)",
        "main-height": "calc(100vh - var(--header-height))",
        "content-height": "calc(100vh - var(--header-height) - var(--footer-height ) )",
      },
      typography: {
        DEFAULT: {
          css: {
            // sup: {
            //   float: "left"
            // },
            " li > ul ": {
              marginTop: ".4rem",
              marginBottom: ".4rem",
            },
            ".footnote-definition > sup ": {
              float: "left",
            },
            " ul > li > p": {
              marginTop: ".2rem",
              marginBottom: ".2rem",
            },
          },
        },
      },
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar"),
  ],
};