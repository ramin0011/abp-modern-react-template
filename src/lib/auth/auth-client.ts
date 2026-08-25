import { UserManager, WebStorageStateStore, type UserManagerSettings } from 'oidc-client-ts'
import { getRuntimeConfig } from '@/lib/runtime-config'

let manager: UserManager | null = null

export function initUserManager(): UserManager {
  const { oAuthConfig } = getRuntimeConfig()
  const settings: UserManagerSettings = {
    authority: oAuthConfig.issuer,
    client_id: oAuthConfig.clientId,
    redirect_uri: oAuthConfig.redirectUri,
    post_logout_redirect_uri: oAuthConfig.postLogoutRedirectUri ?? window.location.origin,
    response_type: 'code',
    scope: oAuthConfig.scope,
    automaticSilentRenew: true,
    loadUserInfo: true,
    userStore: new WebStorageStateStore({ store: window.localStorage }),
  }
  manager = new UserManager(settings)
  return manager
}

export function getUserManager(): UserManager {
  const current = manager ?? initUserManager()
  return current
}

export async function ensureAccessToken(): Promise<string | null> {
  const user = await getUserManager().getUser()
  if (!user) return null
  if (!user.expired) return user.access_token
  try {
    const renewed = await getUserManager().signinSilent()
    return renewed?.access_token ?? null
  } catch {
    return null
  }
}
