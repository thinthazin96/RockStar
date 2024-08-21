import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

//Server section will auto open the page on browser on 'npm run dev' on port 3000
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  }
})
