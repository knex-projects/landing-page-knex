import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    colors: {
      // padrões
      black: '#1D1E2C',
      gray: '#8492a6',

      // cores específicas
      'gray-light': '#d3dce6',
      'gray-dark': '#273444',
      'purple-dark': '#6320EE',
      'purple-light': '#8075FF',
      'green-light': '#B6FF85',
      'green-dark': '#33FF5C',

      // cores básicas
      pink: '#ff49db',
      blue: '#1fb6ff',
      orange: '#ff7849',
      yellow: '#ffc82c',
    },

    fontFamily: {
      sans: 'var(--font-poppins)',
    },
  },
  plugins: [],
}
export default config
