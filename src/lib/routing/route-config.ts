import { Boxes, LayoutDashboard, Settings, Users } from 'lucide-react'

interface NavigationItem {
  label: string
  to: '/' | '/products' | '/team' | '/settings'
  icon: typeof LayoutDashboard
  policy?: string
}

export const navigation: NavigationItem[] = [
  { label: 'Menu:Home', to: '/', icon: LayoutDashboard },
  { label: 'Menu:Products', to: '/products', icon: Boxes },
  { label: 'Menu:Team', to: '/team', icon: Users, policy: 'OrbitAdmin.Team' },
  { label: 'Menu:Settings', to: '/settings', icon: Settings },
]
