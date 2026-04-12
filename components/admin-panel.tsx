"use client"

import { useState } from "react"
import { X, Plus, Minus, Lock, Package } from "lucide-react"
import type { Product } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface AdminPanelProps {
  isOpen: boolean
  onClose: () => void
  products: Product[]
  onUpdateStock: (productId: number, newStock: number) => void
}

const ADMIN_PASSWORD = "Oviedo2006mena"

export function AdminPanel({ isOpen, onClose, products, onUpdateStock }: AdminPanelProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      setError("")
    } else {
      setError("Contrasena incorrecta")
    }
  }

  const handleClose = () => {
    setIsAuthenticated(false)
    setPassword("")
    setError("")
    onClose()
  }

  const adjustStock = (productId: number, change: number) => {
    const product = products.find(p => p.id === productId)
    if (product) {
      const newStock = Math.max(0, product.stock + change)
      onUpdateStock(productId, newStock)
    }
  }

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/70 z-50"
        onClick={handleClose}
      />

      {/* Panel */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-md max-h-[80vh] bg-card rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border bg-muted/50">
          <div className="flex items-center gap-2">
            <Package className="w-5 h-5" />
            <h2 className="font-semibold">Gestion de Inventario</h2>
          </div>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {!isAuthenticated ? (
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">Acceso Restringido</h3>
                <p className="text-sm text-muted-foreground">
                  Ingresa la contrasena de administrador
                </p>
              </div>
              <Input
                type="password"
                placeholder="Contrasena"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12"
              />
              {error && (
                <p className="text-sm text-destructive text-center">{error}</p>
              )}
              <Button type="submit" className="w-full h-12">
                Acceder
              </Button>
            </form>
          ) : (
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground mb-4">
                Nota: Los cambios aqui son temporales. Para cambios permanentes, actualiza tu Google Sheet.
              </p>
              {products.map((product) => (
                <div 
                  key={product.id}
                  className="flex items-center justify-between p-3 bg-muted/50 rounded-xl"
                >
                  <div className="flex-1 min-w-0 pr-4">
                    <p className="font-medium text-sm truncate">{product.title}</p>
                    <p className={cn(
                      "text-xs",
                      product.stock === 0 ? "text-destructive" : "text-muted-foreground"
                    )}>
                      Stock: {product.stock}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => adjustStock(product.id, -1)}
                      className="w-8 h-8 rounded-lg bg-card hover:bg-destructive/10 hover:text-destructive flex items-center justify-center transition-colors"
                      disabled={product.stock === 0}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center font-bold">{product.stock}</span>
                    <button
                      onClick={() => adjustStock(product.id, 1)}
                      className="w-8 h-8 rounded-lg bg-card hover:bg-primary/10 hover:text-primary flex items-center justify-center transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {isAuthenticated && (
          <div className="p-4 border-t border-border">
            <Button onClick={handleClose} className="w-full">
              Guardar y Salir
            </Button>
          </div>
        )}
      </div>
    </>
  )
}
