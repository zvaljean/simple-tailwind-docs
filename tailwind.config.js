/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: [
        "./asset/src/html/*.html",
        "./asset/src/js/*.js"
    ],
    theme: {
        extend: {
            height: {
                "header-height": "var(--header-height)",
                "footer-height": "var(--footer-height)",
                // "content-height": "calc(100vh - var(--header-height) - var(--footer-height))",
                "content-height": "calc(100vh - var(--header-height))",
            },
        },
        listStyleType: {
            none: 'none',
            disc: 'disc',
            decimal: 'decimal',
            square: 'square',
            roman: 'upper-roman',
        }
    },
    plugins: [],
}
