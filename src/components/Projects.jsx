import { useState } from "react";
import { frontendProjects, backendProjects, fullstackProjects } from "../data/projects";
import { GitHubIcon } from './SocialIcons';

const tabData = [
  { label: "Full-Stack Projects", value: "fullstack", projects: fullstackProjects },
  { label: "Front-End Projects", value: "frontend", projects: frontendProjects },
  { label: "Back-End Projects", value: "backend", projects: backendProjects }
];

function ProjectCard({ project, index }) {
  return (
    <div 
      className="glass-effect rounded-2xl p-5 sm:p-6 hover:shadow-neon hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex flex-col gap-3 sm:gap-4 animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col gap-3 sm:gap-4 h-full">
        <div className="flex justify-between items-start mb-2">
          <h4 className="font-bold text-lg sm:text-xl text-accent hover:text-neon transition-colors duration-300">{project.name}</h4>
          <span className="flex gap-2 sm:gap-3">
            <a 
              href={project.github} 
              aria-label="GitHub" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-text hover:text-accent transform hover:scale-125 transition-all duration-300"
            >
              <GitHubIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a 
              href={project.live} 
              aria-label="Live Demo" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-base sm:text-lg text-text hover:text-neon transform hover:scale-125 transition-all duration-300"
            >
              🔗
            </a>
          </span>
        </div>
        <p className="mb-1 text-xs sm:text-sm text-text/80 leading-relaxed flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech && project.tech.map(t => (
            <span 
              key={t} 
              className="px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs rounded-full glass-effect font-semibold text-accent hover:bg-accent/20 hover:scale-110 transition-all duration-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const Projects = () => {
  const [activeTab, setActiveTab] = useState("fullstack");
  const currentTab = tabData.find(t => t.value === activeTab);

  return (
    <section id="projects" className="relative py-16 sm:py-20 md:py-24 px-4 overflow-hidden">
      {/* Glossy liquid background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary -z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-accent/5 via-transparent to-neon/5 -z-10"></div>
      <div className="absolute inset-0 backdrop-blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-accent to-neon bg-clip-text text-transparent mb-8 sm:mb-12 animate-fade-in">
          Projects
        </h2>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          {tabData.map((tab, index) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-2xl font-semibold transition-all duration-300 text-xs sm:text-sm animate-fade-in
                ${activeTab === tab.value 
                  ? 'bg-gradient-to-r from-accent to-neon text-white shadow-lg' 
                  : 'glass-effect text-accent hover:bg-accent/20'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {currentTab.projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
