import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from '@tanstack/react-router'
import { Toaster } from 'sonner'
import { AuthProvider } from '@/components/providers/auth-provider'
import { initUserManager } from '@/lib/auth/auth-client'
import '@/lib/i18n/i18n'
import { loadRuntimeConfig } from '@/lib/runtime-config'
import { router } from '@/router'
import '@/styles.css'

const queryClient = new QueryClient({ defaultOptions: { queries: { staleTime: 30_000, retry: 1, refetchOnWindowFocus: false } } })

async function bootstrap() {
  await loadRuntimeConfig()
  initUserManager()
  createRoot(document.getElementById('root')!).render(<StrictMode><QueryClientProvider client={queryClient}><AuthProvider><RouterProvider router={router} /><Toaster richColors position="bottom-right" /></AuthProvider></QueryClientProvider></StrictMode>)
}

void bootstrap()
