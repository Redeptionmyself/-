import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000, // 可以根据需要更改端口
    open: true, // 启动时自动打开浏览器
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
}) 