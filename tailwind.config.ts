import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        // 'hero1':"url('/assets/images/hero1.jpg')",
        // 'hero2':"url('/assets/images/hero2.jpg')",
        // 'hero3':"url('/assets/images/hero3.jpg')",
        // 'hero4':"url('/assets/images/hero4.jpg')",
        // 'hero5':"url('/assets/images/hero5.jpg')",
      },
    },
  },
  plugins: [],
}
export default config
