import { Blocks, Code2, LockKeyhole, Rocket } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const templateFeatures = [
  { title: 'ABP ready', description: 'Connect to an ABP backend with runtime configuration and tenant support.', icon: Blocks },
  { title: 'Modern React', description: 'Built with React, TypeScript, Vite, and TanStack Query for a fast development experience.', icon: Code2 },
  { title: 'Authentication included', description: 'OpenID Connect authentication is set up and ready to connect to your identity provider.', icon: LockKeyhole },
]

export function DashboardPage() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-9rem)] max-w-5xl items-center px-4 py-12">
      <div className="w-full">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
            <Rocket className="h-7 w-7" aria-hidden="true" />
          </div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">ABP React Template</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">A clean starting point for your next application</h1>
          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
            This template provides the essentials for building a modern React application with an ABP backend. Replace this page with your own product experience and start shipping.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {templateFeatures.map(({ title, description, icon: Icon }) => (
            <Card key={title} className="border-border/70 bg-card/70 shadow-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h2 className="font-semibold">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
