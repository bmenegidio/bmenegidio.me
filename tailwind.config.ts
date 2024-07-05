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
        primary: '#FF79C6',
      },
      fontFamily: {
        body: 'var(--body-font)',
        code: 'var(--code-font)',
        heading: 'var(--heading-font)',
      },
      animation: {
        'rotate-keyframes': 'rotate-keyframes 50s linear infinite',
      },
      keyframes: {
        'rotate-keyframes': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
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
