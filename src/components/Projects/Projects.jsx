import { translations } from "@/utils/translations";

const Projects = () => {
  const { projects } = translations.es;

  return (
    <section
      id="projects"
      className="pb-10 pt-8 px-8 max-sm:px-0 max-sm:py-14 w-full overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center flex flex-col min-h-[88vh] max-md:mt-6 max-sm:min-h-auto justify-center">
        <div className="mb-6">
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
        <div className="relative w-full overflow-hidden">
          <div className="flex items-center gap-8 w-max">
            {projects.map((project) => (
              <a
                key={project.title}
                href={`/projects/${project.id}`}
                className="relative overflow-hidden rounded-lg bg-gray-800/50 border border-gray-700 transition-transform duration-300 
                hover:border-purple-400/50 focus-within:border-purple-400/50 
               group h-96"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 blur-lg opacity-0 
                group-hover:opacity-30 transition"
                ></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-80 h-full object-cover transition-transform duration-500 
                  group-hover:scale-110"
                />
                {/* <div className="absolute bottom-0 h-full left-0 right-0 p-6 bg-gradient-to-b from-transparent to-black flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-300">{project.description}</p>
                  <span className="text-sm text-cyan-400 font-mono mt-4">
                    {project.technologies}
                  </span>
                </div> */}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
