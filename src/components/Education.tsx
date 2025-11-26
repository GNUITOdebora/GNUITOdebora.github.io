import { GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Education = () => {
  const education = [
    {
      degree: "Diplôme d'ingénieur en Ingénierie des Données",
      school: "FSS Tunisie, Sfax",
      period: "Sept. 2022 – Juil. 2025",
    },
    {
      degree: "Licence en Sciences Informatiques",
      school: "FSS Tunisie, Sfax",
      period: "Sept. 2019 – Juin 2022",
    },
  ];

  return (
    <section id="formations" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Formation</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.degree}</h3>
                    <p className="text-muted-foreground font-normal">{item.school}</p>
                    <p className="text-sm text-muted-foreground font-normal mt-1">{item.period}</p>
                  </div>
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
