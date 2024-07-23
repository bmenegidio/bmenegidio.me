import type { Config } from 'tailwindcss';
import { PluginAPI } from 'tailwindcss/types/config';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0E0D11',
        foreground: '#1C1B22',
        textColor: '#fff',
        dracula: {
          background: '#282A36',
          pink: '#FF79C6',
          border: '#2b2833',
        },
        primary: '#4EA75C',
      },
      fontFamily: {
        body: 'var(--body-font)',
        code: 'var(--code-font)',
        heading: 'var(--heading-font)',
      },
      animation: {
        'rotate-keyframes': 'rotate-keyframes 50s linear infinite',
        'fade-in': 'fade-in 1.5s forwards',
        'pull-up': 'pull-up 1s 200ms forwards ease-in-out',
        'pull-down': 'pull-down 1s 200ms forwards ease-in-out',
      },
      keyframes: {
        'rotate-keyframes': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'fade-in': {
          from: {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
        'pull-up': {
          '0%': {
            transform: 'translateY(40px)',
            opacity: '0',
          },
          '60%': {
            opacity: '.6',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        'pull-down': {
          '0%': {
            transform: 'translateY(-40px)',
            opacity: '0',
          },
          '60%': {
            opacity: '.6',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      const newUtilities = {
        '.mask-gradient-to-top': {
          maskImage: 'linear-gradient(to top, transparent 0%, black 50%)',
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
export default config;
