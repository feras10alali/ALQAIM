import flowbitePlugin from 'flowbite/plugin'
import { Config } from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        "buttons":"#c29d32",
        "buttonhov":"#ab8f3e",
        "textcolor":"#ab8f3e",
        "textcolor1":"#ad9b66",
        "textcolor2":"#9c7500",
        "obj":"#ab8f3e",
        "wbg":"#ffffff",

        
      }
    }
  },

  plugins: [flowbitePlugin, require("@tailwindcss/typography")]
}as Config;
