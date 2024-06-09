import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    'app/**/*.{ts,tsx}',
    'components/**/*.{ts,tsx}',
    'pages/**/*.{ts,tsx}',
  ],
  theme: {
    colors: {
      primary: {
        light: '#4DC66B',
        dark: '#064D47',
        medium: '#30946D',
      },
      neutral: {
        light: '#FFFFFF',
        dark: '#2D2D2D',
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
