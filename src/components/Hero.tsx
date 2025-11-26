import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import pythonLogo from "@/assets/Python-logo.png";
import k8sLogo from "@/assets/Kubernetes_logo.png";
import bigdataLogo from "@/assets/bigdata.png";
import mlLogo from "@/assets/ml-logo.png";
import devoplogo from "@/assets/schema-devops.png";
import shelllogo from "@/assets/Shell.png";



const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-light to-secondary">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTJ2LTJoMnYyem0wIDRoLTJ2LTJoMnYyem0tNCA0aC0ydi0yaDF2MXptLTQgMGgtMnYtMmgydjJ6bS00IDBoLTJ2LTJoMnYyem0tNC00aC0ydi0yaDJ2MnptLTQtNGgtMnYtMmgydjJ6bS00LTRoLTJ2LTJoMnYyem0tNC00aC0ydi0yaDJ2MnptMC00aC0ydi0yaDJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-8 animate-fade-in flex flex-col items-center">
            <div className="mb-6 relative">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden  shadow-2xl">
                <img 
                  src={profilePhoto} 
                  alt="Débora GNUITO - Ingénieur de Données" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
              Débora GNUITO
            </h1>
            <p className="text-2xl md:text-3xl font-light mb-6 text-primary-foreground/90">
              Ingénieur de Données
            </p>
            
            <div className="flex gap-6 items-center justify-center mb-4">
              <div className="group flex flex-col items-center gap-2">
                <div className="w-16 h-16 bg-white rounded-lg p-3 border border-white/20 transition-all group-hover:scale-110">

                  <img src={pythonLogo} alt="Python" className="w-full h-full object-contain" />
                </div>
                <span className="text-xs text-white/70">Python</span>
              </div>
              <div className="group flex flex-col items-center gap-2">
                <div className="w-16 h-16 bg-white rounded-lg p-3 border border-white/20 transition-all group-hover:scale-110">

                  <img src={bigdataLogo} alt="BigData" className="w-full h-full object-contain" />
                </div>
                <span className="text-xs text-white/70">BigData</span>
              </div>

              
              <div className="group flex flex-col items-center gap-2">
                <div className="w-16 h-16 bg-white rounded-lg p-3 border border-white/20 transition-all group-hover:scale-110">

                  <img src={devoplogo} alt="devop" className="w-full h-full object-contain" />
                </div>
                <span className="text-xs text-white/70">devop</span>
              </div>

              <div className="group flex flex-col items-center gap-2">
                <div className="w-16 h-16 bg-white rounded-lg p-3 border border-white/20 transition-all group-hover:scale-110">

                  <img src={shelllogo} alt="shell" className="w-full h-full object-contain" />
                </div>
                <span className="text-xs text-white/70">shell</span>
              </div>


              
              <div className="group flex flex-col items-center gap-2">
                <div className="w-16 h-16 bg-white rounded-lg p-3 border border-white/20 transition-all group-hover:scale-110">

                  <img src={mlLogo} alt="Machine Learning" className="w-full h-full object-contain" />
                </div>
                <span className="text-xs text-white/70">ML/AI</span>
              </div>
            </div>
          </div>
          
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-primary-foreground/80">
            Ingénieure en informatique spécialisée en ingénierie des données, avec une expérience dans la mise en place de pipelines, 
            le traitement distribué et l'analyse en temps réel via les technologies Big Data. Passionnée par l'optimisation et 
            la valorisation des données.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => scrollToSection("contact")}
              className="font-semibold"
            >
              <Mail className="mr-2 h-5 w-5" />
              Me Contacter
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection("projets")}
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 font-semibold"
            >
              Voir mes projets
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/70">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Mantes-la-Ville (78711)</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>07 80 88 11 24</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>deb.gnuito@gmail.com</span>
            </div>
          </div>
          
          <div className="flex justify-center gap-4 mt-8">
            <a 
              href="https://linkedin.com/in/debgnuito" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://github.com/debgnuito" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection("formations")}
          className="text-white/70 hover:text-white transition-colors"
          aria-label="Scroll down"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
