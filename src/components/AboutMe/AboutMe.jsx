"use client";
import { Code, Terminal, Server, Database, Laptop } from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";
import Link from "next/link";
import TechIcons from "../TechIcons/TechIcons";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const { aboutMeSection } = useTranslations();

  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 transition-all duration-300"
    >
      <div className="relative z-10 container mx-auto px-4 max-md:px-0">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-px flex-grow bg-gradient-to-r from-transparent to-cyan-500/50"></div>
          <span className="text-cyan-400 text-lg font-mono tracking-wider px-4">
            {`<${aboutMeSection.spanPresentation} />`}
          </span>
          <div className="h-px flex-grow bg-gradient-to-l from-transparent to-purple-500/50"></div>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-12 max-md:gap-8 max-lg:flex-col max-lg:justify-center max-[1280px]:items-start max-lg:items-center">
            <div ref={imageRef} className="relative max-lg:w-[60%]">
              <div className="relative rounded-2xl overflow-hidden max-lg:rounded-full">
                <Image
                  src="/joaco.webp"
                  alt="Joaquin Imbriago"
                  width={3024}
                  height={4032}
                  className="w-full h-auto rounded-xl object-cover aspect-square relative z-10 max-md:rounded-full"
                />
                <div className="absolute top-4 left-4 bg-gray-900/80 backdrop-blur-sm p-2 rounded-full border border-gray-700 z-20 max-md:hidden">
                  <Code className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-sm p-2 rounded-full border border-gray-700 z-20 max-md:hidden">
                  <Terminal className="w-5 h-5 text-purple-400" />
                </div>
                <div className="absolute bottom-4 left-4 bg-gray-900/80 backdrop-blur-sm p-2 rounded-full border border-gray-700 z-20 max-md:hidden">
                  <Server className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="absolute bottom-4 right-4 bg-gray-900/80 backdrop-blur-sm p-2 rounded-full border border-gray-700 z-20 max-md:hidden">
                  <Database className="w-5 h-5 text-purple-400" />
                </div>
              </div>

              <div className="absolute -top-6 -left-6 w-12 h-12 border-b border-r border-cyan-500/30 rounded-br-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 border-t border-l border-purple-500/30 rounded-tl-xl"></div>
            </div>
            <div ref={textRef} className="max-md:w-[100svw] max-md:px-4">
              <div className="space-y-6 max-lg:text-center">
                <div className="flex items-center gap-3 max-lg:justify-center">
                  <div className="p-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg">
                    <Laptop className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    {aboutMeSection.title}{" "}
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
                      {aboutMeSection.span}
                    </span>
                  </h2>
                </div>
                <div className="space-y-3 text-gray-300">
                  <p className="max-sm:px-4">{aboutMeSection.paragraph1}</p>
                  <p>{aboutMeSection.paragraph2}</p>
                  <p>{aboutMeSection.paragraph3}</p>
                </div>
                <TechIcons />
                <div className="pt-4">
                  <Link
                    href="https://drive.google.com/file/d/19IFD7jXJBNqhp9mLubMVubmId4nFnAyo/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all text-white border-2 border-white hover:bg-slate-900"
                  >
                    Curriculum Vitae
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
