import { NextResponse } from "next/server"
import { defaultProducts } from "@/lib/products"
import type { Product } from "@/lib/types"

// Google Sheets published CSV URL
// To use: Publish your Google Sheet as CSV (File > Share > Publish to web > CSV)
// Format your sheet with columns: id, title, category, price, description, image, alt, stock

export async function GET() {
  // URL de tu Google Sheet publicado como CSV
  const sheetUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQR0lgFNXKj-xM-vVh-dBmzbiJAZrWR2N-htBcpI7_tDuchOW9sz_Sar1i3cdRDauiPvp5G0EoSqHdW/pub?gid=509369014&single=true&output=csv"

  try {
    const response = await fetch(sheetUrl, {
      next: { revalidate: 60 } // Revalidate every 60 seconds
    })
    
    if (!response.ok) {
      console.error("Failed to fetch Google Sheet")
      return NextResponse.json(defaultProducts)
    }

    const csvText = await response.text()
    const products = parseCSV(csvText)
    
    return NextResponse.json(products)
  } catch (error) {
    console.error("Error fetching products:", error)
    return NextResponse.json(defaultProducts)
  }
}

function parseCSV(csv: string): Product[] {
  const lines = csv.trim().split("\n")
  if (lines.length < 2) return defaultProducts

  const headers = lines[0].split(",").map(h => h.trim().toLowerCase())
  const products: Product[] = []

  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i])
    if (values.length < headers.length) continue

    const product: Record<string, string | number> = {}
    headers.forEach((header, index) => {
      product[header] = values[index]?.trim() || ""
    })

    products.push({
      id: parseInt(String(product.id)) || i,
      title: String(product.title || ""),
      category: String(product.category || ""),
      price: parseInt(String(product.price)) || 0,
      description: String(product.description || ""),
      image: String(product.image || ""),
      alt: String(product.alt || ""),
      stock: parseInt(String(product.stock)) || 0
    })
  }

  return products.length > 0 ? products : defaultProducts
}

function parseCSVLine(line: string): string[] {
  const result: string[] = []
  let current = ""
  let inQuotes = false

  for (let i = 0; i < line.length; i++) {
    const char = line[i]
    
    if (char === '"') {
      inQuotes = !inQuotes
    } else if (char === "," && !inQuotes) {
      result.push(current)
      current = ""
    } else {
      current += char
    }
  }
  result.push(current)
  
  return result
}
