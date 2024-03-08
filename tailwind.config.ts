import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
       keyframes: {
        fadein: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
       animation: {
        fadein: 'fadein .3s ease-in-out forwards',
      },
      fontSize: {
        "clamp-s": "clamp(1rem, 2vw, 24px)",
        "clamp-m": "clamp(1.25rem, 2vw, 28px)",
        "clamp-l": "clamp(2rem, 3vw, 40px)",
        "clamp-xl": "clamp(2.5rem,5vw, 96px)",
      },
      colors: {
        'primary': 'rgb(var(--foreground-rgb))',
        'light-green':'rgba(var(--color-light-green-rgb))'
      },
      backgroundImage: {
        'cust-gradient': 'linear-gradient(to right,rgb(var(--background-start-rgb)),rgb(var(--background-end-rgb)))',
        'cust-yellow': 'linear-gradient(to right,#FDD966,#BCD77E)'
      },
      fontFamily: {
        "sans": ['var(--font-noto)'],
        "century-gothic": ['var(--font-cothic)'],
      },
      screens: {
      'md980': '980px',
      ...defaultTheme.screens,
      },
       boxShadow: {
        '3xl': '0 0 25px 0  rgba(142,160,173,0.35)',
        ...defaultTheme.boxShadow,
      },
      gridTemplateColumns: {
        'fit': 'repeat(auto-fit, minmax(260px, 1fr))',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
export default config;
