import { env } from '@/env'

export interface RuntimeConfig {
  application: { baseUrl: string; name: string; logoUrl?: string }
  oAuthConfig: {
    issuer: string
    redirectUri: string
    postLogoutRedirectUri?: string
    clientId: string
    scope: string
  }
  apis: { default: { url: string; rootNamespace?: string } }
  adminConsoleUrl?: string
}

let runtimeConfig: RuntimeConfig | null = null

const fallback: RuntimeConfig = {
  application: env.application,
  oAuthConfig: env.oauth,
  apis: { default: { url: env.apiUrl } },
}

export async function loadRuntimeConfig(): Promise<RuntimeConfig> {
  for (const url of ['/dynamic-env.json', '/getEnvConfig']) {
    try {
      const response = await fetch(url, { cache: 'no-store' })
      if (response.ok) {
        runtimeConfig = (await response.json()) as RuntimeConfig
        return runtimeConfig
      }
    } catch {
      // Try the compatibility endpoint and then the Vite fallback.
    }
  }
  runtimeConfig = fallback
  return runtimeConfig
}

export function getRuntimeConfig(): RuntimeConfig {
  return runtimeConfig ?? fallback
}

export function getApiUrl(): string {
  return getRuntimeConfig().apis.default.url.replace(/\/$/, '')
}
