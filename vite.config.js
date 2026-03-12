import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/dash-comercial-completo/',
  server: {
    port: parseInt(process.env.PORT || '5173'),
    host: '127.0.0.1',
    open: false
  }
})
