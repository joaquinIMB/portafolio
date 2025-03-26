import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: "project1",
    title: "ReCon",
    description: "Aplicación web para gestión financiera",
    technologies: "React, Firebase, Context API",
    image: "/recon.jpg",
  },
  {
    id: "project2",
    title: "HelpDesk Unity",
    description: "CRM personalizado para tu empresa",
    technologies:
      "Next.js 14, Express, Tailwind CSS, RTK Query, Context API",
    image: "/helpdesk.jpg",
  },
];

const Projects = () => {
  return (
    <section className="py-20 px-8 max-sm:px-0">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px flex-grow bg-gradient-to-r from-transparent to-cyan-500/50"></div>
            <span className="text-cyan-400 text-lg font-mono tracking-wider px-4">
              {"<Proyectos />"}
            </span>
            <div className="h-px flex-grow bg-gradient-to-l from-transparent to-purple-500/50"></div>
          </div>
          <h2 className="text-6xl max-sm:text-4xl font-bold text-white">
            Mis{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
              Proyectos
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">
            Explora algunos de mis trabajos recientes en desarrollo web y
            aplicaciones.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative overflow-hidden rounded-lg bg-gray-800/50 border border-gray-700 transition-all duration-300 
                hover:border-purple-400/50 focus-within:border-purple-400/50 
                hover:scale-[1.02] focus-within:scale-[1.02] 
                group max-sm:hover:scale-[1] max-sm:rounded-none max-sm:hover:border-none max-sm:border-none "
            >
              <div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 blur-lg opacity-0 
                group-hover:opacity-30 group-focus-within:opacity-30 transition"
              ></div>
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 
                  group-hover:scale-105 group-focus-within:scale-105 max-sm:hover:scale-[1]"
              />
              <div className="absolute bottom-0 h-full left-0 right-0 p-6 bg-gradient-to-b from-transparent to-black flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300">{project.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm text-cyan-400 font-mono">
                    {project.technologies}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link
            href="#"
            className="group relative flex items-center gap-2 px-8 py-4 rounded-full font-medium transition-all"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-sm border border-white/10 rounded-full z-0"></span>
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
            <span className="relative z-10 text-white">
              Ver todos los proyectos
            </span>
            <ArrowRight className="relative z-10 w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
