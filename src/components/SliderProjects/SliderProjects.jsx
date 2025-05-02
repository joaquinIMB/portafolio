import Link from "next/link";
import { useState, useEffect, lazy } from "react";
import Slider from "react-slick";
import styles from "./sliderProjects.module.css";

const SliderProjects = ({ projectsSection }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const carouselSettings = {
    dots: true,
    infinite: true,
    arrows: false,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (next) => setActiveSlide(next),
    appendDots: (dots) => (
      <div className={styles.dotsContainer}>
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`${styles.dot} ${i === activeSlide ? styles.active : ""}`}
      >
        {i === activeSlide && <div className={styles.loader}></div>}
      </div>
    ),
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  if (isMobile) {
    return (
      <div className="relative w-svw">
        <Slider {...carouselSettings}>
          {projectsSection.projects.map((project, idx) => (
            <div key={`${project.id}-${idx}`} className="gap-2">
              <Link
                href={`/projects/${project.id}`}
                className="relative overflow-hidden bg-gray-800/50 transition-transform duration-200 hover:border-purple-400/50 focus-within:border-purple-400/50 group h-96 w-full flex-shrink-0"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    );
  }

  const duplicatedProjects = [
    ...projectsSection.projects,
    ...projectsSection.projects,
  ];

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className={`${styles.slider} ${isDragging ? styles.paused : ""}`}>
        {duplicatedProjects.map((project, idx) => (
          <Link
            key={`${project.id}-${idx}`}
            href={`/projects/${project.id}`}
            className="relative overflow-hidden rounded-lg bg-gray-800/50 border border-gray-700 transition-transform duration-200 hover:border-purple-400/50 focus-within:border-purple-400/50 group h-96 w-[320px] flex-shrink-0"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 blur-lg opacity-0 group-hover:opacity-30 transition"></div>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SliderProjects;
