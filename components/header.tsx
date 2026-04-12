"use client"

import Link from "next/link"
import { ShoppingBag, Menu, X } from "lucide-react"
import { useState } from "react"
import { useCartStore } from "@/lib/cart-store"
import { cn } from "@/lib/utils"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { toggleCart, getItemCount } = useCartStore()
  const itemCount = getItemCount()

  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4">
        <div className="grid grid-cols-3 items-center h-16 md:h-20">
          {/* Left Nav - Desktop / Mobile Menu Button */}
          <div className="flex items-center">
            <ul className="hidden md:flex items-center gap-6 lg:gap-8">
              <li>
                <Link href="#" className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#productos" className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
                  Joyas
                </Link>
              </li>
            </ul>
            <button
              className="md:hidden p-2 -ml-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Cerrar menu" : "Abrir menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Logo - Center */}
          <Link href="/" className="flex justify-center">
            <div className="relative py-2 px-4">
              <span className="font-serif text-2xl md:text-3xl font-bold tracking-[0.2em] text-foreground">
                MENA
              </span>
              <div className="absolute top-0 left-0 right-0 h-px bg-foreground" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-foreground" />
            </div>
          </Link>

          {/* Right Nav - Desktop / Cart Button */}
          <div className="flex items-center justify-end gap-6 lg:gap-8">
            <ul className="hidden md:flex items-center gap-6 lg:gap-8">
              <li>
                <Link href="#cuidados" className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
                  Cuidados
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
            <button 
              onClick={toggleCart}
              className="relative p-2"
              aria-label={`Ver carrito con ${itemCount} productos`}
            >
              <ShoppingBag className="w-6 h-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          mobileMenuOpen ? "max-h-48 pb-4" : "max-h-0"
        )}>
          <ul className="flex flex-col gap-4 pt-2">
            <li>
              <Link 
                href="#" 
                className="block text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link 
                href="#productos" 
                className="block text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Joyas
              </Link>
            </li>
            <li>
              <Link 
                href="#cuidados" 
                className="block text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Cuidados
              </Link>
            </li>
            <li>
              <Link 
                href="#contacto" 
                className="block text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
