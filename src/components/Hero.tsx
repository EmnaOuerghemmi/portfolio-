import { Github, Linkedin, Mail, Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      
      {/* Circuit lines decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 right-0 w-1/3 h-px bg-gradient-to-l from-primary to-transparent" />
        <div className="absolute top-1/2 right-0 w-1/4 h-px bg-gradient-to-l from-accent to-transparent" />
        <div className="absolute top-2/3 right-0 w-1/2 h-px bg-gradient-to-l from-primary to-transparent" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-muted-foreground">Recherche stage PFE • 6 mois</span>
            </div>
            
            {/* Name */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Salut, je suis{" "}
              <span className="text-gradient block mt-2">Emna Ouerghemmi</span>
            </h1>
            
            {/* Role */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-2 font-body animate-fade-up" style={{ animationDelay: '0.3s' }}>
              Étudiante Ingénieure en Informatique
            </p>
            <p className="text-lg text-primary font-medium mb-4 animate-fade-up" style={{ animationDelay: '0.35s' }}>
              Spécialité Développement Web • 5ème année
            </p>

            {/* Location */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground mb-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <MapPin className="w-4 h-4" />
              <span>Tunis, Tunisie • ESPRIT</span>
            </div>

            {/* Passions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8 animate-fade-up" style={{ animationDelay: '0.45s' }}>
              <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium">
                🚀 Full-Stack Development
              </span>
              <span className="px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium">
                🤖 Intégration IA
              </span>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8 animate-fade-up" style={{ animationDelay: '0.5s' }}>
              <Button variant="hero" size="xl" asChild>
                <a href="#contact">
                  <Mail className="w-5 h-5" />
                  Me contacter
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#projects">
                  <Download className="w-5 h-5" />
                  Voir mes projets
                </a>
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <a 
                href="https://github.com/EmnaOuerghemmi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-border bg-secondary/50 hover:bg-secondary hover:border-primary/50 hover:shadow-[0_0_20px_hsl(189_94%_53%_/_0.3)] transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/ouerghemmi-emna-10a468217" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-border bg-secondary/50 hover:bg-secondary hover:border-primary/50 hover:shadow-[0_0_20px_hsl(189_94%_53%_/_0.3)] transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:emna.ouerghemmi@esprit.tn"
                className="p-3 rounded-lg border border-border bg-secondary/50 hover:bg-secondary hover:border-primary/50 hover:shadow-[0_0_20px_hsl(189_94%_53%_/_0.3)] transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#22D3EE] via-[#8B5CF6] to-[#5B5EF7] rounded-full blur-2xl opacity-50 animate-pulse" />
              <div className="absolute -inset-2 bg-gradient-to-r from-[#22D3EE] to-[#8B5CF6] rounded-full blur-xl opacity-40" />
              
              {/* Neon border effect */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#22D3EE] via-[#8B5CF6] to-[#5B5EF7] rounded-full animate-spin-slow opacity-75" style={{ animationDuration: '8s' }} />
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#8B5CF6] via-[#22D3EE] to-[#5B5EF7] rounded-full opacity-50" />
                
                {/* Profile image */}
                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-background">
                  <img 
                    src="/profile.png" 
                    alt="Emna Ouerghemmi"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Inner glow */}
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_0_60px_rgba(34,211,238,0.3)]" />
                </div>
              </div>
              
              {/* Floating tech icons */}
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-background border border-border flex items-center justify-center shadow-[0_0_20px_hsl(189_94%_53%_/_0.4)] animate-float">
                <img src="https://techstack-generator.vercel.app/react-icon.svg" alt="React" className="w-10 h-10" />
              </div>
              <div className="absolute -bottom-2 -left-8 w-14 h-14 rounded-full bg-background border border-border flex items-center justify-center shadow-[0_0_20px_hsl(258_90%_66%_/_0.4)] animate-float" style={{ animationDelay: '-2s' }}>
                <img src="https://techstack-generator.vercel.app/python-icon.svg" alt="Python" className="w-8 h-8" />
              </div>
              <div className="absolute top-1/2 -right-8 w-14 h-14 rounded-full bg-background border border-border flex items-center justify-center shadow-[0_0_20px_hsl(189_94%_53%_/_0.4)] animate-float" style={{ animationDelay: '-4s' }}>
                <img src="https://techstack-generator.vercel.app/java-icon.svg" alt="Java" className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-glow-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
