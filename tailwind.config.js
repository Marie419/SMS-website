/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx,css}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))", // Defines the 'border' color
      },
      borderColor: {
        DEFAULT: "hsl(var(--border))", // Makes 'border' the default border color
      },
    },
  },
  plugins: [],
}