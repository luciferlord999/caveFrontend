import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // define: {
  //   VITE_API_URL: process.env.VITE_API_URL,
  //   VITE_PUBLIC_TOKEN: process.env.VITE_PUBLIC_TOKEN,
  // },
})
