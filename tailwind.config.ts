import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2E7D32',        // Green
        secondary: '#FFD700',      // Gold
        tertiary: '#1F2937',       // Dark gray
        background: '#FFFFFF',     // White
        'background-secondary': '#F3F4F6',  // Light gray
        text: '#1F2937',          // Dark gray
        'text-secondary': '#4B5563',  // Medium gray
      },
      fontFamily: {
        poppins: ['var(--font-inter)', 'sans-serif'], // Replacing Poppins with Inter
        inter: ['var(--font-inter)', 'sans-serif'],
        montreal: ['var(--font-montreal)', 'sans-serif'], // Adding Neue Montreal
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      letterSpacing: {
        'heading': '-0.02em',
      },
      transitionDuration: {
        '300': '300ms',
        '400': '400ms',
      },
      transitionTimingFunction: {
        'standard': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      scale: {
        '102': '1.02',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;