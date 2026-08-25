import { Link, useRouterState } from '@tanstack/react-router'
import { ChevronLeft, Layers3, LifeBuoy } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { navigation } from '@/lib/routing/route-config'
import { isGranted } from '@/lib/auth/permissions'
import { cn } from '@/lib/utils'

export function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t } = useTranslation()
  const pathname = useRouterState({ select: (state) => state.location.pathname })
  return (
    <>
      {open && <button aria-label="Close menu" className="fixed inset-0 z-30 bg-slate-950/30 lg:hidden" onClick={onClose} />}
      <aside className={cn('fixed inset-y-0 left-0 z-40 flex w-[260px] flex-col border-r border-white/10 bg-[#19172c] text-white transition-transform lg:translate-x-0', open ? 'translate-x-0' : '-translate-x-full')}>
        <div className="flex h-20 items-center gap-3 px-6">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#8c7bff] to-[#6555e8] shadow-lg shadow-violet-950/40"><Layers3 className="h-5 w-5" /></div>
          <div><div className="text-[17px] font-bold tracking-tight">Orbit</div><div className="text-[10px] font-semibold uppercase tracking-[.2em] text-violet-300">Workspace</div></div>
          <button onClick={onClose} className="ml-auto rounded-lg p-2 text-slate-400 hover:bg-white/10 lg:hidden"><ChevronLeft className="h-5 w-5" /></button>
        </div>
        <nav className="flex-1 space-y-1 px-3 py-5">
          <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[.2em] text-slate-500">Workspace</p>
          {navigation.filter((item) => isGranted(item.policy)).map((item) => {
            const active = item.to === '/' ? pathname === '/' : pathname.startsWith(item.to)
            return (
              <Link key={item.to} to={item.to} onClick={onClose} className={cn('group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition', active ? 'bg-violet-500/15 text-white' : 'text-slate-400 hover:bg-white/[.06] hover:text-white')}>
                <item.icon className={cn('h-[18px] w-[18px]', active && 'text-violet-300')} />
                {t(item.label)}
                {active && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-violet-400" />}
              </Link>
            )
          })}
        </nav>
        <div className="m-4 rounded-xl border border-white/10 bg-white/[.04] p-4">
          <div className="mb-3 grid h-9 w-9 place-items-center rounded-lg bg-white/10"><LifeBuoy className="h-4 w-4 text-violet-300" /></div>
          <p className="text-sm font-semibold">Need a hand?</p><p className="mt-1 text-xs leading-5 text-slate-400">Browse the setup guide and ABP integration notes.</p>
          <a href="https://abp.io/docs/latest/framework/ui/react" target="_blank" rel="noreferrer" className="mt-3 inline-block text-xs font-semibold text-violet-300 hover:text-violet-200">Open documentation →</a>
        </div>
      </aside>
    </>
  )
}
