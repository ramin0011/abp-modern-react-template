import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { MoreHorizontal, PackagePlus, Search } from 'lucide-react'
import { z } from 'zod'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

const productSchema = z.object({ name: z.string().min(2, 'Enter at least 2 characters'), price: z.number().positive('Price must be positive'), category: z.string().min(2, 'Category is required') })
type ProductForm = z.infer<typeof productSchema>
interface Product extends ProductForm { id: number; status: 'Active' | 'Draft'; sales: number }

const initialProducts: Product[] = [
  { id: 1, name: 'Cloud Workspace', category: 'SaaS', price: 20, status: 'Active', sales: 1240 },
  { id: 2, name: 'Analytics Suite', category: 'Business', price: 35, status: 'Active', sales: 876 },
  { id: 3, name: 'Team Starter', category: 'Collaboration', price: 15, status: 'Draft', sales: 412 },
  { id: 4, name: 'Automation Pro', category: 'Productivity', price: 49, status: 'Active', sales: 298 },
]

export function ProductsPage() {
  const [products, setProducts] = useState(initialProducts)
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ProductForm>({ resolver: zodResolver(productSchema) })
  const filtered = products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase()))
  const submit = (values: ProductForm) => {
    setProducts((items) => [...items, { ...values, id: Date.now(), sales: 0, status: 'Draft' }])
    reset(); setOpen(false); toast.success('Product created successfully')
  }
  return <div className="space-y-6"><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-sm font-semibold text-primary">Catalog</p><h1 className="mt-1 text-3xl font-bold tracking-tight">Products</h1><p className="mt-2 text-sm text-muted-foreground">Manage products and pricing in your workspace.</p></div><Dialog open={open} onOpenChange={setOpen}><DialogTrigger asChild><Button><PackagePlus className="h-4 w-4" />New product</Button></DialogTrigger><DialogContent><DialogHeader><DialogTitle>Create product</DialogTitle><DialogDescription>Add a new item to your product catalog.</DialogDescription></DialogHeader><form onSubmit={handleSubmit(submit)} className="mt-5 space-y-4"><label className="block text-sm font-semibold">Name<Input className="mt-2" placeholder="e.g. Developer plan" {...register('name')} />{errors.name && <span className="mt-1 block text-xs text-rose-500">{errors.name.message}</span>}</label><div className="grid grid-cols-2 gap-4"><label className="block text-sm font-semibold">Category<Input className="mt-2" placeholder="SaaS" {...register('category')} />{errors.category && <span className="mt-1 block text-xs text-rose-500">{errors.category.message}</span>}</label><label className="block text-sm font-semibold">Monthly price<Input className="mt-2" type="number" step="0.01" placeholder="29" {...register('price', { valueAsNumber: true })} />{errors.price && <span className="mt-1 block text-xs text-rose-500">{errors.price.message}</span>}</label></div><div className="flex justify-end gap-2 pt-3"><Button type="button" variant="ghost" onClick={() => setOpen(false)}>Cancel</Button><Button type="submit">Create product</Button></div></form></DialogContent></Dialog></div><Card><CardContent className="p-0"><div className="flex items-center border-b border-border p-4"><div className="relative w-full max-w-sm"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" /><Input value={query} onChange={(event) => setQuery(event.target.value)} className="pl-9" placeholder="Search products…" /></div><span className="ml-auto text-xs text-muted-foreground">{filtered.length} products</span></div><div className="overflow-x-auto"><table className="w-full text-left text-sm"><thead className="bg-muted/40 text-xs text-muted-foreground"><tr><th className="px-5 py-3 font-medium">Product</th><th className="px-5 py-3 font-medium">Category</th><th className="px-5 py-3 font-medium">Status</th><th className="px-5 py-3 font-medium">Sales</th><th className="px-5 py-3 font-medium">Price</th><th /></tr></thead><tbody className="divide-y divide-border/70">{filtered.map((product) => <tr key={product.id} className="hover:bg-muted/30"><td className="px-5 py-4 font-semibold">{product.name}</td><td className="px-5 py-4 text-muted-foreground">{product.category}</td><td className="px-5 py-4"><Badge className={product.status === 'Draft' ? 'bg-amber-100 text-amber-700' : ''}>{product.status}</Badge></td><td className="px-5 py-4 text-muted-foreground">{product.sales.toLocaleString()}</td><td className="px-5 py-4 font-semibold">${product.price}/mo</td><td className="px-5 py-4 text-right"><button className="rounded-md p-2 text-muted-foreground hover:bg-muted"><MoreHorizontal className="h-4 w-4" /></button></td></tr>)}</tbody></table></div></CardContent></Card></div>
}
