import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Users, Zap } from "lucide-react";

const Strengths = () => {
  const strengths = [
    { icon: CheckCircle2, label: "Autonomie", description: "Capacité à gérer mes projets de manière indépendante" },
    { icon: Zap, label: "Dynamisme", description: "Énergie et motivation dans toutes mes initiatives" },
    { icon: Users, label: "Esprit d'équipe", description: "Collaboration efficace et communication constructive" }
  ];

  return (
    <section id="atouts" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Atouts</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {strengths.map((strength, index) => {
            const IconComponent = strength.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="pt-8 pb-8 flex flex-col items-center text-center">
                  <div className="p-4 bg-primary/10 rounded-full mb-4">
                    <IconComponent className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{strength.label}</h3>
                  <p className="text-sm text-muted-foreground">{strength.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Strengths;
