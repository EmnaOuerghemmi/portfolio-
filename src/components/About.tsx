import { Brain, Server, Database, Wrench, GraduationCap, Award, ArrowRight } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Brain,
      title: "IA & LLMs",
      color: "hsl(189 94% 53%)",
      items: ["Python Avancé", "LangChain / LlamaIndex", "RAG Architecture", "OpenAI / Gemini APIs", "NLP & Embeddings"],
    },
    {
      icon: Server,
      title: "Backend",
      color: "hsl(258 90% 66%)",
      items: ["Spring Boot", "Django / Flask / FastAPI", "Node.js / Express", "Microservices", "API REST"],
    },
    {
      icon: Database,
      title: "Data & DB",
      color: "hsl(239 90% 66%)",
      items: ["PostgreSQL", "MongoDB", "FAISS / ChromaDB", "ETL Pipelines", "Pandas / Scikit-learn"],
    },
    {
      icon: Wrench,
      title: "Frontend & DevOps",
      color: "hsl(189 94% 53%)",
      items: ["React", "Angular", "Docker", "Git / GitHub", "AWS"],
    },
  ];

  const stats = [
    { value: "7+", label: "Projets IA", sub: "multi-agents" },
    { value: "23+", label: "Agents IA", sub: "orchestrés" },
    { value: "4", label: "Stages", sub: "en entreprise" },
    { value: "5ème", label: "Année", sub: "ESPRIT" },
  ];

  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[hsl(258_90%_66%_/_0.04)] blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[hsl(189_94%_53%_/_0.04)] blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-xs font-semibold tracking-[0.35em] uppercase text-[hsl(189_94%_53%)] mb-4">Qui suis-je ?</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-5">
            À propos de <span className="text-gradient">moi</span>
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[hsl(189_94%_53%)]" />
            <p className="text-muted-foreground">Passionnée par l'IA collaborative et les systèmes intelligents</p>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[hsl(258_90%_66%)]" />
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative group glass border border-[hsl(220_20%_16%)] rounded-2xl p-6 text-center hover:border-[hsl(189_94%_53%_/_0.35)] hover:shadow-[0_0_30px_hsl(189_94%_53%_/_0.1)] transition-all duration-400 shine overflow-hidden"
            >
              <div className="text-4xl font-bold text-gradient font-display mb-1">{stat.value}</div>
              <div className="text-sm font-semibold text-foreground">{stat.label}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{stat.sub}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio + Education */}
          <div className="space-y-8">
            <div className="space-y-5">
              <p className="text-base text-muted-foreground leading-relaxed">
                Étudiante en{" "}
                <span className="font-semibold text-foreground">5ème année d'ingénierie informatique</span>{" "}
                à ESPRIT, spécialisée en développement web. Je suis passionnée par la construction de systèmes intelligents combinant le full-stack moderne et l'intelligence artificielle.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Mon expertise couvre le développement d'applications avec{" "}
                <span className="font-semibold text-foreground">React, Angular, Spring Boot, FastAPI</span>{" "}
                et l'intégration de pipelines IA avancés (RAG, multi-agents, LLMs). 
              </p>
            </div>

            {/* Education & Certifications */}
            <div className="space-y-3">
              {[
                {
                  icon: GraduationCap,
                  color: "hsl(189 94% 53%)",
                  title: "ESPRIT — Cycle Ingénieur",
                  sub: "Développement Web • 2023 – 2026 • Tunis",
                },
                {
                  icon: Award,
                  color: "hsl(258 90% 66%)",
                  title: "AWS Cloud Foundations",
                  sub: "Certification • Novembre 2025",
                },
              ].map(({ icon: Icon, color, title, sub }) => (
                <div
                  key={title}
                  className="group flex items-center gap-4 p-4 rounded-xl glass border border-[hsl(220_20%_16%)] hover:border-[hsl(189_94%_53%_/_0.3)] transition-all duration-300"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${color}18`, border: `1px solid ${color}30` }}
                  >
                    <Icon className="w-5 h-5" style={{ color }} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{title}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground/40 ml-auto group-hover:text-[hsl(189_94%_53%)] group-hover:translate-x-1 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="group relative p-5 rounded-2xl glass border border-[hsl(220_20%_16%)] hover:border-[hsl(189_94%_53%_/_0.35)] hover:shadow-[0_0_35px_hsl(189_94%_53%_/_0.12)] transition-all duration-400 overflow-hidden shine"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Corner accent */}
                <div
                  className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `radial-gradient(circle at top right, ${skill.color}15, transparent 70%)` }}
                />

                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${skill.color}12`, border: `1px solid ${skill.color}25` }}
                >
                  <skill.icon className="w-5 h-5 transition-colors" style={{ color: skill.color }} />
                </div>
                <h3 className="font-display font-semibold text-sm mb-3">{skill.title}</h3>
                <ul className="space-y-1.5">
                  {skill.items.map((item) => (
                    <li key={item} className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full shrink-0" style={{ background: skill.color }} />
                      {item}
                    </li>
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
