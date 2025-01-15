/// <reference types="vite/client" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  base: '/food-chain-system/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    },
    // 添加正确的 MIME 类型配置
    assetsInlineLimit: 4096,
    manifest: true
  },
  optimizeDeps: {
    include: ['vue', 'vue-router', 'pinia', 'naive-ui']
  }
}) 