import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/laiding_pages/', // 👈 usa el nombre EXACTO del repositorio
  build: {
    outDir: 'docs', // 👈 Vite generará directamente la carpeta que GitHub usa
  },
})
