import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['ra-data-json-server'],
    optimizeDeps: { exclude: ["swiper/react", "swiper/types"], },
    
    
  }
})
