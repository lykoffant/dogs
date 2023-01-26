const daisyUI = require('daisyui');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts,postcss}'],
  theme: {
    extend: {},
  },
  plugins: [daisyUI],
};
