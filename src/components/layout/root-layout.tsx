import { Outlet } from '@tanstack/react-router'
import { Suspense, useState } from 'react'
import { Header } from '@/components/layout/header'
import { Sidebar } from '@/components/layout/sidebar'

export function RootLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="lg:pl-[260px]"><Header onMenu={() => setSidebarOpen(true)} /><main className="mx-auto max-w-[1440px] p-4 md:p-8"><Suspense fallback={<div className="grid min-h-[50vh] place-items-center"><div className="h-9 w-9 animate-spin rounded-full border-4 border-primary/20 border-t-primary" aria-label="Loading page" /></div>}><Outlet /></Suspense></main></div>
    </div>
  )
}
