import { createRootRoute, createRoute, createRouter, redirect } from '@tanstack/react-router'
import { RootLayout } from '@/components/layout/root-layout'
import { DashboardPage } from '@/pages/dashboard-page'
import { ProductsPage } from '@/pages/products-page'
import { SettingsPage } from '@/pages/settings-page'
import { TeamPage } from '@/pages/team-page'
import { AuthCallbackPage } from '@/pages/auth-callback-page'
import { NotFoundPage } from '@/pages/not-found-page'
import { isGranted } from '@/lib/auth/permissions'

const rootRoute = createRootRoute({ component: RootLayout, notFoundComponent: NotFoundPage })
const indexRoute = createRoute({ getParentRoute: () => rootRoute, path: '/', component: DashboardPage })
const productsRoute = createRoute({ getParentRoute: () => rootRoute, path: '/products', component: ProductsPage })
const settingsRoute = createRoute({ getParentRoute: () => rootRoute, path: '/settings', component: SettingsPage })
const teamRoute = createRoute({ getParentRoute: () => rootRoute, path: '/team', beforeLoad: () => { if (!isGranted('OrbitAdmin.Team')) throw redirect({ to: '/' }) }, component: TeamPage })
const callbackRoute = createRoute({ getParentRoute: () => rootRoute, path: '/auth/callback', component: AuthCallbackPage })
const routeTree = rootRoute.addChildren([indexRoute, productsRoute, teamRoute, settingsRoute, callbackRoute])
export const router = createRouter({ routeTree, defaultPreload: 'intent', scrollRestoration: true })
declare module '@tanstack/react-router' { interface Register { router: typeof router } }
