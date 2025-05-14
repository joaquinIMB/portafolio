"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "@/hooks/useTranslations"; // Asegúrate que la ruta sea correcta
import { SpanPresentation } from "../SpanPresentation/SpanPresentation"; // Asegúrate que la ruta sea correcta

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const { servicesSection } = useTranslations();
  const sectionRef = useRef(null);
  const cardsRef = useRef([]); // cardsRef.current será un array de elementos DOM

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Filtrar los elementos que están definidos (buena práctica)
      const cards = cardsRef.current.filter(Boolean);

      // Animación del Header (la mantenemos como la tenías)
      gsap.fromTo(
        ".services-header",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [servicesSection]);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative pt-20 pb-10 px-12 max-sm:px-4 max-sm:pb-4 overflow-hidden transition-all duration-300"
    >
      <div className="relative max-w-6xl z-10 container mx-auto max-sm:px-0">
        <div className="max-w-4xl mx-auto mb-6 services-header">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px flex-grow bg-gradient-to-r from-transparent to-cyan-500/50"></div>
            <SpanPresentation span={servicesSection.spanPresentation} />
            <div className="h-px flex-grow bg-gradient-to-l from-transparent to-purple-500/50"></div>
          </div>
          <h2 className="text-[60px] md:text-6xl max-sm:text-4xl font-bold text-white mb-4 tracking-tight text-center">
            {servicesSection.title}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              {servicesSection.span}
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto text-center">
            {servicesSection.paragraph1}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesSection.services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="service-card group relative p-1 rounded-2xl transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-800 to-transparent rounded-2xl opacity-50"></div>
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-[19px] group-hover:opacity-20 transition-opacity duration-500`}
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
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {service.name}
                    </h3>
                    <p className="text-gray-400 mb-6 flex-grow">
                      {service.paragraph1}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
