import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/Img/banner-bienvenida.jpeg"
        alt="Coleccion de bisuteria dorada MENA"
        fill
        className="object-cover"
        priority
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/70 via-stone-800/60 to-amber-950/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="text-amber-200/80 text-sm md:text-base uppercase tracking-[0.3em] mb-4 animate-fade-in">
          Nueva Coleccion
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-wide animate-fade-in-up">
          El Arte de Resaltar
        </h1>
        <p className="text-white/70 text-lg md:text-xl tracking-wider mb-10 animate-fade-in-up animation-delay-200">
          Sutil y Moderna
        </p>
        <Link
          href="#productos"
          className="inline-block px-8 py-4 border border-white/50 text-white text-sm uppercase tracking-widest hover:bg-white hover:text-stone-900 transition-all duration-300 animate-fade-in-up animation-delay-400"
        >
          Ver Coleccion
        </Link>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
