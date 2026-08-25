import { createRootRoute, createRoute, createRouter, redirect } from '@tanstack/react-router'
import { lazy } from 'react'
import { RootLayout } from '@/components/layout/root-layout'
import { NotFoundPage } from '@/pages/not-found-page'
import {
  fetchApplicationConfiguration,
  isGranted,
  usePermissionStore,
} from '@/lib/auth/permissions'
import { getUserManager } from '@/lib/auth/auth-client'

const DashboardPage = lazy(() =>
  import('@/pages/dashboard-page').then((module) => ({ default: module.DashboardPage })),
)
const ProductsPage = lazy(() =>
  import('@/pages/products-page').then((module) => ({ default: module.ProductsPage })),
)
const SettingsPage = lazy(() =>
  import('@/pages/settings-page').then((module) => ({ default: module.SettingsPage })),
)
const TeamPage = lazy(() =>
  import('@/pages/team-page').then((module) => ({ default: module.TeamPage })),
)
const AuthCallbackPage = lazy(() =>
  import('@/pages/auth-callback-page').then((module) => ({ default: module.AuthCallbackPage })),
)

async function requirePermission(policy: string, returnUrl: string) {
  const manager = getUserManager()
  const user = await manager.getUser()

  if (!user || user.expired) {
    await manager.signinRedirect({ state: { returnUrl } })
    throw new Error('Redirecting to sign in')
  }

  if (!usePermissionStore.getState().initialized) {
    await fetchApplicationConfiguration(user.access_token)
  }

  if (!isGranted(policy)) throw redirect({ to: '/' })
}

const rootRoute = createRootRoute({ component: RootLayout, notFoundComponent: NotFoundPage })
const indexRoute = createRoute({ getParentRoute: () => rootRoute, path: '/', component: DashboardPage })
const productsRoute = createRoute({ getParentRoute: () => rootRoute, path: '/products', component: ProductsPage })
const settingsRoute = createRoute({ getParentRoute: () => rootRoute, path: '/settings', component: SettingsPage })
const teamRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/team',
  beforeLoad: ({ location }) => requirePermission('OrbitAdmin.Team', location.href),
  component: TeamPage,
})
const callbackRoute = createRoute({ getParentRoute: () => rootRoute, path: '/auth/callback', component: AuthCallbackPage })
const routeTree = rootRoute.addChildren([indexRoute, productsRoute, teamRoute, settingsRoute, callbackRoute])
export const router = createRouter({ routeTree, defaultPreload: 'intent', scrollRestoration: true })
declare module '@tanstack/react-router' { interface Register { router: typeof router } }
