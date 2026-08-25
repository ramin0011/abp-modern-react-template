import { create } from 'zustand'
import { getApiUrl } from '@/lib/runtime-config'

type GrantedPolicies = Record<string, boolean>

interface PermissionState {
  initialized: boolean
  grantedPolicies: GrantedPolicies
  setPolicies: (policies: GrantedPolicies) => void
  clear: () => void
}

export const usePermissionStore = create<PermissionState>((set) => ({
  initialized: false,
  grantedPolicies: {},
  setPolicies: (grantedPolicies) => set({ initialized: true, grantedPolicies }),
  clear: () => set({ initialized: false, grantedPolicies: {} }),
}))

export async function fetchApplicationConfiguration(token?: string | null): Promise<void> {
  const tenantId = sessionStorage.getItem('abp_tenant_id')
  try {
    const response = await fetch(`${getApiUrl()}/api/abp/application-configuration`, {
      headers: {
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...(tenantId ? { __tenant: tenantId } : {}),
      },
    })
    if (!response.ok) throw new Error('Application configuration is unavailable')
    const result = (await response.json()) as { auth?: { grantedPolicies?: GrantedPolicies } }
    usePermissionStore.getState().setPolicies(result.auth?.grantedPolicies ?? {})
  } catch {
    // Development without a backend remains usable; protected policies stay denied.
    usePermissionStore.getState().setPolicies({})
  }
}

export function isGranted(policy?: string): boolean {
  if (!policy) return true
  return usePermissionStore.getState().grantedPolicies[policy] === true
}
