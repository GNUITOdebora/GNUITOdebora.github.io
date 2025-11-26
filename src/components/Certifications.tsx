import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      provider: "Microsoft",
      certs: ["Principes de base d'Azure", "Principes de base d'Azure AI"]
    },
    {
      provider: "NVIDIA",
      certs: ["Fundamentals of Deep Learning", "Generative AI with Diffusion Models"]
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg shrink-0">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3">{item.provider}</h3>
                    <div className="space-y-2">
                      {item.certs.map((cert, certIndex) => (
                        <Badge key={certIndex} variant="outline" className="text-xs block w-fit">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
