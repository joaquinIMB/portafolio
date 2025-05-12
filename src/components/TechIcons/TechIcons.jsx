import { useEffect, useRef } from "react";
import gsap from "gsap";

import Html from "@/assets/icons/Html";
import Css from "@/assets/icons/Css";
import JS from "@/assets/icons/JavaScript";
import TS from "@/assets/icons/TypeScript";
import ReactLogo from "@/assets/icons/React";
import Redux from "@/assets/icons/Redux";
import Next from "@/assets/icons/Next";
import Node from "@/assets/icons/Node";
import Express from "@/assets/icons/Express";
import Sql from "@/assets/icons/Sql";
import Firebase from "@/assets/icons/Firebase";
import Tailwind from "@/assets/icons/Tailwind";
import Git from "@/assets/icons/Git";


const logos = [
  Html,
  Css,
  JS,
  TS,
  ReactLogo,
  Redux,
  Next,
  Node,
  Express,
  Sql,
  Firebase,
  Tailwind,
  Git,
];

const TechIcons = () => {
  const trackRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalWidth = trackRef.current.scrollWidth / 2;

      gsap.to(trackRef.current, {
        x: `-=${totalWidth}`,
        duration: 20,
        ease: "linear",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-[560px] py-6 overflow-hidden bg-transparent mask-fade max-lg:w-[50svw] max-lg:mx-auto max-md:w-[90svw] transition-all duration-300">
    <div
      className="flex w-max gap-8 items-center"
      ref={trackRef}
    >
      {[...logos, ...logos].map((Logo, idx) => (
        <div
          key={idx}
          className="w-16 h-16 flex items-center justify-center shrink-0"
        >
          <Logo />
        </div>
      ))}
    </div>
  </div>
  );
};

export default TechIcons;
