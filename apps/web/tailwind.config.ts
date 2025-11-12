import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#2C3E50',
          secondary: '#8B7355',
          accent: '#C9A86A',
        },
        element: {
          wood: {
            primary: '#2E7D32',
            light: '#66BB6A',
            lighter: '#A5D6A7',
          },
          fire: {
            primary: '#D84315',
            light: '#FF6F00',
            lighter: '#FFB74D',
          },
          earth: {
            primary: '#6D4C41',
            light: '#8D6E63',
            lighter: '#BCAAA4',
          },
          metal: {
            primary: '#546E7A',
            light: '#90A4AE',
            lighter: '#CFD8DC',
          },
          water: {
            primary: '#01579B',
            light: '#0288D1',
            lighter: '#4FC3F7',
          },
        },
        fortune: {
          excellent: '#2E7D32',
          good: '#66BB6A',
          normal: '#FFC107',
          bad: '#FF6F00',
          'very-bad': '#D84315',
        },
      },
      fontFamily: {
        sans: ['var(--font-pretendard)', 'Pretendard Variable', 'Pretendard', 'sans-serif'],
        hanja: ['var(--font-noto-serif)', 'Noto Serif KR', 'Nanum Myeongjo', 'serif'],
      },
      fontSize: {
        '5xl': '3rem',
        '4xl': '2.5rem',
        '3xl': '2rem',
        '2xl': '1.5rem',
        'xl': '1.25rem',
        'lg': '1.125rem',
        'base': '1rem',
        'sm': '0.875rem',
        'xs': '0.75rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'xs': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'sm': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'md': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px rgba(0, 0, 0, 0.15)',
        '2xl': '0 25px 50px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
}

export default config
