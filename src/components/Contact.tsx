import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Linkedin, Github, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Contact</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg">
            <CardContent className="pt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <a 
                        href="mailto:deb.gnuito@gmail.com" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        deb.gnuito@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Téléphone</h3>
                      <a 
                        href="tel:0780881124" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        07 80 88 11 24
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Localisation</h3>
                      <p className="text-muted-foreground">Mantes-la-Ville (78711)</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground mb-4">Réseaux Sociaux</h3>
                  
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    asChild
                  >
                    <a 
                      href="https://linkedin.com/in/debgnuito" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="mr-3 h-5 w-5 text-primary" />
                      LinkedIn - @debgnuito
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    asChild
                  >
                    <a 
                      href="https://github.com/debgnuito" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-3 h-5 w-5 text-primary" />
                      GitHub - @debgnuito
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <footer className="mt-20 py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p className="flex items-center justify-center gap-2">
            Fait avec <Heart className="h-4 w-4 text-red-500 fill-red-500" /> par Débora GNUITO
          </p>
          <p className="mt-2">© 2025 - Tous droits réservés</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
