import { ExternalLink, Github, Filter, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  features: string[];
  screenshots: string[];
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
    // {
    //   id: "bi-platform",
    //   title: "Plateforme BI Intelligente Multi-Agents",
    //   description: "Orchestration de 14 agents IA pour pipeline ETL complet avec intégration LLM (Gemini).",
    //   longDescription: "Plateforme complète d'analyse de données avec orchestration de 14 agents IA pour un pipeline ETL automatisé. Intégration de Gemini pour la détection automatique de KPIs, génération d'insights et recommandations métier. Module de prédiction ML avec auto-détection classification/régression. Plus de 50 visualisations Plotly et export PDF.",
    //   tags: ["Python", "Flask", "Angular", "Gemini API", "ChromaDB", "Plotly", "Scikit-learn"],
    //   techFilter: ["python", "angular"],
    //   image: "/FileAnalyser/img1.jpeg",
    //   github: "#",
    //   features: ["14 Agents IA", "50+ Visualisations", "Auto ML", "RAG Pipeline"],
    //   screenshots: [
    //     "/FileAnalyser/img1.jpeg",
    //     "/FileAnalyser/img1.2.jpeg",
    //     "/FileAnalyser/img2.jpeg",
    //     "/FileAnalyser/img3.jpeg",
    //     "/FileAnalyser/img4.jpeg",
    //   ],
    // },
    {
      id: "chatbot-rag",
      title: "Assistant Intelligent - Chatbot RAG",
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
      title: "Smart City - Gestion Urbaine",
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
    : projects.filter(project => project.techFilter.includes(activeFilter));

  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.screenshots.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.screenshots.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="projects" className="py-24 relative">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Mes <span className="text-gradient">Projets</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Une sélection de mes réalisations en développement full-stack et intégration IA
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <Filter className="w-5 h-5 text-muted-foreground" />
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-[#5B5EF7] to-[#22D3EE] text-white shadow-[0_0_20px_hsl(189_94%_53%_/_0.4)]"
                  : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground border border-border"
              }`}
            >
              <span>{filter.icon}</span>
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              onClick={() => openProjectDetails(project)}
              className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-[#22D3EE]/50 hover:shadow-[0_0_40px_hsl(189_94%_53%_/_0.2)] transition-all duration-500 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                
                {/* Features badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                  {project.features.slice(0, 2).map((feature) => (
                    <span 
                      key={feature}
                      className="px-2 py-1 text-xs rounded-md bg-background/80 backdrop-blur-sm text-primary font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Click to view overlay */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-4 py-2 bg-background/90 rounded-lg text-sm font-medium">
                    Cliquez pour voir les détails
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Tech Filter Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.techFilter.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary font-medium"
                    >
                      {tech === "react" && "⚛️ React"}
                      {tech === "angular" && "🅰️ Angular"}
                      {tech === "nodejs" && "💚 Node.js"}
                      {tech === "springboot" && "🍃 Spring Boot"}
                      {tech === "python" && "🐍 Python"}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Stats */}
        <div className="mt-16 text-center">
          <a 
            href="https://github.com/EmnaOuerghemmi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary/50 border border-border hover:border-[#22D3EE]/50 hover:shadow-[0_0_20px_hsl(189_94%_53%_/_0.3)] transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            <span className="font-medium">Voir plus sur GitHub</span>
          </a>
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={closeProjectDetails}
        >
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-2xl shadow-[0_0_60px_hsl(189_94%_53%_/_0.3)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              onClick={closeProjectDetails}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image Carousel */}
            <div className="relative aspect-video bg-secondary">
              <img 
                src={selectedProject.screenshots[currentImageIndex]} 
                alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                className="w-full h-full object-contain"
              />
              
              {/* Navigation arrows */}
              {selectedProject.screenshots.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-sm">
                {currentImageIndex + 1} / {selectedProject.screenshots.length}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 p-4 overflow-x-auto">
              {selectedProject.screenshots.map((screenshot, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                    currentImageIndex === index 
                      ? "border-primary shadow-[0_0_10px_hsl(174_72%_56%_/_0.3)]" 
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <img 
                    src={screenshot} 
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="p-6">
              <h2 className="text-2xl md:text-3xl font-bold font-display mb-4 text-gradient">
                {selectedProject.title}
              </h2>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {selectedProject.longDescription}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Fonctionnalités clés</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.features.map((feature) => (
                    <span 
                      key={feature}
                      className="px-3 py-2 rounded-lg bg-primary/10 text-primary font-medium text-sm"
                    >
                      ✓ {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Technologies utilisées</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                {selectedProject.github !== "#" && (
                  <Button variant="hero" asChild>
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Voir sur GitHub
                    </a>
                  </Button>
                )}
                <Button variant="heroOutline" onClick={closeProjectDetails}>
                  Fermer
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
