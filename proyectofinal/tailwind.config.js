/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",           // Para que Tailwind busque en el archivo HTML
    "./src/**/*.{js,ts,jsx,tsx}", // Para que Tailwind busque en todos los archivos JS/TS/JSX/TSX dentro de la carpeta src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
