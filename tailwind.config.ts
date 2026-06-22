import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#10201e',
        pine: '#123f3a',
        teal: '#168c8c',
        mint: '#dff3ee',
        cloud: '#f4f8f7',
        coral: '#d95f4c'
      }
    }
  },
  plugins: []
}

export default config
