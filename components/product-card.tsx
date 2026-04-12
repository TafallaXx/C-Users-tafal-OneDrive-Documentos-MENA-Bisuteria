"use client"

import Image from "next/image"
import { ShoppingCart } from "lucide-react"
import type { Product } from "@/lib/types"
import { useCartStore } from "@/lib/cart-store"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCartStore()
  const isOutOfStock = product.stock === 0

  const handleAddToCart = () => {
    if (!isOutOfStock) {
      addItem(product)
    }
  }

  return (
    <article 
      className={cn(
        "group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300",
        isOutOfStock && "opacity-75"
      )}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={product.image}
          alt={product.alt}
          fill
          className={cn(
            "object-cover transition-transform duration-500 group-hover:scale-105",
            isOutOfStock && "grayscale"
          )}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        
        {/* Sold Out Badge */}
        {isOutOfStock && (
          <span className="absolute top-3 left-3 bg-destructive text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-md shadow-md">
            Vendido
          </span>
        )}

        {/* Quick Add Button - Desktop */}
        {!isOutOfStock && (
          <button
            onClick={handleAddToCart}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-foreground text-background px-6 py-2.5 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary flex items-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Agregar
          </button>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <span className="text-xs uppercase tracking-wider text-muted-foreground">
          {product.category}
        </span>
        <h3 className={cn(
          "font-medium mt-1 line-clamp-2 min-h-[2.5rem]",
          isOutOfStock && "text-muted-foreground"
        )}>
          {product.title}
        </h3>
        <p className={cn(
          "text-lg font-bold mt-2",
          isOutOfStock ? "text-muted-foreground line-through" : "text-primary"
        )}>
          {"\u20A1"}{product.price.toLocaleString()}
        </p>
        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
          {product.description}
        </p>

        {/* Mobile Add Button */}
        <button
          onClick={handleAddToCart}
          disabled={isOutOfStock}
          className={cn(
            "w-full mt-4 py-3 rounded-xl text-sm font-medium transition-colors flex items-center justify-center gap-2 md:hidden",
            isOutOfStock 
              ? "bg-muted text-muted-foreground cursor-not-allowed"
              : "bg-primary text-primary-foreground hover:bg-accent"
          )}
        >
          {isOutOfStock ? (
            "No disponible"
          ) : (
            <>
              <ShoppingCart className="w-4 h-4" />
              Agregar al carrito
            </>
          )}
        </button>
      </div>
    </article>
  )
}
