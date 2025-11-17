import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, MessageSquare, Plane, Microscope, Recycle, Link2 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Analyse de Sentiments du langage naturel : langue EWE",
      description: "Ce projet visait à créer et entraîner un modèle capable de détecter et classifier les émotions et opinions dans des textes en Ewe (Togo/Ghana).",
      icon: MessageSquare,
      gradient: "from-purple-500 to-pink-500",
      steps: [
        "Collecte des données : textes provenant de formulaires, réseaux sociaux, autres sources",
        "Annotation manuelle : attribution de labels d'émotions par des locuteurs natifs",
        "Préparation des données : nettoyage, tokenisation, structuration des textes",
        "Construction du modèle : modèle de classification des émotions adapté à la langue Ewe",
        "Test et déploiement : validation et déploiement en production pour analyse en temps réel"
      ],
      tags: ["NLP", "Deep Learning", "Classification", "Ewe Language"],
      links: [
        { type: "demo", url: "https://github.com/debgnuito", label: "Voir le projet" }
      ]
    },
    {
      title: "MLOps : Prévision du retard des vols aériens",
      description: "Objectif : construire un modèle pour prédire le retard des vols en minutes ou heures.",
      icon: Plane,
      gradient: "from-blue-500 to-cyan-500",
      steps: [
        "Collecte, analyse et préparation des données / Création du modèle de régression",
        "Suivi du modèle avec MLflow / Data versioning avec DVC / Versioning du code avec Git",
        "Dockerisation du modèle pour déploiement backend / Déploiement sur Heroku",
        "Automatisation des processus avec Jenkins / Monitoring du modèle avec Arize"
      ],
      tags: ["MLOps", "Regression", "MLflow", "Docker", "Heroku", "Arize"],
      links: [
        { type: "demo", url: "https://frontend-url.com", label: "Frontend" },
        { type: "github", url: "https://github.com/debgnuito/project", label: "Code" }
      ]
    },
    {
      title: "Projet LLM (Large Language Model) : COVID-19 en français",
      description: "Objectif : développer un modèle capable de répondre à des questions sur le COVID-19 en français.",
      icon: Microscope,
      gradient: "from-green-500 to-emerald-500",
      steps: [
        "Collecte de données COVID-19",
        "Prétraitement et nettoyage des données textuelles",
        "Fine-tuning d'un modèle LLaMA spécialisé en médecine",
        "Évaluation et déploiement du modèle"
      ],
      tags: ["LLM", "LLaMA", "Fine-tuning", "Medical NLP", "French"],
      links: [
        { type: "demo", url: "https://github.com/debgnuito", label: "Voir le projet" }
      ]
    },
    {
      title: "Computer Vision : Tri intelligent des déchets",
      description: "Objectif : concevoir un système intelligent distinguant les déchets organiques des déchets recyclables.",
      icon: Recycle,
      gradient: "from-orange-500 to-yellow-500",
      steps: [
        "Classification basée sur des descripteurs hand-crafted",
        "Classification basée sur des descripteurs de haut niveau",
        "Évaluation des performances des modèles pour les deux approches",
        "Détection, segmentation et classification dans des environnements complexes"
      ],
      tags: ["Computer Vision", "YOLO", "Classification", "Segmentation", "Sustainability"],
      links: [
        { type: "demo", url: "https://github.com/debgnuito", label: "Voir le projet" }
      ]
    },
    {
      title: "Application de Traçabilité des Produits (Blockchain)",
      description: "Objectif : certifier la date d'arrivée des produits dans une usine via blockchain.",
      icon: Link2,
      gradient: "from-indigo-500 to-purple-500",
      steps: [
        "Ganache : simulateur blockchain pour applications Ethereum",
        "React : interface utilisateur",
        "Truffle : développement de contrats intelligents",
        "MetaMask : porte-monnaie pour interagir avec Ethereum",
        "Fonctionnement : chaque produit a un numéro unique et des informations détaillées enregistrées sur la blockchain"
      ],
      tags: ["Blockchain", "Ethereum", "React", "Truffle", "Web3", "MetaMask"],
      links: [
        { type: "demo", url: "https://github.com/debgnuito", label: "Voir le projet" }
      ]
    }
  ];

  return (
    <section id="projets" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Projets Techniques</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Une sélection de projets mettant en œuvre des technologies de pointe en Data Engineering, Machine Learning et Intelligence Artificielle
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto space-y-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={index} 
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2"
              >
                <div className="md:flex">
                  <div className={`md:w-1/3 bg-gradient-to-br ${project.gradient} p-8 flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative z-10 text-white text-center">
                      <div className="mb-4 inline-block p-6 bg-white/20 backdrop-blur-sm rounded-2xl">
                        <IconComponent className="h-16 w-16" strokeWidth={1.5} />
                      </div>
                      <div className="space-y-2">
                        {project.links.map((link, linkIndex) => (
                          <Button 
                            key={linkIndex}
                            variant={link.type === "demo" ? "secondary" : "outline"}
                            size="sm"
                            className="w-full"
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
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <CardHeader className="border-b bg-muted/30">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                            {project.title}
                          </CardTitle>
                          <CardDescription className="text-base">
                            {project.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="pt-6">
                      <div className="mb-6">
                        <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">
                          Étapes clés
                        </h4>
                        <ul className="space-y-2">
                          {project.steps.map((step, stepIndex) => (
                            <li key={stepIndex} className="flex items-start gap-3 text-sm">
                              <span className={`mt-1 h-2 w-2 rounded-full bg-gradient-to-br ${project.gradient} shrink-0`}></span>
                              <span className="text-foreground/80">{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge 
                            key={tagIndex} 
                            variant="secondary" 
                            className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
