/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00FFFF',
        secondary: '#FFD700',
        dark: '#0A0B2E',
        'dark-light': '#1A1B4B',
        'dark-lighter': '#2A2B6B',
        background: '#0A0B2E',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-poppins)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#fff',
            a: {
              color: '#00FFFF',
              '&:hover': {
                color: '#00CCCC',
              },
            },
            h1: {
              color: '#fff',
            },
            h2: {
              color: '#fff',
            },
            h3: {
              color: '#fff',
            },
            h4: {
              color: '#fff',
            },
            strong: {
              color: '#fff',
            },
            blockquote: {
              color: '#fff',
              borderLeftColor: '#FFD700',
            },
            code: {
              color: '#00FFFF',
            },
            pre: {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
} 