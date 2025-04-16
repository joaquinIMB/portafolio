import { useTranslations } from "@/hooks/useTranslations";
import Link from "next/link";
import { SpanPresentation } from "../SpanPresentation/SpanPresentation";

const Projects = () => {
  const { projectsSection } = useTranslations();

  return (
    <section
      id="projects"
      className="pb-10 pt-[34px] px-8 max-sm:px-0 max-sm:py-14 w-full overflow-hidden transition-all duration-300"
    >
      <div className="max-w-6xl mx-auto text-center flex flex-col min-h-[88vh] max-md:mt-6 max-sm:min-h-auto justify-center">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px flex-grow bg-gradient-to-r from-transparent to-cyan-500/50"></div>
            <SpanPresentation span={projectsSection.spanPresentation} />
            <div className="h-px flex-grow bg-gradient-to-l from-transparent to-purple-500/50"></div>
          </div>
          <h2 className="text-6xl max-sm:text-4xl font-bold text-white">
            {projectsSection.title}{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
              {projectsSection.span}
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">
            {projectsSection.paragraph1}
          </p>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="flex items-center gap-8 w-max">
            {projectsSection.projects.map((project) => (
              <Link
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
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
