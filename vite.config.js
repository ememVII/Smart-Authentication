import { defineConfig } from 'vite'
import dotenv from 'dotenv';
import react from '@vitejs/plugin-react'

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Smart-Authentication/#',
  plugins: [react()],
  define: {
    'process.env': process.env
  }
})
