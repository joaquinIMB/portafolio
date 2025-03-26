import MainPage from "@/components/MainPage/MainPage";
import Services from "@/components/Services/Services";
import Projects from "@/components/Projects/Projects";
import ContactMe from "@/components/ContactMe/ContactMe";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import Container from "@/components/Container/Container";

export default function Home() {
  return (
    <>
      <Container>
        <NavBar />
        <MainPage />
      </Container>

      <Services />
      <Projects />
      <ContactMe />
      <Footer />
    </>
  );
}
