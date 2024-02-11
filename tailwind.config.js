import { createThemes } from 'tw-colors';
import { dark, light } from './themes/index.cjs';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [
    require('@tailwindcss/forms'),
    createThemes({
      dark,
      light
    })
  ]
};
