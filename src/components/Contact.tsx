import { Mail, MapPin, Phone, Linkedin, Github, Send, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Créer le lien mailto avec les données du formulaire
    const subject = encodeURIComponent(`Contact Portfolio - ${formData.name}`);
    const body = encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    // Ouvrir le client email
    window.location.href = `mailto:emna.ouerghemmi@esprit.tn?subject=${subject}&body=${body}`;
    
    toast({
      title: "Redirection vers votre client email",
      description: "Envoyez le message depuis votre application email.",
    });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Me <span className="text-gradient">Contacter</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Intéressé par mon profil ? N'hésitez pas à me contacter pour discuter d'opportunités de stage PFE
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">Email</h3>
                  <a href="mailto:emna.ouerghemmi@esprit.tn" className="text-muted-foreground hover:text-primary transition-colors">
                    emna.ouerghemmi@esprit.tn
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">Téléphone</h3>
                  <a href="tel:+21651865355" className="text-muted-foreground hover:text-primary transition-colors">
                    +216 51 865 355
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">Localisation</h3>
                  <p className="text-muted-foreground">Tunis, Tunisie</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">Disponibilité</h3>
                  <p className="text-muted-foreground">Stage PFE • 6 mois</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a 
                  href="https://linkedin.com/in/ouerghemmi-emna-10a468217" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border hover:border-[#22D3EE]/50 hover:shadow-[0_0_15px_hsl(189_94%_53%_/_0.3)] transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5 text-[#22D3EE]" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/EmnaOuerghemmi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border hover:border-[#22D3EE]/50 hover:shadow-[0_0_15px_hsl(189_94%_53%_/_0.3)] transition-all duration-300"
                >
                  <Github className="w-5 h-5 text-[#22D3EE]" />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
              </div>

              {/* Decorative element */}
              <div className="p-6 rounded-2xl bg-gradient-card border border-border">
                <p className="text-lg font-display font-medium mb-2">
                  🎯 À la recherche d'un stage PFE
                </p>
                <p className="text-muted-foreground text-sm">
                  Passionnée par l'IA collaborative, les architectures RAG et les systèmes multi-agents. 
                  Prête à contribuer à des projets innovants en IA générative.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                  placeholder="Décrivez votre opportunité de stage..."
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                <Send className="w-5 h-5" />
                Envoyer le message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
