import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { User } from 'oidc-client-ts'
import { fetchApplicationConfiguration, usePermissionStore } from '@/lib/auth/permissions'
import { getUserManager } from '@/lib/auth/auth-client'

interface AuthContextValue {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: () => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setLoading] = useState(true)
  const clearPermissions = usePermissionStore((state) => state.clear)

  useEffect(() => {
    const manager = getUserManager()
    const load = async () => {
      try {
        const current = await manager.getUser()
        setUser(current)
        await fetchApplicationConfiguration(current?.access_token)
      } finally {
        setLoading(false)
      }
    }
    const onLoaded = (next: User) => {
      setUser(next)
      void fetchApplicationConfiguration(next.access_token)
    }
    const onUnloaded = () => {
      setUser(null)
      clearPermissions()
    }
    manager.events.addUserLoaded(onLoaded)
    manager.events.addUserUnloaded(onUnloaded)
    void load()
    return () => {
      manager.events.removeUserLoaded(onLoaded)
      manager.events.removeUserUnloaded(onUnloaded)
    }
  }, [clearPermissions])

  const login = useCallback(async () => getUserManager().signinRedirect(), [])
  const logout = useCallback(async () => getUserManager().signoutRedirect(), [])
  const value = useMemo(
    () => ({ user, isAuthenticated: Boolean(user && !user.expired), isLoading, login, logout }),
    [user, isLoading, login, logout],
  )
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const value = useContext(AuthContext)
  if (!value) throw new Error('useAuth must be used inside AuthProvider')
  return value
}
