/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    screens: {
      xs: '375px',
      sm: '576px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1920px',
    },
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        primary: '#075BE6',
        dark: '#0B1F3A',
        heading: '#0B1F3A',
        body: '#5B6B82',
      },
      fontFamily: {
        heading: ['Jost', 'sans-serif'],
        body: ['Rubik', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 40px rgba(11, 31, 58, 0.08)',
        'card-hover': '0 20px 50px rgba(0, 140, 255, 0.18)',
        button: '0 10px 25px rgba(7, 91, 230, 0.35)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
}
