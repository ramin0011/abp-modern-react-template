import axios from 'axios'
import i18n from '@/lib/i18n/i18n'
import { ensureAccessToken, getUserManager } from '@/lib/auth/auth-client'
import { getApiUrl } from '@/lib/runtime-config'

export const api = axios.create({
  baseURL: '',
  headers: { 'X-Requested-With': 'XMLHttpRequest', 'Content-Type': 'application/json' },
})

let authRedirectStarted = false
const authCallbackPaths = ['/auth/callback', '/authentication/login-callback']

api.interceptors.request.use(async (config) => {
  config.baseURL = `${getApiUrl()}/api`
  const token = await ensureAccessToken()
  if (token) config.headers.Authorization = `Bearer ${token}`
  const tenantId = sessionStorage.getItem('abp_tenant_id')
  if (tenantId && !config.headers.__tenant) config.headers.__tenant = tenantId
  if (i18n.language && !config.headers['Accept-Language']) config.headers['Accept-Language'] = i18n.language
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
