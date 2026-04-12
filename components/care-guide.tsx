import { Sparkles, Package, HandMetal, Moon } from "lucide-react"

const careItems = [
  {
    icon: Sparkles,
    title: "Quimicos Fuera",
    description: "Aplica perfume y cremas antes de ponerte tus joyas para mantener su brillo"
  },
  {
    icon: Package,
    title: "Guardalas Bien",
    description: "Almacena cada accesorio por separado en un lugar seco"
  },
  {
    icon: HandMetal,
    title: "Toque Final",
    description: "Limpialas suavemente con un pano seco despues de usarlas"
  },
  {
    icon: Moon,
    title: "Hora de Descanso",
    description: "Quitatelas para dormir. Evitas que las cadenas se tensen o se quiebren"
  }
]

export function CareGuide() {
  return (
    <section id="cuidados" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Guia de Cuidados
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Sigue estos consejos para que tus joyas luzcan perfectas por mas tiempo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {careItems.map((item, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
