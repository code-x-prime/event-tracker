import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-poppins)', 'sans-serif'],
        sans:    ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        teal:     '#2B9E7C',
        green:    '#8AC63F',
        dark:     '#1A1A1A',
        charcoal: '#2D2D2D',
        muted:    '#555555',
        light:    '#F7F9F7',
        border:   '#E2EAE2',
      },
      backgroundImage: {
        'brand-gradient':   'linear-gradient(90deg, #2B9E7C, #8AC63F)',
        'brand-gradient-v': 'linear-gradient(135deg, #2B9E7C, #8AC63F)',
      },
    },
  },
  plugins: [],
};

export default config;
