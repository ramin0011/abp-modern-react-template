import { copyFileSync, existsSync, mkdirSync } from 'node:fs'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

function dynamicEnvironment() {
  return {
    name: 'abp-dynamic-environment',
    buildStart() {
      const source = resolve(__dirname, 'dynamic-env.json')
      const target = resolve(__dirname, 'public/dynamic-env.json')
      if (existsSync(source)) {
        mkdirSync(resolve(__dirname, 'public'), { recursive: true })
        copyFileSync(source, target)
      }
    },
  }
}

export default defineConfig({
  plugins: [dynamicEnvironment(), react()],
  resolve: { alias: { '@': resolve(__dirname, './src') } },
  server: {
    port: 3000,
    proxy: {
      '/api': { target: 'https://localhost:44300', changeOrigin: true, secure: false },
      '/connect': { target: 'https://localhost:44301', changeOrigin: true, secure: false },
    },
  },
})
