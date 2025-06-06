import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          dark: 'var(--dark-blue)',
          light: '#F0F9FF',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          dark: '#5B21B6',
          light: '#C4B5FD',
        },
        background: {
          DEFAULT: 'var(--background)',
          light: 'var(--light-gray)',
        },
        foreground: 'var(--foreground)',
        'dark-blue': 'var(--dark-blue)',
        'light-gray': 'var(--light-gray)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-roboto-mono)', 'monospace'],
        gabarito: ['var(--font-gabarito)', 'sans-serif'],
        mulish: ['var(--font-mulish)', 'sans-serif'],
        'rubik-distressed': ['var(--font-rubik-distressed)', 'cursive'],
        'okay-jelly': ['var(--font-okay-jelly)', 'cursive'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      spacing: {
        '0': '0px',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '32': '8rem',
        '40': '10rem',
        '48': '12rem',
        '56': '14rem',
        '64': '16rem',
      },
    },
  },
  plugins: [],
};

export default config; 