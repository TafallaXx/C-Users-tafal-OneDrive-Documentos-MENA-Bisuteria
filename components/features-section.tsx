import { Sparkles, Gem, Truck, MessageCircle } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Disenos Unicos",
    description: "Joyas modernas y minimalistas en acero inoxidable"
  },
  {
    icon: Gem,
    title: "Calidad Premium",
    description: "Acabados de alta calidad en cada pieza"
  },
  {
    icon: Truck,
    title: "Envios Seguros",
    description: "Entregas a todo Costa Rica"
  },
  {
    icon: MessageCircle,
    title: "Asesoria Personal",
    description: "Atencion personalizada por WhatsApp"
  }
]

export function FeaturesSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Main Panel */}
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
              Joyas modernas en acero inoxidable
            </h2>
            <p className="text-muted-foreground mb-6">
              Disenos minimalistas y modernos creados para resaltar tu brillo natural en cada ocasion. 
              Encuentra tu pieza favorita en nuestra coleccion exclusiva.
            </p>
            <div className="flex flex-wrap gap-3">
              <a 
                href="#productos"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-accent transition-colors"
              >
                Ver productos
              </a>
              <a 
                href="#contacto"
                className="inline-flex items-center justify-center px-6 py-3 bg-muted text-foreground rounded-full font-medium hover:bg-muted/80 transition-colors"
              >
                Contacto
              </a>
            </div>
          </div>

          {/* Features Panel */}
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="font-semibold mb-4">Por que elegir MENA?</h3>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <feature.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{feature.title}</p>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
