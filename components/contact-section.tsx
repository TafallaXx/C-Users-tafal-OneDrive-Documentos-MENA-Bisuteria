import { MessageCircle, Instagram, MapPin, Clock } from "lucide-react"
import Link from "next/link"

const WHATSAPP_NUMBER = "50684757745"

export function ContactSection() {
  return (
    <section id="contacto" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-3xl p-8 md:p-10 shadow-sm">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6 text-center">
              Dudas o pedidos especiales? Escribenos
            </h2>

            <div className="space-y-4">
              <Link 
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                className="flex items-center gap-4 p-4 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-colors group"
              >
                <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold group-hover:text-[#25D366] transition-colors">WhatsApp</p>
                  <p className="text-muted-foreground">(+506) 8475-7745</p>
                </div>
              </Link>

              <Link 
                href="https://instagram.com/mena_jewelry_cr"
                target="_blank"
                className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 transition-colors group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Instagram</p>
                  <p className="text-muted-foreground">Proximamente</p>
                </div>
              </Link>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Envios</p>
                  <p className="text-muted-foreground">A todo Costa Rica</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Horario de atencion</p>
                  <p className="text-muted-foreground">Lunes a Sabado, 9:00 am - 6:00 pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
