/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: [
        "./learn/src/html/*.html",
        "./learn/src/js/*.js"
    ],
    theme: {
        extend: {
            height: {
                "header-height": "var(--header-height)",
                "footer-height": "var(--footer-height)",
                // "content-height": "calc(100vh - var(--header-height) - var(--footer-height))",
                "content-height": "calc(100vh - var(--header-height))",
            },
        }
    },
    plugins: [],
}
