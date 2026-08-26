import { copyFileSync, existsSync, mkdirSync } from 'node:fs'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

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

export default defineConfig(({ mode }) => {
  const variables = loadEnv(mode, process.cwd(), '')
  const apiTarget = variables.VITE_API_URL || 'https://localhost:44366'
  const authTarget = variables.VITE_AUTH_URL || apiTarget

  return {
    plugins: [dynamicEnvironment(), react()],
    resolve: { alias: { '@': resolve(__dirname, './src') } },
    server: {
      port: 3000,
      proxy: {
        '/api': { target: apiTarget, changeOrigin: true, secure: false },
        '/connect': { target: authTarget, changeOrigin: true, secure: false },
        '/getEnvConfig': { target: apiTarget, changeOrigin: true, secure: false },
      },
    },
  }
})
