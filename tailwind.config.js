/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        apple: {
          gray: {
            50: '#f5f5f7',
            100: '#e8e8ed',
            200: '#d2d2d7',
            300: '#c7c7cc',
            400: '#aeaeb2',
            500: '#8e8e93',
            600: '#636366',
            700: '#48484a',
            800: '#3a3a3c',
            900: '#1d1d1f',
          },
          blue: {
            50: '#f0f5ff',
            100: '#e0ebff',
            200: '#c7d9ff',
            300: '#a4bfff',
            400: '#819dff',
            500: '#5b7fff',
            600: '#3b5fff',
            700: '#1d3fff',
            800: '#0a1fff',
            900: '#0011cc',
          },
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(3rem, 10vw, 6.5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '600' }],
        'display': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
        'heading': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
      },
      spacing: {
        'section': 'clamp(3rem, 8vw, 6rem)',
        'section-md': 'clamp(2.5rem, 6vw, 4rem)',
        'section-sm': 'clamp(2rem, 4vw, 3rem)',
      },
      boxShadow: {
        'apple': '0 2px 8px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04)',
        'apple-lg': '0 8px 24px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
}
