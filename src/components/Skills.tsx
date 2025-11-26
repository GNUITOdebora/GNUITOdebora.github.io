import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Cloud, BarChart3, Code, Cpu, Terminal } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Architecture & Big Data",
      icon: Database,
      skills: [
        "Data Lakes", "Data Warehouses", "Data Lakehouses", "ETL/ELT",
        "Hadoop", "Elasticsearch", "Hive", "MongoDB", "Zookeeper",
        "Spark", "Kafka", "Apache DORIS", "JANUS Graph", "HBase"
      ]
    },
    {
      title: "Analyse & Visualisation",
      icon: BarChart3,
      skills: [
        "Kibana", "Grafana", "Excel", "Power BI", "Qlik Sense"
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      skills: [
        "Git", "Jenkins", "Docker", "Kubernetes", "Ansible",
        "Vagrant", "Airflow", "Proxmox", "OpenStack", "VMware vSphere/ESXi"
      ]
    },
    {
      title: "Machine Learning & Deep Learning",
      icon: Cpu,
      skills: [
        "TensorFlow", "Keras", "PyTorch", "Scikit-learn",
        "NLP", "Computer Vision"
      ]
    },
    {
      title: "LLM & IA Générative",
      icon: Cpu,
      skills: [
        "Hugging Face", "LangChain", "RAG", "LoRA",
        "Fine-tuning", "GPT", "LLaMA", "Falcon", "Mistral"
      ]
    },
    {
      title: "Programmation & Scripts",
      icon: Code,
      skills: [
        "Python", "Java", "C", "Scala", "SQL",
        "HTML", "JavaScript", "TypeScript", "Bash", "Shell"
      ]
    }
  ];

  return (
    <section id="competences" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Compétences Techniques</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="border-b bg-muted/30">
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-lg">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="outline"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
