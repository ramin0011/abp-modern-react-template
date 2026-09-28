import { Boxes, LayoutDashboard, Settings, ShieldCheck, UserRound, Users } from 'lucide-react'

interface NavigationItem {
  label: string
  to: '/' | '/products' | '/team' | '/settings' | '/identity/users' | '/identity/roles'
  icon: typeof LayoutDashboard
  policy?: string
}

export const navigation: NavigationItem[] = [
  { label: 'Menu:Home', to: '/', icon: LayoutDashboard },
  { label: 'Menu:Products', to: '/products', icon: Boxes },
  { label: 'Menu:Team', to: '/team', icon: Users, policy: 'AbpIdentity.Users' },
  { label: 'Menu:Users', to: '/identity/users', icon: UserRound, policy: 'AbpIdentity.Users' },
  { label: 'Menu:Roles', to: '/identity/roles', icon: ShieldCheck, policy: 'AbpIdentity.Roles' },
  { label: 'Menu:Settings', to: '/settings', icon: Settings },
]
