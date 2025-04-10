import MainPage from "@/components/MainPage/MainPage";
import Services from "@/components/Services/Services";
import Projects from "@/components/Projects/Projects";
import ContactMe from "@/components/ContactMe/ContactMe";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <MainPage />
      <Services />
      <Projects />
      <ContactMe />
      <Footer />
    </>
  );
}
