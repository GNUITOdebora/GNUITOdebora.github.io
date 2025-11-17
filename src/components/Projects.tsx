import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Analyse de sentiments en langue EWE",
      description: "Développement d'un modèle pour détecter et classifier les émotions dans des textes en Ewe (langue locale Togo/Ghana).",
      details: "Étapes : collecte, annotation manuelle, préparation, construction, test et déploiement en temps réel.",
      tags: ["NLP", "Deep Learning", "Classification", "Ewe Language"],
      links: []
    },
    {
      title: "MLOps : Prévision des retards de vols aériens",
      description: "Modèle de régression pour prédire le retard des vols avec pipeline MLOps complet.",
      details: "Gestion de version (MLflow, DVC, Git), Dockerisation, déploiement sur Heroku, monitoring avec Arize.",
      tags: ["MLOps", "Regression", "MLflow", "Docker", "Heroku", "Arize"],
      links: [
        { type: "demo", url: "https://frontend-url.com", label: "Frontend" },
        { type: "github", url: "https://github.com/debgnuito/project", label: "Code" }
      ]
    },
    {
      title: "Projet LLM : Questions COVID-19 en français",
      description: "Fine-tuning d'un modèle LLaMA spécialisé en médecine pour répondre aux questions COVID.",
      details: "Étapes : collecte, prétraitement, fine-tuning, évaluation et déploiement.",
      tags: ["LLM", "LLaMA", "Fine-tuning", "Medical NLP", "French"],
      links: []
    },
    {
      title: "Computer Vision : Tri intelligent des déchets",
      description: "Classification, détection et segmentation de déchets organiques et recyclables dans des environnements complexes.",
      details: "Utilisation de YOLO et techniques de segmentation avancées pour un tri automatisé.",
      tags: ["Computer Vision", "YOLO", "Classification", "Segmentation", "Sustainability"],
      links: []
    },
    {
      title: "Application de Traçabilité des Produits (Blockchain)",
      description: "Certification des produits via blockchain Ethereum (Ganache) avec interface React.",
      details: "Technologies : Truffle, MetaMask, Ganache, React pour une solution de traçabilité décentralisée.",
      tags: ["Blockchain", "Ethereum", "React", "Truffle", "Web3", "MetaMask"],
      links: []
    }
  ];

  return (
    <section id="projets" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Projets Techniques</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col">
              <CardHeader className="border-b bg-muted/30">
                <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                <CardDescription className="text-base mt-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-6 flex-1 flex flex-col">
                <p className="text-sm text-muted-foreground mb-4">{project.details}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                {project.links.length > 0 && (
                  <div className="flex gap-3 mt-auto pt-4 border-t">
                    {project.links.map((link, linkIndex) => (
                      <Button 
                        key={linkIndex}
                        variant={link.type === "demo" ? "default" : "outline"}
                        size="sm"
                        asChild
                      >
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          {link.type === "demo" ? (
                            <ExternalLink className="mr-2 h-4 w-4" />
                          ) : (
                            <Github className="mr-2 h-4 w-4" />
                          )}
                          {link.label}
                        </a>
                      </Button>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
