import type { Product } from "./types"

// Default products - these will be overridden by Google Sheets data when available
export const defaultProducts: Product[] = [
  {
    id: 1,
    title: "Cadena Dorada Con Dije Floral",
    category: "Collares",
    price: 3800,
    description: "Hermosa cadena dorada acompañada de un encantador dije en forma de flor con detalles en rojo brillante que resaltan su diseño único.",
    image: "/images/collar-flor.jpg",
    alt: "Collar flor roja",
    stock: 0
  },
  {
    id: 2,
    title: "Aretes Lazo Dorado",
    category: "Aretes",
    price: 2500,
    description: "Su diseño combina una perla clásica con un fino lazo dorado de caída ligera, creando un look delicado y lleno de encanto",
    image: "/images/aretes-perla-lazo.jpg",
    alt: "Aretes de perla",
    stock: 0
  },
  {
    id: 3,
    title: "Pulsera Dorada",
    category: "Pulseras",
    price: 3500,
    description: "Su diseño de eslabones con forma delicada y brillante crea un efecto único.",
    image: "/images/pulsera-corazones.jpg",
    alt: "Pulsera de corazones",
    stock: 1
  },
  {
    id: 4,
    title: "Anillos Dorados",
    category: "Anillos",
    price: 1900,
    description: "Colección de anillos dorados con cristales y texturas elegantes. CADA ANILLO POR SEPARADO",
    image: "/images/anillos-set-dorado.png",
    alt: "Set de anillos",
    stock: 1
  },
  {
    id: 5,
    title: "Set Cadena Y Pulso",
    category: "Collares",
    price: 5500,
    description: "Set en tono plateado cadenas finas y dije de corazón, ideales para un look sencillo.",
    image: "/images/set-plata-minimalista.jpg",
    alt: "Set cadena y pulso",
    stock: 1
  },
  {
    id: 6,
    title: "Aretes De Flores",
    category: "Aretes",
    price: 2500,
    description: "Realza tu look con estos elegantes aretes en forma de flor",
    image: "/images/set-flor-oro-plata.jpg",
    alt: "Aretes de flores",
    stock: 2
  },
  {
    id: 7,
    title: "Cadena Doble Con Corazón",
    category: "Collares",
    price: 4000,
    description: "Collar de doble capa con un dije de corazón pulido.",
    image: "/images/collar-doble-corazon.jpg",
    alt: "Collar doble corazón",
    stock: 1
  },
  {
    id: 8,
    title: "Aretes Tipo Argolla",
    category: "Aretes",
    price: 2500,
    description: "Argollas pequeñas doradas con una textura labrada.",
    image: "/images/aretes-huggie-textura.jpg",
    alt: "Argollas Doradas",
    stock: 1
  },
  {
    id: 9,
    title: "Aretes Tipo Argolla Plata",
    category: "Aretes",
    price: 2500,
    description: "Argollas pequeñas plateadas con una textura labrada.",
    image: "/images/aretes-huggie-plata-textura.jpg",
    alt: "Argollas Plateadas",
    stock: 1
  },
  {
    id: 10,
    title: "Brazalete Dorado",
    category: "Pulseras",
    price: 4000,
    description: "Brazalete rígido con incrustaciones de piedras.",
    image: "/images/brazalete-doble-brillante.jpg",
    alt: "Brazalete brillante",
    stock: 2
  },
  {
    id: 11,
    title: "Collar Perla",
    category: "Collares",
    price: 3600,
    description: "Collar color plata es la definición de elegancia y delicadeza",
    image: "/images/collar-perla.jpg",
    alt: "Collar perla",
    stock: 0
  },
  {
    id: 12,
    title: "Pulsera Doble",
    category: "Pulseras",
    price: 3500,
    description: "Da un toque sofisticado con esta delicada pulsera.",
    image: "/images/brazalete-eslabon-cadena.jpg",
    alt: "Brazalete cadena",
    stock: 1
  },
  {
    id: 13,
    title: "Collar Tono Dorado",
    category: "Collares",
    price: 3500,
    description: "Fina cadena adornada con esferas que aportan brillo y elegancia",
    image: "/images/collar-bolitas.jpg",
    alt: "Collar bolitas",
    stock: 1
  },
  {
    id: 14,
    title: "Aretes Tipo Huggie",
    category: "Aretes",
    price: 3500,
    description: "Sus destellos sofisticados y su forma orgánica son perfectos para toda ocasión",
    image: "/images/aretes-gruesos-oro-plata.jpg",
    alt: "Aretes mixtos",
    stock: 2
  },
  {
    id: 15,
    title: "Pulsera Elegante",
    category: "Pulseras",
    price: 4800,
    description: "Pulsera de lujo con fila de cristales incrustados.",
    image: "/images/pulsera-eslabon-textura-brillante.jpg",
    alt: "Pulsera lujo",
    stock: 1
  },
  {
    id: 16,
    title: "Cadena Cubana Unisex",
    category: "Collares",
    price: 9950,
    description: "Cadena Cubana En Acero Inoxidable Chapada En Oro 18K",
    image: "/images/collar-eslabon-plano.jpg",
    alt: "Collar plano",
    stock: 1
  },
  {
    id: 17,
    title: "Aretes Lazo Colgante",
    category: "Aretes",
    price: 2800,
    description: "Aretes largos con diseño de lazo y cascada brillante.",
    image: "/images/aretes-lazo-brillante-colgante.jpg",
    alt: "Aretes largos",
    stock: 0
  },
  {
    id: 18,
    title: "Aretes Tipo Gota",
    category: "Aretes",
    price: 2500,
    description: "Argollas doradas lisas de acabado tipo espejo.",
    image: "/images/aretes-huggie.jpg",
    alt: "Aretes lisos",
    stock: 1
  },
  {
    id: 19,
    title: "Aretes Tipo Stud",
    category: "Aretes",
    price: 2500,
    description: "Broqueles clásicos con cristal brillante.",
    image: "/images/aretes-solitario.jpg",
    alt: "Aretes Minimalistas",
    stock: 1
  },
  {
    id: 20,
    title: "Aretes Broquel Bola",
    category: "Aretes",
    price: 2500,
    description: "Broqueles dorados sencillos en forma de esfera.",
    image: "/images/aretes-broquel-bola.jpg",
    alt: "Aretes bola",
    stock: 1
  }
]

export function getCategories(products: Product[]): string[] {
  return ["Todos", ...new Set(products.map(p => p.category))]
}
