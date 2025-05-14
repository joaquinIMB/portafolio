"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, FolderGit2 } from "lucide-react";
import { useParams } from "next/navigation";
import { useTranslations } from "@/hooks/useTranslations";
import { useLanguageStore } from "@/app/store";

export default function ProjectPage() {
  const { id } = useParams();
  const { projectsSection } = useTranslations();
  const { language } = useLanguageStore();

  const { projects } = projectsSection;

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
    <section className="py-10 pt-20 px-4 max-w-6xl mx-auto text-white relative max-xl:max-w-[100%] max-lg:px-2 overflow-hidden transition-all duration-500">
      <div className="relative w-full h-[540px] max-md:h-[400px] max-sm:h-[250px] bg-cover transition-all duration-500">
        <a
          href={project.linkDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 w-[85%] my-0 mx-auto max-lg:w-full rounded-xl shadow-lg overflow-hidden transition-all duration-500"
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

      <div className="mx-[82px] mt-8 max-lg:mx-0 transition-all duration-500">
        <h1 className="text-4xl max-sm:text-2xl font-bold">
          <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
            {project.title}
          </span>
        </h1>
        <p className="text-gray-300 mt-4 text-lg max-sm:text-base">
          {project.description}
        </p>
        <p className="text-gray-400 mt-2 max-sm:text-sm">
          {project.paragraph1}
        </p>
      </div>

      <div className="mx-[82px] mt-6 max-lg:mx-0 transition-all duration-500">
        <h3 className="text-2xl max-sm:text-xl font-semibold">
          <span className="bg-white bg-clip-text text-transparent">
            {language === "es" ? "Tecnologías" : "Technologies"}
          </span>
        </h3>
        <p className="text-gray-400 mt-2 max-sm:text-sm leading-6">
          {project.technologies}
        </p>
      </div>

      <div className="mx-[82px] mt-6 max-lg:mx-0 flex gap-4 flex-wrap transition-all duration-500">
        <Link
          href={project.linkDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 text-center bg-slate-900 rounded-lg text-white font-bold transition-transform hover:scale-105 shadow-lg w-fit"
        >
          Demo
        </Link>
        <Link
          href={project.linkRepo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 text-center bg-slate-900 rounded-lg text-white font-bold transition-transform hover:scale-105 shadow-lg w-fit"
        >
          <FolderGit2 className="inline-block mr-2" />
        </Link>
      </div>

      <div className="mx-[82px] mt-8 max-lg:mx-0 transition-all duration-500">
        <h2 className="text-2xl font-bold mb-6 text-gray-500 max-sm:text-xl">
          {language === "es" ? "Otros proyectos" : "Other projects"}
        </h2>
        <div className="flex overflow-x-hidden gap-6 pb-4 no-scrollbar snap-x snap-mandatory max-lg:flex-col max-lg:items-center transition-all duration-500">
          {otherProjects.map((proj) => (
            <Link
              key={proj.id}
              href={`/projects/${proj.id}`}
              className="min-w-[280px] max-w-[300px] snap-start shrink-0 bg-gray-800/60 border border-gray-700 rounded-sm overflow-hidden max-lg:min-w-full "
            >
              <div className="relative h-48 w-full overflow-hidden max-lg:h-96">
                <Image
                  src={proj.image || "/placeholder.svg"}
                  alt={proj.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="flex p-4 justify-between items-end transition-all duration-500">
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
                      {proj.title}
                    </span>
                  </h3>
                  <p className="text-sm text-gray-300 mt-2">
                    {proj.description}
                  </p>
                </div>
                <button className="hidden text-gray-400 hover:text-gray-200 transition max-lg:block cursor-pointer w-20 max-sm:text-sm">
                  {language === "es" ? "Ver más" : "See more"}
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
