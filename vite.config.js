import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Detecta si estás en GitHub Pages o en otro entorno (como Netlify)
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true'

export default defineConfig({
  plugins: [react()],
  base: isGitHubPages ? '/laiding_pages/' : './', // ✅ usa './' en Netlify, '/laiding_pages/' en GitHub Pages
  build: {
    outDir: 'docs', // mantiene tu configuración original
  },
})
