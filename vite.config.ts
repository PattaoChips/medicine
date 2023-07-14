import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// 引用node内置模块path提供绝对路路径
export default defineConfig({
  plugins: [vue()],
  // scr 文件夹配置别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
