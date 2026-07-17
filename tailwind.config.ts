import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#333333',
        pine: '#333333',
        teal: '#2AA7A1',
        mint: '#BFEAE7',
        cloud: '#F4F6F7',
        coral: '#2AA7A1'
      }
    }
  },
  plugins: []
}

export default config
