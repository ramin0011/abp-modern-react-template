import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
export function NotFoundPage() { return <div className="grid min-h-[60vh] place-items-center text-center"><div><p className="text-7xl font-black text-primary/20">404</p><h1 className="mt-2 text-2xl font-bold">Page not found</h1><p className="mt-2 text-sm text-muted-foreground">The page you’re looking for doesn’t exist.</p><Link to="/"><Button className="mt-6">Back to overview</Button></Link></div></div> }
