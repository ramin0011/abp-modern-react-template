import { useEffect, useRef, useState } from 'react'
import { getUserManager } from '@/lib/auth/auth-client'

function getSafeReturnUrl(state: unknown): string {
  const stored = sessionStorage.getItem('abp_return_url')
  const stateReturnUrl =
    typeof state === 'object' && state !== null && 'returnUrl' in state
      ? (state as { returnUrl?: unknown }).returnUrl
      : undefined
  const candidate = typeof stateReturnUrl === 'string' ? stateReturnUrl : stored

  sessionStorage.removeItem('abp_return_url')
  if (!candidate) return '/'

  try {
    const url = new URL(candidate, window.location.origin)
    if (url.origin !== window.location.origin) return '/'
    return `${url.pathname}${url.search}${url.hash}`
  } catch {
    return '/'
  }
}

export function AuthCallbackPage() {
  const handled = useRef(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (handled.current) return
    handled.current = true

    void getUserManager()
      .signinRedirectCallback()
      .then((user) => window.location.replace(getSafeReturnUrl(user?.state)))
      .catch((reason: unknown) =>
        setError(reason instanceof Error ? reason.message : 'Authentication failed'),
      )
  }, [])

  return <div className="grid min-h-[60vh] place-items-center text-center"><div><div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-primary/20 border-t-primary" /><h1 className="mt-5 text-xl font-bold">Completing sign in…</h1>{error && <p className="mt-3 text-sm text-rose-500">{error}</p>}</div></div>
}
