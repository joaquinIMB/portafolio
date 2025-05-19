"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, FolderGit2 } from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";
import { useLanguageStore } from "@/app/store";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectPage() {
  const { id } = useParams();
  const router = useRouter();
  const { projectsSection } = useTranslations();
  const { language } = useLanguageStore();
  const { projects } = projectsSection;

  const projectIndex = projects.findIndex((p) => p.id === id);
  if (projectIndex === -1) notFound();

  const project = projects[projectIndex];
  const prevProject =
    projects[(projectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const otherProjects = projects.filter((p) => p.id !== id);

  const mainRef = useRef(null);
  const contentRef = useRef(null);
  const othersContainerRef = useRef(null);
  const [prevId, setPrevId] = useState(null);
  const isFirstLoad = useRef(true);

  const getDirection = (currentIndex, prevIndex) => {
    const total = projects.length;
    if (prevIndex === null) return 0;
    if (currentIndex === 0 && prevIndex === total - 1) return 1;
    if (currentIndex === total - 1 && prevIndex === 0) return -1;
    return currentIndex > prevIndex ? 1 : -1;
  };

  useLayoutEffect(() => {
    if (!mainRef.current || !contentRef.current || !othersContainerRef.current)
      return;

    const currIdx = projects.findIndex((p) => p.id === id);
    const prevIdx = projects.findIndex((p) => p.id === prevId);
    const dir = getDirection(currIdx, prevIdx);

    const tl = gsap.timeline();
    tl.fromTo(
      mainRef.current,
      { x: dir * 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );

    if (isFirstLoad.current) {
      gsap.fromTo(
        contentRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.2,
        }
      );
      isFirstLoad.current = false;
    } else {
      gsap.fromTo(
        contentRef.current.children,
        { x: dir * 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.2,
        }
      );
    }

    // Animamos cada tarjeta individualmente con ScrollTrigger
    gsap.utils.toArray(othersContainerRef.current.children).forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    setPrevId(id);
  }, [id]);

  useEffect(() => {
    let startX = null;

    const onTouchStart = (e) => {
      // evita que el swipe haga scroll de la página
      e.preventDefault();
      startX = e.touches[0].clientX;
    };

    const onTouchEnd = (e) => {
      e.preventDefault();
      if (startX === null) return;
      const endX = e.changedTouches[0].clientX;
      const dx = endX - startX;

      if (Math.abs(dx) > 50) {
        // navigar usando router.push en vez de window.location
        const targetId = dx < 0 ? nextProject.id : prevProject.id;
        router.push(`/projects/${targetId}`, { scroll: false });
      }
      startX = null;
    };

    window.addEventListener("touchstart", onTouchStart, { passive: false });
    window.addEventListener("touchend", onTouchEnd, { passive: false });

    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [prevProject.id, nextProject.id]);

  return (
    <section className="py-10 pt-20 px-4 max-w-6xl mx-auto text-white relative overflow-hidden max-md:px-0">
      <div
        ref={mainRef}
        className="relative w-full h-[540px] max-md:h-[400px] max-sm:h-[250px] bg-cover overflow-hidden"
      >
        {/* Image slider nav */}
        <a
          href={project.linkDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 w-[85%] mx-auto max-lg:w-full rounded-xl shadow-lg overflow-hidden max-md:rounded-none"
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
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 p-2 rounded-full transition max-md:left-1"
        >
          <ArrowLeft className="text-2xl" />
        </Link>
        <Link
          href={`/projects/${nextProject.id}`}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 p-2 rounded-full transition max-md:right-1"
        >
          <ArrowRight className="text-2xl" />
        </Link>
      </div>

      <div ref={contentRef} className="mx-[82px] mt-8 max-lg:mx-0 max-md:px-2 max-md:mt-4">
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
        <h3 className="text-2xl max-sm:text-xl font-semibold mt-6">
          <span className="bg-white bg-clip-text text-transparent">
            {language === "es" ? "Tecnologías" : "Technologies"}
          </span>
        </h3>
        <p className="text-gray-400 mt-2 max-sm:text-sm leading-6">
          {project.technologies}
        </p>
        <div className="mt-6 flex gap-4 flex-wrap">
          <Link
            href={project.linkDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-slate-900 rounded-lg text-white font-bold transition-transform hover:scale-105 shadow-lg"
          >
            Demo
          </Link>
          <Link
            href={project.linkRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-slate-900 rounded-lg text-white font-bold transition-transform hover:scale-105 shadow-lg"
          >
            <FolderGit2 className="inline-block mr-2" />
          </Link>
        </div>
      </div>

      <div className="mx-[82px] mt-8 max-lg:mx-0">
        <h2 className="text-2xl font-bold mb-6 text-gray-500 max-sm:text-xl max-md:px-2">
          {language === "es" ? "Otros proyectos" : "Other projects"}
        </h2>
        <div
          ref={othersContainerRef}
          className="flex overflow-hidden gap-6 pb-4 no-scrollbar snap-x snap-mandatory max-lg:flex-col max-lg:items-center"
        >
          {otherProjects.map((proj) => (
            <Link
              key={proj.id}
              href={`/projects/${proj.id}`}
              className="min-w-[280px] max-w-[300px] snap-start shrink-0 bg-gray-800/60 border border-gray-700 rounded-sm overflow-hidden max-lg:min-w-full"
            >
              <div className="relative h-48 w-full overflow-hidden max-lg:h-96">
                <Image
                  src={proj.image || "/placeholder.svg"}
                  alt={proj.title}
                  layout="fill"
                  objectFit="cover"
                  className="w-full transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="flex p-4 justify-between items-end max-md:p-2">
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
                      {proj.title}
                    </span>
                  </h3>
                  <p className="text-sm text-gray-300 mt-2 max-md:mt-0">
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
