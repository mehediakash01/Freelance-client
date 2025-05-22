import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  plugins: [daisyui],

  daisyui: {
    themes: ["light", "dark"], 
  },
};
