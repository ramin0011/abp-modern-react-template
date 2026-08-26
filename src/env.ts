export const env = {
  application: {
    baseUrl: import.meta.env.VITE_APP_URL ?? window.location.origin,
    name: import.meta.env.VITE_APP_NAME ?? 'CodeGenerator',
  },
  oauth: {
    issuer: import.meta.env.VITE_AUTH_URL ?? 'https://localhost:44366/',
    redirectUri: import.meta.env.VITE_REDIRECT_URL ?? `${window.location.origin}/auth/callback`,
    postLogoutRedirectUri: window.location.origin,
    clientId: import.meta.env.VITE_CLIENT_ID ?? 'CodeGenerator_App',
    scope:
      import.meta.env.VITE_SCOPE ??
      'offline_access openid profile email phone roles CodeGenerator',
  },
  apiUrl: import.meta.env.VITE_API_URL ?? 'https://localhost:44366',
}
