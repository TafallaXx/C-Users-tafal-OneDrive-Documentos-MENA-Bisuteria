"use client"

import { ShoppingBag } from "lucide-react"
import { useCartStore } from "@/lib/cart-store"
import { cn } from "@/lib/utils"

export function CartButton() {
  const { toggleCart, getItemCount } = useCartStore()
  const itemCount = getItemCount()

  if (itemCount === 0) return null

  return (
    <button
      onClick={toggleCart}
      className={cn(
        "fixed bottom-6 right-6 z-30",
        "bg-primary text-primary-foreground",
        "px-5 py-3 rounded-full shadow-lg",
        "flex items-center gap-3",
        "hover:bg-accent hover:scale-105",
        "transition-all duration-300",
        "animate-fade-in-up"
      )}
      aria-label={`Ver carrito con ${itemCount} productos`}
    >
      <ShoppingBag className="w-5 h-5" />
      <span className="font-medium">Ver mi pedido</span>
      <span className="bg-card text-primary font-bold text-sm px-2.5 py-0.5 rounded-full">
        {itemCount}
      </span>
    </button>
  )
}
