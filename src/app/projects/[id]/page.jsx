import { translations } from "@/utils/translations";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";


export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const { projects } = translations.es;

  const projectIndex = projects.findIndex((p) => p.id === id);

  if (projectIndex === -1) {
    return {
      title: "Proyecto no encontrado",
      description: "El proyecto que buscas no existe.",
    };
  }

  const project = projects[projectIndex];

  return {
    title:`${project.title} - Portafolio Joaquin`,
    description: project.description,
  };
}
 

export default async function ProjectPage({ params }) {
  const { id } = await params;
  const { projects } = translations.es;

  const projectIndex = projects.findIndex((p) => p.id === id);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const prevProject =
    projects[(projectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  const otherProjects = projects.filter((p) => p.id !== id);

  return (
    <section className="py-10 pt-20 px-4 max-w-6xl mx-auto text-white relative max-xl:max-w-[100%] max-lg:px-2 transition-all">
      <div className="relative w-full h-[540px] max-md:h-[400px] max-sm:h-[250px] bg-cover  ">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 w-[85%] my-0 mx-auto max-lg:w-full rounded-xl shadow-lg overflow-hidden"
        >
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="w-full"
          />
        </a>
        <Link
          href={`/projects/${prevProject.id}`}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 p-2 rounded-full transition"
        >
          <ArrowLeft className="text-2xl" />
        </Link>
        <Link
          href={`/projects/${nextProject.id}`}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 p-2 rounded-full transition"
        >
          <ArrowRight className="text-2xl" />
        </Link>
      </div>

      <div className="mx-[82px] mt-8 max-lg:mx-0">
        <h1 className="text-4xl max-sm:text-2xl font-bold">
          <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
            {project.title}
          </span>
        </h1>
        <p className="text-gray-300 mt-4 text-lg max-sm:text-base">{project.description}</p>
        <p className="text-gray-400 mt-2 max-sm:text-sm">{project.paragraph1}</p>
      </div>

      <div className="mx-[82px] mt-6 max-lg:mx-0">
        <h3 className="text-2xl max-sm:text-xl font-semibold">
          <span className="bg-gradient-to-r from-cyan-500 to-cyan-400 bg-clip-text text-transparent">
            Tecnologías utilizadas
          </span>
        </h3>
        <p className="text-gray-300 mt-2 max-sm:text-sm">{project.technologies}</p>
      </div>

      <div className="mx-[82px] mt-8 max-lg:mx-0">
        <Link
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 text-center bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-white font-bold transition-transform hover:scale-105 shadow-lg w-fit"
        >
          Ver Proyecto
        </Link>
      </div>

      <div className="mx-[82px] mt-8 max-lg:mx-0">
        <h2 className="text-2xl font-bold mb-6 text-gray-500 max-sm:text-xl">
          Otros proyectos
        </h2>
        <div className="flex overflow-x-[inherit] gap-6 pb-4 no-scrollbar snap-x snap-mandatory">
          {otherProjects.map((proj) => (
            <Link
              key={proj.id}
              href={`/projects/${proj.id}`}
              className="min-w-[280px] max-w-[300px] snap-start shrink-0 bg-gray-800/60 border border-gray-700 rounded-xl overflow-hidden hover:shadow-xl transition-transform hover:scale-105"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={proj.image || "/placeholder.svg"}
                  alt={proj.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">
                  <span className="bg-gradient-to-r from-cyan-500 to-cyan-400 bg-clip-text text-transparent">
                    {proj.title}
                  </span>
                </h3>
                <p className="text-sm text-gray-300 mt-2">{proj.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
