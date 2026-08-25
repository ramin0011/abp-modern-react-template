import { Bell, ChevronDown, Menu, Moon, Search, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/components/providers/auth-provider'

export function Header({ onMenu }: { onMenu: () => void }) {
  const { t } = useTranslation()
  const { user, isAuthenticated, login, logout } = useAuth()
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark')
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])
  const name = (user?.profile.name as string | undefined) ?? 'Alex Morgan'
  return (
    <header className="sticky top-0 z-20 flex h-20 items-center border-b border-border/70 bg-background/90 px-4 backdrop-blur-xl md:px-8">
      <button onClick={onMenu} className="mr-3 rounded-lg p-2 hover:bg-muted lg:hidden"><Menu className="h-5 w-5" /></button>
      <div className="relative hidden w-full max-w-md sm:block"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" /><input className="h-10 w-full rounded-lg border border-border/70 bg-muted/50 pl-10 pr-4 text-sm outline-none focus:border-primary" placeholder="Search anything…" /></div>
      <div className="ml-auto flex items-center gap-1.5 sm:gap-3">
        <button aria-label="Toggle theme" onClick={() => setDark((value) => !value)} className="grid h-10 w-10 place-items-center rounded-lg text-muted-foreground hover:bg-muted">{dark ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}</button>
        <button aria-label="Notifications" className="relative grid h-10 w-10 place-items-center rounded-lg text-muted-foreground hover:bg-muted"><Bell className="h-[18px] w-[18px]" /><span className="absolute right-2.5 top-2 h-2 w-2 rounded-full border-2 border-background bg-rose-500" /></button>
        <div className="mx-1 h-7 w-px bg-border" />
        {isAuthenticated ? (
          <button onClick={() => void logout()} className="flex items-center gap-2 rounded-lg p-1.5 hover:bg-muted"><span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-amber-200 to-rose-300 text-xs font-bold text-slate-800">{name.split(' ').map((part) => part[0]).join('').slice(0, 2)}</span><span className="hidden text-left md:block"><span className="block text-xs font-semibold">{name}</span><span className="block text-[10px] text-muted-foreground">{t('AbpAccount::Logout')}</span></span><ChevronDown className="hidden h-4 w-4 text-muted-foreground md:block" /></button>
        ) : <Button size="sm" variant="outline" onClick={() => void login()}>{t('AbpAccount::Login')}</Button>}
      </div>
    </header>
  )
}
