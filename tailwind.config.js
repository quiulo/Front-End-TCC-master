/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        azul: "#03254E",
        branco: "#ffffff",
      }
    },
    fontFamily: {
      ubuntu: ["Ubuntu"],
    }
  },
  plugins: [
    require ('@tailwindcss/forms'),
  ],
}

