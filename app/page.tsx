"use client"

import { useState, useEffect } from "react"
import useSWR from "swr"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturesSection } from "@/components/features-section"
import { ProductGrid } from "@/components/product-grid"
import { CareGuide } from "@/components/care-guide"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { CartPanel } from "@/components/cart-panel"
import { CartButton } from "@/components/cart-button"
import { AdminPanel } from "@/components/admin-panel"
import type { Product } from "@/lib/types"
import { defaultProducts } from "@/lib/products"

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function HomePage() {
  const [isAdminOpen, setIsAdminOpen] = useState(false)
  const [localProducts, setLocalProducts] = useState<Product[]>(defaultProducts)

  // Fetch products from API (which reads from Google Sheets)
  const { data: products } = useSWR<Product[]>("/api/products", fetcher, {
    fallbackData: defaultProducts,
    refreshInterval: 60000, // Refresh every minute
  })

  // Update local products when API data changes
  useEffect(() => {
    if (products) {
      setLocalProducts(products)
    }
  }, [products])

  const handleUpdateStock = (productId: number, newStock: number) => {
    setLocalProducts(prev => 
      prev.map(p => p.id === productId ? { ...p, stock: newStock } : p)
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FeaturesSection />
      <ProductGrid products={localProducts} />
      <CareGuide />
      <ContactSection />
      <Footer onAdminClick={() => setIsAdminOpen(true)} />
      
      {/* Cart Components */}
      <CartButton />
      <CartPanel />

      {/* Admin Panel */}
      <AdminPanel
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        products={localProducts}
        onUpdateStock={handleUpdateStock}
      />
    </div>
  )
}
