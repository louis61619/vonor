import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

// function pathResolve(dir: string) {
//   return resolve(process.cwd(), ".", dir);
// }

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3001
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
