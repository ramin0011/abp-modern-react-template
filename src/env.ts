export const env = {
  application: {
    baseUrl: import.meta.env.VITE_APP_URL ?? window.location.origin,
    name: import.meta.env.VITE_APP_NAME ?? 'Orbit Admin',
  },
  oauth: {
    issuer: import.meta.env.VITE_AUTH_URL ?? 'https://localhost:44301/',
    redirectUri: import.meta.env.VITE_REDIRECT_URL ?? `${window.location.origin}/auth/callback`,
    postLogoutRedirectUri: window.location.origin,
    clientId: import.meta.env.VITE_CLIENT_ID ?? 'Orbit_Admin_App',
    scope: import.meta.env.VITE_SCOPE ?? 'offline_access openid profile email phone OrbitAdmin',
  },
  apiUrl: import.meta.env.VITE_API_URL ?? 'https://localhost:44300',
}
