import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/ui': path.resolve(
        __dirname,
        './src/sections/shared/components/ui-custom'
      ),
      '@/pro-blocks': path.resolve(
        __dirname,
        './src/sections/shared/components/pro-blocks'
      ),
      '@/landing': path.resolve(
        __dirname,
        './src/sections/shared/components/pro-blocks/landing-page'
      )
    }
  }
})
