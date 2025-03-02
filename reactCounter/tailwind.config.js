/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    'm-4', 'p-4', 'bg-red-500', // Add the classes you use dynamically
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

