import axios from 'axios'
import i18n from '@/lib/i18n/i18n'
import { ensureAccessToken, getUserManager } from '@/lib/auth/auth-client'
import { getApiUrl } from '@/lib/runtime-config'

export const api = axios.create({
  baseURL: '',
  withCredentials: true,
  withXSRFToken: true,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'RequestVerificationToken',
  headers: { 'X-Requested-With': 'XMLHttpRequest', 'Content-Type': 'application/json' },
})

let authRedirectStarted = false
let antiforgeryTokenPromise: Promise<string> | null = null
const authCallbackPaths = ['/auth/callback', '/authentication/login-callback']

async function getAntiforgeryToken(): Promise<string> {
  if (!antiforgeryTokenPromise) {
    antiforgeryTokenPromise = fetch(`${getApiUrl()}/api/antiforgery/token`, {
      credentials: 'include',
    })
      .then(async (response) => {
        if (!response.ok) throw new Error('Unable to initialize antiforgery protection')
        const result = (await response.json()) as { token?: string }
        if (!result.token) throw new Error('The antiforgery endpoint returned no token')
        return result.token
      })
      .catch((error: unknown) => {
        antiforgeryTokenPromise = null
        throw error
      })
  }

  return antiforgeryTokenPromise
}

api.interceptors.request.use(async (config) => {
  config.baseURL = `${getApiUrl()}/api`
  const token = await ensureAccessToken()
  if (token) config.headers.Authorization = `Bearer ${token}`
  const tenantId = sessionStorage.getItem('abp_tenant_id')
  if (tenantId && !config.headers.__tenant) config.headers.__tenant = tenantId
  if (i18n.language && !config.headers['Accept-Language']) config.headers['Accept-Language'] = i18n.language
  const method = config.method?.toUpperCase() ?? 'GET'
  if (!['GET', 'HEAD', 'OPTIONS', 'TRACE'].includes(method)) {
    config.headers.RequestVerificationToken = await getAntiforgeryToken()
  }
  return config
})

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      const returnUrl = window.location.href
      sessionStorage.setItem('abp_return_url', returnUrl)

      if (!authRedirectStarted && !authCallbackPaths.includes(window.location.pathname)) {
        authRedirectStarted = true
        await getUserManager().signinRedirect({ state: { returnUrl } })
      }
    }
    return Promise.reject(error)
  },
)
