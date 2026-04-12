"use client"

import { X, Trash2, ShoppingBag, MessageCircle } from "lucide-react"
import Image from "next/image"
import { useCartStore } from "@/lib/cart-store"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const WHATSAPP_NUMBER = "50684757745"

export function CartPanel() {
  const { items, isOpen, closeCart, removeItem, getTotal } = useCartStore()
  const total = getTotal()

  const sendToWhatsApp = () => {
    let message = "Hola MENA! Me gustaria realizar el siguiente pedido:\n\n"
    
    items.forEach((item, index) => {
      message += `${index + 1}. ${item.title} (x${item.quantity}) - \u20A1${(item.price * item.quantity).toLocaleString()}\n`
    })
    
    message += `\n*Total estimado: \u20A1${total.toLocaleString()}*`
    
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <>
      {/* Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/50 z-40 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Panel */}
      <div 
        className={cn(
          "fixed top-0 right-0 h-full w-full sm:w-96 bg-card z-50 shadow-2xl transition-transform duration-300 ease-out flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-label="Carrito de compras"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            <h2 className="font-semibold text-lg">Tu Carrito</h2>
            {items.length > 0 && (
              <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-0.5 rounded-full">
                {items.length}
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Cerrar carrito"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-16 h-16 text-muted-foreground/30 mb-4" />
              <p className="text-muted-foreground">
                Tu carrito esta vacio
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Agrega algo lindo para empezar
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div 
                  key={item.id}
                  className="flex gap-3 bg-muted/50 rounded-xl p-3 animate-fade-in"
                >
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-sm line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      Cantidad: {item.quantity}
                    </p>
                    <p className="text-sm font-bold text-primary mt-1">
                      {"\u20A1"}{(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 hover:bg-destructive/10 hover:text-destructive rounded-lg transition-colors self-start"
                    aria-label={`Eliminar ${item.title} del carrito`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-4 border-t border-border space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Total estimado:</span>
              <span className="text-xl font-bold">{"\u20A1"}{total.toLocaleString()}</span>
            </div>
            <Button
              onClick={sendToWhatsApp}
              className="w-full h-12 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Enviar pedido por WhatsApp
            </Button>
          </div>
        )}
      </div>
    </>
  )
}
