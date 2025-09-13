/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Nunito Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      colors: {
        primary: 'hsl(var(--color-primary) / <alpha-value>)',
        'primary-light': 'hsl(var(--color-primary-light) / <alpha-value>)',
        secondary: 'hsl(var(--color-secondary) / <alpha-value>)',
        accent: 'hsl(var(--color-accent) / <alpha-value>)',
        text: 'hsl(var(--color-text) / <alpha-value>)',
        'text-light': 'hsl(var(--color-text-light) / <alpha-value>)',
        background: 'hsl(var(--color-background) / <alpha-value>)',
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')",
        'texture': "url('https://images.pexels.com/photos/7494118/pexels-photo-7494118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      },
      boxShadow: {
        'cake': '0 10px 15px -3px rgba(249, 168, 212, 0.2), 0 4px 6px -4px rgba(249, 168, 212, 0.2)',
      },
    },
  },
  plugins: [],
};