import axios from 'axios'
import i18n from '@/lib/i18n/i18n'
import { ensureAccessToken } from '@/lib/auth/auth-client'
import { getApiUrl } from '@/lib/runtime-config'

export const api = axios.create({
  baseURL: '',
  headers: { 'X-Requested-With': 'XMLHttpRequest', 'Content-Type': 'application/json' },
})

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
      sessionStorage.setItem('abp_return_url', window.location.pathname)
    }
    return Promise.reject(error)
  },
)
