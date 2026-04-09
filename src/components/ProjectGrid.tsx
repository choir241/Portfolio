
import { cn } from "@/lib/utils";
import { Labels } from "@/static/Labels";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Code2 } from "lucide-react";

interface ProjectGridProps {
  className?: string;
}

const ProjectGrid = ({ className }: ProjectGridProps) => {
  const projects = [
    Labels.projectCarousel.project1,
    Labels.projectCarousel.project2,
    Labels.projectCarousel.project3,
    Labels.projectCarousel.project4,
  ];

  return (
    <section id="projects" className={cn("py-20 bg-portfolio-primary", className)}>
      <div className="mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {Labels.projectCarousel.heading2}
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            A selection of projects I've worked on, showcasing my skills in frontend, backend, and full-stack development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-portfolio-secondary/50 hover:bg-white/10 transition-all"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white rounded-lg p-2 flex items-center justify-center">
                      {project.logo ? (
                        <img 
                          src={project.logo} 
                          alt={project.name} 
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <Code2 className="w-full h-full text-portfolio-primary p-1" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-portfolio-secondary transition-colors">
                        {project.name}
                      </h3>
                    </div>
                  </div>
                </div>
                
                <p className="text-white/70 text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="text-xs px-3 py-1 bg-portfolio-secondary/20 text-portfolio-secondary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-white/80 hover:text-portfolio-secondary transition-colors"
                  >
                    <FaExternalLinkAlt size={14} />
                    {project.name === "Postman" ? "Company" : "Live Demo"}
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-white/80 hover:text-portfolio-secondary transition-colors"
                  >
                    <FaGithub size={16} />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
