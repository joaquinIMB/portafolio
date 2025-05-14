import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "@/hooks/useTranslations";
import { SpanPresentation } from "../SpanPresentation/SpanPresentation";
import SliderProjects from "../SliderProjects/SliderProjects";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const { projectsSection } = useTranslations();

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(sliderRef.current, {
        opacity: 0,
        y: 60,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="pb-10 pt-[34px] px-8 max-sm:px-0 max-sm:py-14 w-full overflow-hidden transition-all duration-300"
    >
      <div className="max-[1536px]:w-full min-2xl:w-[87%] min-[120rem]:w-[75%] mx-auto text-center flex flex-col min-h-[90vh] max-md:mt-6 max-sm:min-h-auto justify-center max-lg:items-center mask-fade-slider-projects">
        <div className="mb-6" ref={headerRef}>
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
        <div ref={sliderRef}>
          <SliderProjects projectsSection={projectsSection} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
