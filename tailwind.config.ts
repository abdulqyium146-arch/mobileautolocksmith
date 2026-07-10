import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0b0c2a',
        accent: '#c0392b',
        gold: '#e2a800',
        surface: '#f5f6fa',
        dark: '#1a1a2e',
        'color-text': '#1e2533',
        muted: '#6b7280',
        border: '#e5e7eb',
      },
      fontFamily: {
        heading: ['var(--font-montserrat)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
        btn: '8px',
      },
      boxShadow: {
        card: '0 4px 24px rgba(0,0,0,0.08)',
        hover: '0 8px 32px rgba(0,0,0,0.14)',
      },
      transitionDuration: {
        fast: '150ms',
        base: '250ms',
      },
    },
  },
  plugins: [],
}

export default config
