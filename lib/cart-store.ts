"use client"

import { create } from "zustand"
import type { Product, CartItem } from "./types"

interface CartStore {
  items: CartItem[]
  isOpen: boolean
  addItem: (product: Product) => void
  removeItem: (productId: number) => void
  clearCart: () => void
  openCart: () => void
  closeCart: () => void
  toggleCart: () => void
  getTotal: () => number
  getItemCount: () => number
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,

  addItem: (product: Product) => {
    set((state) => {
      const existingItem = state.items.find((item) => item.id === product.id)
      const maxStock = product.stock ?? 99
      
      if (existingItem) {
        // No permitir agregar mas de lo que hay en stock
        if (existingItem.quantity >= maxStock) {
          return { isOpen: true } // No cambia nada, solo abre el carrito
        }
        
        return {
          items: state.items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: Math.min(item.quantity + 1, maxStock) }
              : item
          ),
          isOpen: true
        }
      }
      
      return {
        items: [...state.items, { ...product, quantity: 1 }],
        isOpen: true
      }
    })
  },

  removeItem: (productId: number) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== productId)
    }))
  },

  clearCart: () => set({ items: [] }),

  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

  getTotal: () => {
    return get().items.reduce((total, item) => total + item.price * item.quantity, 0)
  },

  getItemCount: () => {
    return get().items.reduce((count, item) => count + item.quantity, 0)
  }
}))
