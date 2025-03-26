"use client"

import { Code, Zap, BarChart3, Wrench, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    id: "service1",
    name: "Desarrollo Web",
    paragraph1:
      "Creo aplicaciones y CRMs con interfaces modernas, intuitivas y optimizadas para brindar la mejor experiencia de usuario.",
    icon: Code,
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: "service2",
    name: "Automatización con API's",
    paragraph1:
      "Desarrollo APIs que optimizan procesos, integrando datos de manera eficiente con servicios externos y bases de datos.",
    icon: Zap,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "service3",
    name: "Optimización de rendimiento",
    paragraph1:
      "Analizo tu sitio web con herramientas avanzadas, mejorando métricas clave como velocidad de carga y puntuación en Lighthouse.",
    icon: BarChart3,
    color: "from-cyan-500 to-purple-500",
  },
  {
    id: "service4",
    name: "Soporte y Mantenimiento",
    paragraph1:
      "Brindo asistencia técnica continua, resolviendo errores y garantizando el óptimo rendimiento de tu plataforma.",
    icon: Wrench,
    color: "from-blue-500 to-purple-500",
  },
]

const Services = () => {


  return (
    <section className="relative py-20 px-12 max-sm:px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
      <div className="relative z-10 container mx-auto px-4 max-sm:px-0">
        <div className="max-w-4xl mx-auto mb-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px flex-grow bg-gradient-to-r from-transparent to-cyan-500/50"></div>
            <span className="text-cyan-400 text-lg font-mono tracking-wider px-4">{"<Servicios />"}</span>
            <div className="h-px flex-grow bg-gradient-to-l from-transparent to-purple-500/50"></div>
          </div>
          <h2 className="text-[60px] md:text-6xl max-sm:text-4xl font-bold text-white mb-6 tracking-tight text-center">
            Mis{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Servicios
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto text-center">
            Soluciones digitales personalizadas para potenciar tu presencia online y optimizar tus procesos.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className={`service-card group relative p-1 rounded-2xl transition-all duration-500 translate-y-10`}
               
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-800 to-transparent rounded-2xl opacity-50"></div>
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl group-hover:opacity-20 transition-opacity duration-500`}
                ></div>

                <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 h-full overflow-hidden group-hover:border-gray-700 transition-colors duration-300">
                  <div
                    className={`absolute top-6 left-6 w-12 h-12 bg-gradient-to-r ${service.color} rounded-full blur-xl opacity-30`}
                  ></div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div
                      className={`w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r ${service.color} mb-6`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                    <p className="text-gray-400 mb-6 flex-grow">{service.paragraph1}</p>
                    <Link
                      href="#"
                      className="group inline-flex items-center text-sm font-medium text-cyan-400 hover:text-white transition-colors"
                    >
                      <span>Saber más</span>
                      <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-12 h-12 border-t border-l border-gray-700 rounded-tl-xl opacity-30"></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services

