export interface Product {
  id: number
  title: string
  category: string
  price: number
  description: string
  image: string
  alt: string
  stock: number
}

export interface CartItem extends Product {
  quantity: number
}
