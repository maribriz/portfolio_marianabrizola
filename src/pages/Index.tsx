import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import PersonalProjects from "@/components/PersonalProjects";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Projects />
      <PersonalProjects />
      <Education />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;
