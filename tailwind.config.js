/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";
import daisyui from "daisyui";
import aspectRatio from "@tailwindcss/aspect-ratio";
import gradients from "tailwindcss-gradients";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [
    typography,
    forms,
    daisyui,
    aspectRatio,
    gradients,
  ],
  daisyui: {
    themes: ["light", "dark"],
  },
};