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

  const imageRef = useRef(null);
  const mainRef = useRef(null);
  const contentRef = useRef(null);
  const othersContainerRef = useRef(null);
  const isFirstLoad = useRef(true);
  const [prevId, setPrevId] = useState(null);

  const getDirection = (currentIndex, prevIndex) => {
    const total = projects.length;
    if (prevIndex === null) return 0;
    if (currentIndex === 0 && prevIndex === total - 1) return 1;
    if (currentIndex === total - 1 && prevIndex === 0) return -1;
    return currentIndex > prevIndex ? 1 : -1;
  };

  useLayoutEffect(() => {
    if (!mainRef.current || !imageRef.current || !contentRef.current) return;

    const currIdx = projects.findIndex((p) => p.id === id);
    const prevIdx = projects.findIndex((p) => p.id === prevId);
    const direction = getDirection(currIdx, prevIdx);

    if (isFirstLoad.current) {
      const tl = gsap.timeline();
      tl.fromTo(
        mainRef.current,
        { x: direction * 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
      );
      gsap.fromTo(
        contentRef.current.children,
        { x: direction * 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "expo.out",
          delay: 0.3,
        }
      );
      isFirstLoad.current = false;
    } else {
      const tl = gsap.timeline();
      tl.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" }
      ).fromTo(
        contentRef.current.children,
        { x: direction * 80, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "expo.out" },
        "<+0.1"
      );
    }

    gsap.utils.toArray(othersContainerRef.current.children).forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    setPrevId(id);
  }, [id]);

  useEffect(() => {
    if (!mainRef.current) return;

    let startX = null;
    const container = mainRef.current;

    const onTouchStart = (e) => {
      e.stopPropagation();
      startX = e.touches[0].clientX;
    };

    const onTouchEnd = (e) => {
      e.stopPropagation();
      if (startX === null) return;
      const endX = e.changedTouches[0].clientX;
      const dx = endX - startX;

      if (Math.abs(dx) > 50) {
        const targetId = dx < 0 ? nextProject.id : prevProject.id;
        router.push(`/projects/${targetId}`, { scroll: false });
      }
      startX = null;
    };

    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchend", onTouchEnd);
    };
  }, [prevProject.id, nextProject.id]);

  return (
    <section className="py-10 pt-20 px-4 max-w-6xl mx-auto text-white relative overflow-hidden max-md:px-0">
      <div
        ref={mainRef}
        className="relative w-full h-[570px] max-md:h-[420px] max-sm:h-[280px] bg-cover overflow-hidden shadow-2xl"
      >
        <a
          href={project.linkDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 w-[85%] mx-auto max-lg:w-full rounded-xl overflow-hidden max-md:rounded-none"
        >
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            ref={imageRef}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-1000 ease-in-out scale-100 hover:scale-105"
          />
        </a>
        <Link
          href={`/projects/${prevProject.id}`}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full transition"
        >
          <ArrowLeft className="text-xl" />
        </Link>
        <Link
          href={`/projects/${nextProject.id}`}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full transition"
        >
          <ArrowRight className="text-xl" />
        </Link>
      </div>

      <div ref={contentRef} className="mx-[82px] mt-8 max-lg:mx-0 max-md:px-2">
        <h1 className="text-5xl max-sm:text-3xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent">
            {project.title}
          </span>
        </h1>
        <p className="text-gray-300 mt-4 text-xl max-sm:text-base leading-relaxed">
          {project.description}
        </p>
        <p className="text-gray-400 mt-2 text-base max-sm:text-sm leading-6">
          {project.paragraph1}
        </p>

        <h3 className="text-2xl max-sm:text-xl font-semibold mt-6">
          <span className="bg-white bg-clip-text text-transparent">
            {language === "es" ? "Tecnologías" : "Technologies"}
          </span>
        </h3>
        <p className="text-gray-400 mt-2 text-base max-sm:text-sm leading-6">
          {project.technologies}
        </p>

        <div className="mt-6 flex gap-4 flex-wrap">
          <Link
            href={project.linkDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gradient-to-br from-cyan-600 to-purple-600 rounded-xl text-white font-semibold transition-transform hover:scale-105 shadow-xl"
          >
            Demo
          </Link>
          <Link
            href={project.linkRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gray-900 rounded-xl text-white font-semibold transition-transform hover:scale-105 shadow-xl"
          >
            <FolderGit2 className="inline-block mr-2" />
            Repo
          </Link>
        </div>
      </div>

      <div className="mx-[82px] mt-12 max-lg:mx-0">
        <h2 className="text-2xl font-bold mb-6 text-gray-400 max-sm:text-xl max-md:px-2">
          {language === "es" ? "Otros proyectos" : "Other projects"}
        </h2>
        <div
          ref={othersContainerRef}
          className="flex overflow-y-hidden overflow-x-auto gap-6 pb-4 no-scrollbar snap-x snap-mandatory max-lg:flex-col max-lg:items-center"
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
                  <p className="text-sm text-gray-400 mt-2 max-md:mt-1">
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
