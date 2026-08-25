import { useEffect, useState } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { getUserManager } from '@/lib/auth/auth-client'

export function AuthCallbackPage() {
  const navigate = useNavigate()
  const [error, setError] = useState('')
  useEffect(() => { getUserManager().signinRedirectCallback().then(() => navigate({ to: '/', replace: true })).catch((reason: unknown) => setError(reason instanceof Error ? reason.message : 'Authentication failed')) }, [navigate])
  return <div className="grid min-h-[60vh] place-items-center text-center"><div><div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-primary/20 border-t-primary" /><h1 className="mt-5 text-xl font-bold">Completing sign in…</h1>{error && <p className="mt-3 text-sm text-rose-500">{error}</p>}</div></div>
}
