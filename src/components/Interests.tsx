import { Card, CardContent } from "@/components/ui/card";
import { Newspaper, Plane, Lightbulb, BookOpen } from "lucide-react";

const Interests = () => {
  const interests = [
    { icon: Newspaper, label: "Actualité" },
    { icon: Plane, label: "Voyages" },
    { icon: Lightbulb, label: "Innovation" },
    { icon: BookOpen, label: "Lecture" }
  ];

  return (
    <section id="interets" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Centres d'Intérêt</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {interests.map((interest, index) => {
            const IconComponent = interest.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="pt-6 pb-6 flex flex-col items-center justify-center text-center">
                  <div className="p-4 bg-primary/10 rounded-full mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <p className="font-medium text-foreground">{interest.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Interests;
