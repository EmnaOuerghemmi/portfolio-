import { Briefcase, GraduationCap, BarChart3, Calendar, ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      icon: GraduationCap,
      color: "var(--accent-cyan)",
      role: "Ingénieure Full-Stack & IA",
      type: "Projet de fin d'études",
      duration: "6 mois · 2026",
      project: "PIQBIT — Plateforme de recrutement intelligente",
      link: undefined,
      points: [
        "Conception et réalisation d'un ATS complet, de la publication de l'offre jusqu'à la signature électronique du contrat.",
        "Module IA : détection de CV (TF-IDF + régression logistique, F1 0,94), scoring explicable et prédiction salariale par Gradient Boosting (R² 0,89).",
        "Routage LLM respectueux des données personnelles : Ollama en local pour les données sensibles, Claude / Gemini pour le reste.",
        "Industrialisation : 750 tests backend automatisés, CI GitHub Actions (Semgrep, Gitleaks, Lighthouse) et images Docker publiées sur GHCR.",
      ],
      tech: ["Angular", "FastAPI", "PostgreSQL / pgvector", "Redis", "Scikit-learn", "Docker"],
    },
    {
      icon: Briefcase,
      color: "var(--accent-violet)",
      role: "Développeuse Full-Stack",
      type: "Freelance",
      duration: "6 mois · 2026",
      project: "LesRangs — Recrutement hôtellerie-restauration (CHR)",
      link: "https://lesrangs.com",
      points: [
        "Développement de bout en bout d'une plateforme de recrutement dédiée aux métiers du CHR, mise en production sur lesrangs.com.",
        "Espaces candidat, établissement, agence et super-admin, avec missions ponctuelles, abonnement premium et vivier de talents.",
        "Entretiens vidéo temps réel (LiveKit SFU avec repli WebRTC pair à pair), messagerie Socket.IO et agenda synchronisé avec Google Calendar.",
        "Cartes et temps de trajet (Leaflet, Nominatim, OSRM), parsing de CV PDF/DOCX, imports Excel et déploiement continu via GitHub Actions.",
      ],
      tech: ["React", "Node.js / Express", "MySQL", "Socket.IO", "LiveKit", "Tailwind CSS"],
    },
    {
      icon: BarChart3,
      color: "var(--accent-indigo)",
      role: "Développeuse Full-Stack & IA",
      type: "Freelance",
      duration: "3 mois",
      project: "Dashy — Plateforme d'analyse de données par IA",
      link: undefined,
      points: [
        "Développement d'une plateforme qui transforme des fichiers CSV, Excel et JSON en dashboards interactifs, rapports et prévisions.",
        "Orchestration de 23+ agents IA spécialisés : profilage et nettoyage des données, statistiques avancées, prévisions, insights et visualisations.",
        "Architecture hybride Cloud (Gemini) ou On-Premise (Ollama) avec adaptateurs LLM interchangeables (Ollama, Azure OpenAI, API REST).",
        "RAG augmenté avec connecteurs vectoriels interchangeables (ChromaDB, Pinecone, Weaviate) et chatbot conversationnel sur les données.",
      ],
      tech: ["Python", "Flask", "Angular", "Gemini", "Ollama", "ChromaDB", "Plotly", "Scikit-learn"],
    },
  ];

  return (
    <section id="experience" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[450px] h-[450px] rounded-full bg-[hsl(189_94%_53%_/_0.04)] blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[hsl(258_90%_66%_/_0.04)] blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.35em] uppercase text-[hsl(189_94%_53%)] mb-4">Parcours</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-5">
            Expérience <span className="text-gradient">professionnelle</span>
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[hsl(189_94%_53%)]" />
            <p className="text-muted-foreground">Des plateformes full-stack & IA, de la conception à la livraison</p>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[hsl(258_90%_66%)]" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {experiences.map(({ icon: Icon, color, role, type, duration, project, link, points, tech }) => (
            <div
              key={project}
              className="group relative p-7 rounded-2xl glass border border-[hsl(220_20%_16%)] hover:border-[hsl(189_94%_53%_/_0.35)] hover:shadow-[0_0_35px_hsl(189_94%_53%_/_0.12)] transition-all duration-400 overflow-hidden shine"
            >
              {/* Corner accent */}
              <div
                className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `radial-gradient(circle at top right, color-mix(in srgb, ${color} 8%, transparent), transparent 70%)` }}
              />

              <div className="flex items-start gap-4 mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `color-mix(in srgb, ${color} 10%, transparent)`, border: `1px solid color-mix(in srgb, ${color} 20%, transparent)` }}
                >
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display font-bold text-lg leading-tight">{role}</h3>
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <span
                      className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider"
                      style={{ background: `color-mix(in srgb, ${color} 8%, transparent)`, border: `1px solid color-mix(in srgb, ${color} 25%, transparent)`, color }}
                    >
                      {type}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="w-3.5 h-3.5" />
                      {duration}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                {project}
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visiter ${project}`}
                    className="text-muted-foreground hover:text-[color:var(--accent-cyan)] transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </p>

              <ul className="space-y-2.5 mb-6">
                {points.map((point) => (
                  <li key={point} className="text-xs text-muted-foreground leading-relaxed flex gap-2.5">
                    <span className="w-1 h-1 rounded-full shrink-0 mt-1.5" style={{ background: color }} />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-[10px] rounded-lg chip"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
