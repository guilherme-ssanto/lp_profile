/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'bg-primary':   '#0D1117',
        'bg-secondary': '#161B22',
        'accent-green': '#00D9A6',
        'accent-blue':  '#0A66C2',
        'text-primary': '#E6EDF3',
        'text-muted':   '#8B949E',
        'border-color': '#30363D',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}

