import { Brain, Server, Database, Wrench, GraduationCap, Award } from "lucide-react";

const About = () => {
  const skills = [
    { 
      icon: Brain, 
      title: "IA & LLMs", 
      items: ["Python Avancé", "LangChain/LlamaIndex", "RAG Architecture", "OpenAI/Gemini APIs", "NLP & Embeddings"] 
    },
    { 
      icon: Server, 
      title: "Backend", 
      items: ["Spring Boot", "Django/Flask/FastAPI", "Node.js/Express", "Microservices", "API REST"] 
    },
    { 
      icon: Database, 
      title: "Data & DB", 
      items: ["PostgreSQL", "MongoDB", "FAISS/ChromaDB", "ETL Pipelines", "Pandas/Scikit-learn"] 
    },
    { 
      icon: Wrench, 
      title: "Frontend & DevOps", 
      items: ["React", "Angular", "Docker", "Git/GitHub", "AWS"] 
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            À propos de <span className="text-gradient">moi</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionnée par l'IA collaborative et les systèmes intelligents
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Étudiante en <span className="text-primary font-semibold">5ème année d'ingénierie informatique</span> à ESPRIT, 
              spécialisée en développement web. Je suis passionnée par le développement full-stack et l'intégration de l'intelligence artificielle.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mon expertise couvre le développement d'applications web modernes avec <span className="text-primary font-semibold">React, Angular, Spring Boot et Node.js</span>. 
              Je recherche un stage PFE de 6 mois pour mettre en pratique mes compétences sur des projets innovants.
            </p>
            
            {/* Education & Certifications */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-card border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold">ESPRIT - Cycle Ingénieur</h4>
                  <p className="text-sm text-muted-foreground">2023 - 2026 • Tunis, Tunisie</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-card border border-border">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-display font-semibold">AWS Cloud Foundations</h4>
                  <p className="text-sm text-muted-foreground">Certification • Nov 2025</p>
                </div>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 rounded-xl bg-gradient-card border border-border">
                <div className="text-3xl font-bold text-gradient font-display">7+</div>
                <div className="text-sm text-muted-foreground">Projets IA</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-gradient-card border border-border">
                <div className="text-3xl font-bold text-gradient font-display">14</div>
                <div className="text-sm text-muted-foreground">Agents IA</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-gradient-card border border-border">
                <div className="text-3xl font-bold text-gradient font-display">2</div>
                <div className="text-sm text-muted-foreground">Stages</div>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div 
                key={skill.title}
                className="p-6 rounded-xl bg-gradient-card border border-border hover:border-[#22D3EE]/50 hover:shadow-[0_0_30px_hsl(189_94%_53%_/_0.15)] transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-[#22D3EE]/10 flex items-center justify-center mb-4 group-hover:bg-[#22D3EE]/20 transition-colors">
                  <skill.icon className="w-6 h-6 text-[#22D3EE]" />
                </div>
                <h3 className="font-display font-semibold mb-3">{skill.title}</h3>
                <ul className="space-y-1">
                  {skill.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
