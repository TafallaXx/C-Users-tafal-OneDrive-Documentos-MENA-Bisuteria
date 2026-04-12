"use client"

import Link from "next/link"
import { useState } from "react"

interface FooterProps {
  onAdminClick: () => void
}

export function Footer({ onAdminClick }: FooterProps) {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            2026 MENA | Modern Jewelry Essentials
          </p>
          <button
            onClick={onAdminClick}
            className="text-xs text-muted-foreground/30 hover:text-muted-foreground transition-colors"
          >
            Admin
          </button>
        </div>
      </div>
    </footer>
  )
}
