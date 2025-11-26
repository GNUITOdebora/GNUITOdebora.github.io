import { Briefcase, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import kubernetesLogo from "@/assets/kubernetes.png";
import dockerLogo from "@/assets/docker.png";
import harborLogo from "@/assets/harbor.png";

import kafkaLogo from "@/assets/kafka.png";
import sparkLogo from "@/assets/spark.png";
import elasticsearchLogo from "@/assets/elasticsearch.png";

const techLogos: Record<string, string> = {
  Kubernetes: kubernetesLogo,
  Docker: dockerLogo,
  Harbor: harborLogo,
  Kafka: kafkaLogo,
  Spark: sparkLogo,
  Elasticsearch: elasticsearchLogo,
  
};


const Experience = () => {
  const experiences = [
    {
      title: "Orchestration dynamique d'un cluster IA",
      company: "Data Engineering and Semantics Research Unit",
      location: "Sfax, Tunisie",
      period: "Fév. 2025 – Juil. 2025",
      tasks: [
        "Mise en place d'une plateforme d'exécution de modèles IA avec environnements préconfigurés",
        "Gestion d'un cluster Kubernetes en haute disponibilité (HA)",
        "Hébergement et personnalisation des environnements via Docker et serveur privé Harbor",
        "Automatisation d'environnements Jupyter avec toutes les dépendances (CPU/GPU/RAM/Disque)",
        "Reproductibilité des environnements garantie avec Ansible"
      ],
      tags: ["Kubernetes", "Docker", "Harbor", "Ansible", "Jupyter"],
      link: "https://www.canva.com/design/DAGnnPHTnr4/gI50trYWSb_ymyzjTkJMJg/view?utm_content=DAGnnPHTnr4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hc446caab3d"
    },
    {
      title: "Analyse et prédiction des données en temps réel",
      company: "Data Engineering and Semantics Research Unit",
      location: "Sfax, Tunisie",
      period: "Juin 2024 – Août 2024",
      tasks: [
        "Développement de modèles d'apprentissage distribué pour le traitement de données",
        "Analyse en temps réel de données de cryptomonnaies via Apache Kafka, Spark et Elasticsearch",
        "Détection d'objets et analyse des sentiments sur flux vidéo avec OpenCV, YOLO et DeepFace"
      ],
      tags: ["Kafka", "Spark", "Elasticsearch", "OpenCV", "YOLO", "DeepFace"],
      link: "https://www.canva.com/design/DAGRAmNwtjY/x1_7OJTdMecYzNUKltcOLw/view?utm_content=DAGRAmNwtjY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h1d9eac08a5"
    },
    {
      title: "Mise en place d'une architecture Big Data pour la qualité des données",
      company: "Sifast",
      location: "Sfax, Tunisie",
      period: "23 Juin 2024 – 24 Août 2024",
      tasks: [
        "Suivi et identification des métriques de qualité des données",
        "Assurance de la qualité d'un flux de données avec Apache Griffin"
      ],
      tags: ["Apache Griffin", "Big Data", "Data Quality"],
      link: "https://www.canva.com/design/DAF0r7ruTUQ/Ti-Zj_UcsfM0AKYPQMkzjw/view?utm_content=DAF0r7ruTUQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hdfd58a14af"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Expériences Professionnelles</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="border-b bg-muted/30">
                <CardTitle className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                      <p className="text-muted-foreground font-normal mt-1">{exp.company}</p>
                      <p className="text-sm text-muted-foreground font-normal">{exp.location}</p>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground font-normal shrink-0">{exp.period}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2 mb-4">
                  {exp.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-start gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span className="text-foreground/80">{task}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                    {exp.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="text-xs flex items-center gap-2 py-1 px-2 bg-transparent border-primary/20"
                      >
                        {techLogos[tag] ? (
                          <img
                            src={techLogos[tag]}
                            alt={tag}
                            title={tag}
                            loading="lazy"
                            className="h-6 w-6 object-contain"
                            style={{ backgroundColor: "transparent" }}
                          />
                        ) : (
                          <span>{tag}</span>
                        )}
                      </Badge>
                    ))}
                  </div>

                {exp.link && (
                  <div className="pt-4 border-t">
                    <Button variant="outline" size="sm" asChild>
                      <a href={exp.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        En savoir plus
                      </a>
                    </Button>
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

export default Experience;
