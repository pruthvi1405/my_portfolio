import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/my_portfolio/', // 👈 important: use your GitHub repo name here
  plugins: [vue()]
})
