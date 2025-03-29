import About from "@/components/About";
import Footer from "@/components/Footer";
import HeroDiv from "@/components/HeroDiv";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import { GridBackground } from "@/components/ui/GridBackground";

export default function Home() {
  return (
    <GridBackground>
      <HeroDiv />
      <Projects />
      <About />
      <TechStack />
      <Footer />
    </GridBackground>
  );
}
