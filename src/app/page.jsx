"use client";

import HomePage from "@/components/MainPage/MainPage";
import AboutMe from "@/components/AboutMe/AboutMe";
import Services from "@/components/Services/Services";
import Projects from "@/components/Projects/Projects";
import ContactMe from "@/components/ContactMe/ContactMe";

export default function Home() {
  return (
    <>
      <HomePage />
      <AboutMe />
      <Services />
      <Projects />
      <ContactMe />
    </>
  );
}
