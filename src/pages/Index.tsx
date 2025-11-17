import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Interests from "@/components/Interests";
import Strengths from "@/components/Strengths";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Interests />
      <Strengths />
      <Contact />
    </div>
  );
};

export default Index;
