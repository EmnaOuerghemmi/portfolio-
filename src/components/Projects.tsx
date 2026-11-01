import { Github, Filter, X, ChevronLeft, ChevronRight, ExternalLink, Layers, Globe } from "lucide-react";
import { useState } from "react";

type TechFilter = "all" | "react" | "angular" | "nodejs" | "springboot" | "python";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  techFilter: TechFilter[];
  image: string;
  github: string;
  demo?: string;
  features: string[];
  screenshots: string[];
  badge?: string;
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<TechFilter>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filters: { id: TechFilter; label: string; icon: string }[] = [
    { id: "all", label: "Tous", icon: "🔥" },
    { id: "react", label: "React", icon: "⚛️" },
    { id: "angular", label: "Angular", icon: "🅰️" },
    { id: "nodejs", label: "Node.js", icon: "💚" },
    { id: "springboot", label: "Spring Boot", icon: "🍃" },
    { id: "python", label: "Python", icon: "🐍" },
  ];

  const projects: Project[] = [
    {
      id: "piqbit",
      title: "PIQBIT",
      description: "Plateforme de recrutement intelligente assistée par IA : du dépôt du CV à la signature du contrat, avec scoring explicable, prédiction salariale et aide à la décision.",
      longDescription: "PIQBIT est une plateforme web de recrutement (ATS) réalisée comme projet de fin d'études sur 6 mois, qui numérise l'ensemble du processus : publication d'offres, candidature, test technique, entretiens, décision, négociation salariale et signature électronique du contrat. Côté IA, un classifieur TF-IDF + régression logistique vérifie qu'un document déposé est bien un CV (exactitude 97,2 %, F1 0,94), le CV est analysé puis noté de façon explicable par rapport à l'offre, et un modèle Gradient Boosting retenu parmi 8 candidats estime une fourchette de salaire du marché tunisien (MAE ≈ 402 TND, R² 0,89). Les appels LLM passent par un routeur qui garde les données personnelles sur un modèle local (Ollama) et réserve Claude / Gemini aux données non sensibles, avec observabilité Langfuse. Le principe directeur : l'IA propose, l'humain décide. La plateforme est livrée avec 750 tests backend, une CI GitHub Actions (Semgrep, Gitleaks, Lighthouse) et un déploiement Docker.",
      tags: ["Angular", "FastAPI", "PostgreSQL", "pgvector", "Redis", "Scikit-learn", "Ollama", "Claude", "Gemini", "WebSocket", "Docker", "GitHub Actions"],
      techFilter: ["python", "angular"],
      image: "/Piqbit/image1.png",
      github: "#",
      badge: "PFE · 6 mois",
      features: ["Scoring CV explicable", "Détection de CV (F1 0,94)", "Prédiction salariale (R² 0,89)", "Test technique chronométré", "Entretiens Google Meet", "Négociation temps réel", "Signature électronique", "LLM local pour données sensibles"],
      screenshots: ["/Piqbit/image1.png", "/Piqbit/image 2.png", "/Piqbit/image 3.png", "/Piqbit/image 4.png", "/Piqbit/image 5.png"],
    },
    {
      id: "lesrangs",
      title: "LesRangs",
      description: "Plateforme de recrutement dédiée aux métiers de l'hôtellerie-restauration (CHR) : offres, vivier de talents, entretiens vidéo et messagerie temps réel.",
      longDescription: "LesRangs est une plateforme de recrutement spécialisée CHR (cafés, hôtels, restaurants) que j'ai développée en freelance sur 6 mois, de la conception à la mise en production. Elle combine l'accompagnement d'une agence et un outil digital : espaces candidat, établissement, agence et super-admin, missions ponctuelles ou abonnement premium avec accès au vivier de talents, tableaux de bord et suivi des candidatures. Les entretiens se déroulent en visioconférence intégrée (LiveKit SFU, avec repli WebRTC pair à pair), la messagerie et les notifications sont en temps réel via Socket.IO, et l'agenda se synchronise avec Google Calendar. La plateforme intègre aussi le parsing de CV PDF/DOCX, l'import Excel de candidats et d'établissements, la géolocalisation des établissements avec temps de trajet et arrêts de transport proches (Leaflet, Nominatim, OSRM, Overpass), et un déploiement continu via GitHub Actions.",
      tags: ["React", "Node.js", "Express", "MySQL", "Socket.IO", "LiveKit", "WebRTC", "Tailwind CSS", "Google OAuth", "Cloudinary", "GitHub Actions"],
      techFilter: ["react", "nodejs"],
      image: "/LesRangs/image 1.png",
      github: "#",
      demo: "https://lesrangs.com",
      badge: "Freelance · 6 mois",
      features: ["Entretiens vidéo LiveKit", "Chat temps réel", "Vivier de talents", "Abonnements", "Agenda Google Calendar", "Cartes & temps de trajet", "Parsing de CV", "Import Excel"],
      screenshots: ["/LesRangs/image 1.png", "/LesRangs/image 2.png", "/LesRangs/image 3.png", "/LesRangs/image 4.png", "/LesRangs/image 5.png"],
    },
    {
      id: "analyse-dash-ai",
      title: "AnalyseDashAI",
      description: "Plateforme collaborative exploitant 23+ agents IA pour transformer des données brutes en insights actionnables avec architecture hybride Cloud/On-Premise.",
      longDescription: "AnalyseDashAI est une plateforme d'analyse collaborative exploitant 23+ agents IA pour transformer des données brutes en insights actionnables. Elle offre une architecture hybride Cloud (Google Gemini/OpenAI) ou On-Premise (Ollama) pour maximiser la confidentialité des données. Les utilisateurs uploadent fichiers (CSV/Excel/JSON), génèrent automatiquement dashboards interactifs, rapports PDF et prévisions statistiques via un moteur RAG augmenté. Gain : analyses complètes en moins de 2 minutes, scalabilité millions de lignes, zéro exposition données cloud optionnelle.",
      tags: ["Python", "Flask", "Angular", "Gemini API", "OpenAI", "Ollama", "ChromaDB", "Plotly", "Scikit-learn", "RAG"],
      techFilter: ["python", "angular"],
      image: "/FileAnalyser/image1.png",
      github: "#",
      badge: "Featured",
      features: ["23+ Agents IA", "RAG Augmenté", "Dashboards Interactifs", "Cloud/On-Premise"],
      screenshots: [
        "/FileAnalyser/image1.png",
        "/FileAnalyser/image2.png",
        "/FileAnalyser/image3.png",
        "/FileAnalyser/image4.png",
        "/FileAnalyser/image5.png",
        "/FileAnalyser/image6.png",
        "/FileAnalyser/image7.png",
        "/FileAnalyser/image8.png",
        "/FileAnalyser/image9.png",
        "/FileAnalyser/image10.png",
        "/FileAnalyser/image11.png",
        "/FileAnalyser/image12.png",
        "/FileAnalyser/image13.png",
        "/FileAnalyser/image14.png",
        "/FileAnalyser/image15.png",
      ],
    },
    {
      id: "chatbot-rag",
      title: "Assistant Intelligent RAG",
      description: "Chatbot multimodal avec architecture RAG, Whisper speech-to-text et analyse émotionnelle.",
      longDescription: "Développement d'un chatbot multimodal avec architecture RAG (Retrieval-Augmented Generation). Intégration de Whisper pour la conversion audio→texte en temps réel. Analyse émotionnelle via NLP et détection de tonalité. Pipeline complet: embedding, retrieval, re-ranking, generation.",
      tags: ["Python", "Django", "PostgreSQL", "LLMs", "RAG", "NLP", "FAISS"],
      techFilter: ["python"],
      image: "/IntelligentJournalIA/acceil.jpg",
      github: "https://github.com/walaammar/journal-personnel-ai",
      features: ["RAG Pipeline", "Speech-to-Text", "Emotion Analysis", "Multimodal"],
      screenshots: [
        "/IntelligentJournalIA/acceil.jpg",
        "/IntelligentJournalIA/1762816168813.jpg",
        "/IntelligentJournalIA/1762816169581.jpg",
        "/IntelligentJournalIA/1764188284022.jpg",
        "/IntelligentJournalIA/1764188292871.jpg",
      ],
    },
    {
      id: "ecommerce",
      title: "E-commerce Platform",
      description: "Plateforme e-commerce complète avec système de recommandation IA.",
      longDescription: "Plateforme e-commerce complète développée lors du stage chez Smart IT Partner. Implémentation de modules métier avec intégration d'un module IA de recommandation des achats. Développement backend microservices et système de notifications automatisées.",
      tags: ["Spring Boot", "Angular", "PostgreSQL", "Docker", "API REST", "IA"],
      techFilter: ["angular", "springboot"],
      image: "/SmartItPartner/img6.png",
      github: "https://github.com/EmnaOuerghemmi/magasin_pi-ce_echange",
      features: ["AI Recommendations", "Microservices", "Notifications"],
      screenshots: [
        "/SmartItPartner/img1.jpg",
        "/SmartItPartner/img2.jpg",
        "/SmartItPartner/img3.jpg",
        "/SmartItPartner/img4.jpg",
        "/SmartItPartner/img5.jpg",
      ],
    },
    {
      id: "hospital-system",
      title: "Système Hospitalier Intelligent",
      description: "Triage et optimisation avec prédiction des temps d'attente et OCR médical.",
      longDescription: "Système de triage et optimisation hospitalier avec prédiction des temps d'attente par modélisation de flux. Module OCR pour extraction et classification de documents médicaux. Pipeline d'analyse et visualisation de données temps-réel.",
      tags: ["React", "Node.js", "MongoDB", "Docker", "Tesseract", "Pandas"],
      techFilter: ["react", "nodejs"],
      image: "/EmergencyDepartment/img2.png",
      github: "https://github.com/oumaimagaidi/PIFullStack-EmergencyDepartment",
      features: ["OCR Medical", "Predictive Waiting", "Real-time Dashboard"],
      screenshots: [
        "/EmergencyDepartment/img3.png",
        "/EmergencyDepartment/img9.png",
        "/EmergencyDepartment/image (8).png",
        "/EmergencyDepartment/image (10).png",
        "/EmergencyDepartment/image (11).png",
        "/EmergencyDepartment/image (12).png",
        "/EmergencyDepartment/image (13).png",
        "/EmergencyDepartment/image (14).png",
      ],
    },
    {
      id: "smart-city",
      title: "Smart City — Gestion Urbaine",
      description: "Plateforme de gestion urbaine intelligente avec microservices et analytics.",
      longDescription: "Plateforme de gestion urbaine intelligente permettant la gestion des infrastructures, services publics et données citoyennes. Architecture microservices avec Spring Boot et interface Angular moderne.",
      tags: ["Spring Boot", "Angular", "Microservices", "Docker", "PostgreSQL"],
      techFilter: ["angular", "springboot"],
      image: "/SMartCity/aceil.jpg",
      github: "https://github.com/MicrroServiceProject/MicroProject",
      features: ["Microservices", "Urban Analytics", "Real-time Monitoring"],
      screenshots: [
        "/SMartCity/aceil.jpg",
        "/SMartCity/1763376559480.jpg",
        "/SMartCity/1763376560428.jpg",
        "/SMartCity/1763376560811.jpg",
        "/SMartCity/1763376560951.jpg",
      ],
    },
    {
      id: "laravel-app",
      title: "Laravel Web Application",
      description: "Application web complète avec architecture MVC et gestion utilisateurs.",
      longDescription: "Application web complète développée avec le framework Laravel. Architecture MVC propre, système d'authentification complet, gestion des rôles et permissions. Interface utilisateur moderne avec Blade templates.",
      tags: ["Laravel", "PHP", "MySQL", "Blade", "Bootstrap"],
      techFilter: [],
      image: "/Laravel/aceil.jpg",
      github: "https://github.com/EmnaOuerghemmi/LaravelProject",
      features: ["MVC Architecture", "Full CRUD", "Auth System"],
      screenshots: [
        "/Laravel/1762456766250.jpg",
        "/Laravel/1762456765300.jpg",
        "/Laravel/1762456765335.jpg",
        "/Laravel/1762456765375.jpg",
        "/Laravel/1762456765841.jpg",
        "/Laravel/1762456766953.jpg",
      ],
    },
  ];

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.techFilter.includes(activeFilter));

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = "";
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((i) => (i + 1) % selectedProject.screenshots.length);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((i) => (i === 0 ? selectedProject.screenshots.length - 1 : i - 1));
    }
  };

  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-[hsl(189_94%_53%_/_0.04)] blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[hsl(258_90%_66%_/_0.04)] blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.35em] uppercase text-[hsl(189_94%_53%)] mb-4">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-5">
            Mes <span className="text-gradient">Projets</span>
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[hsl(189_94%_53%)]" />
            <p className="text-muted-foreground">Réalisations en développement full-stack et intégration IA</p>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[hsl(258_90%_66%)]" />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          <Filter className="w-4 h-4 text-muted-foreground mr-1" />
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-1.5 ${
                activeFilter === f.id
                  ? "text-white shadow-[0_0_20px_hsl(189_94%_53%_/_0.4)]"
                  : "glass border border-[hsl(220_20%_16%)] text-muted-foreground hover:border-[hsl(189_94%_53%_/_0.35)] hover:text-foreground"
              }`}
              style={
                activeFilter === f.id
                  ? { background: "var(--gradient-cta)" }
                  : {}
              }
            >
              <span>{f.icon}</span>
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => openProject(project)}
              className="group relative rounded-2xl overflow-hidden glass border border-[hsl(220_20%_16%)] hover:border-[hsl(189_94%_53%_/_0.4)] hover:shadow-[0_0_50px_hsl(189_94%_53%_/_0.12)] transition-all duration-500 cursor-pointer"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 image-fade" />

                {/* Feature badges */}
                <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
                  {project.features.slice(0, 2).map((f) => (
                    <span
                      key={f}
                      className="px-2 py-1 text-[10px] font-semibold rounded-md image-badge"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "hsl(189 94% 53% / 0.12)" }}>
                  <div className="px-4 py-2 rounded-xl glass border border-[hsl(189_94%_53%_/_0.4)] text-sm font-medium text-highlight">
                    Voir les détails →
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display font-bold text-base mb-2 group-hover:text-[color:var(--accent-cyan)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[10px] rounded-lg chip"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2.5 py-1 text-[10px] rounded-lg chip">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/EmnaOuerghemmi"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-xl glass border border-[hsl(220_20%_18%)] hover:border-[hsl(189_94%_53%_/_0.45)] hover:shadow-[0_0_30px_hsl(189_94%_53%_/_0.2)] transition-all duration-300 font-medium text-muted-foreground hover:text-foreground"
          >
            <Github className="w-5 h-5 group-hover:text-[hsl(189_94%_65%)] transition-colors" />
            Voir plus sur GitHub
            <Layers className="w-4 h-4 group-hover:text-[hsl(258_90%_72%)] transition-colors" />
          </a>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "hsl(220 30% 4% / 0.85)", backdropFilter: "blur(16px)" }}
          onClick={closeProject}
        >
          <div
            className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl border border-border shadow-[0_0_80px_hsl(189_94%_53%_/_0.2)]"
            style={{ background: "hsl(var(--card))" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={closeProject}
              className="absolute top-4 right-4 z-20 p-2 rounded-xl glass border border-[hsl(220_20%_20%)] hover:border-[hsl(189_94%_53%_/_0.5)] hover:text-[hsl(189_94%_65%)] transition-all duration-200"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Carousel */}
            <div className="relative bg-[hsl(220_25%_5%)]" style={{ aspectRatio: "16/9" }}>
              <img
                src={selectedProject.screenshots[currentImageIndex]}
                alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                className="w-full h-full object-contain"
              />

              {selectedProject.screenshots.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-xl glass border border-[hsl(220_20%_20%)] hover:border-[hsl(189_94%_53%_/_0.5)] transition-all"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-xl glass border border-[hsl(220_20%_20%)] hover:border-[hsl(189_94%_53%_/_0.5)] transition-all"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full glass text-xs font-medium">
                {currentImageIndex + 1} / {selectedProject.screenshots.length}
              </div>
            </div>

            {/* Thumbnails */}
            {selectedProject.screenshots.length > 1 && (
              <div className="flex gap-2 px-4 py-3 overflow-x-auto border-b border-border">
                {selectedProject.screenshots.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImageIndex(i)}
                    className={`shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                      i === currentImageIndex
                        ? "border-[hsl(189_94%_53%)] shadow-[0_0_12px_hsl(189_94%_53%_/_0.4)]"
                        : "border-[hsl(220_20%_16%)] hover:border-[hsl(189_94%_53%_/_0.4)]"
                    }`}
                  >
                    <img src={s} alt={`Thumb ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Content */}
            <div className="p-7">
              <div className="flex items-start justify-between gap-4 mb-5">
                <h2 className="text-2xl md:text-3xl font-bold font-display text-gradient">
                  {selectedProject.title}
                </h2>
                {selectedProject.badge && (
                  <span className="shrink-0 px-3 py-1 rounded-lg text-xs font-bold text-white" style={{ background: "var(--gradient-cta)" }}>
                    {selectedProject.badge}
                  </span>
                )}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-7 text-sm">
                {selectedProject.longDescription}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="w-4 h-px" style={{ background: "hsl(189 94% 53%)" }} />
                  Fonctionnalités clés
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.features.map((f) => (
                    <span
                      key={f}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold feature-chip"
                    >
                      ✓ {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-7">
                <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="w-4 h-px" style={{ background: "hsl(258 90% 66%)" }} />
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg text-xs chip"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 flex-wrap">
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-[0_0_30px_hsl(189_94%_53%_/_0.4)]"
                    style={{ background: "var(--gradient-cta)" }}
                  >
                    <Globe className="w-4 h-4" />
                    Voir le site
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {selectedProject.github !== "#" && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-[0_0_30px_hsl(189_94%_53%_/_0.4)]"
                    style={{ background: "var(--gradient-cta)" }}
                  >
                    <Github className="w-4 h-4" />
                    Voir sur GitHub
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  onClick={closeProject}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold glass border border-[hsl(220_20%_20%)] text-muted-foreground hover:border-[hsl(189_94%_53%_/_0.4)] hover:text-foreground transition-all"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
