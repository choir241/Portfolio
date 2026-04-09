import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import "./carousel.css";
import { Labels } from "@/static/Labels";
import { FaGithub } from "react-icons/fa";

interface ProjectCarouselProps {
  className?: string;
}

const ProjectCarousel = ({ className }: ProjectCarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const projects = [
    Labels.projectCarousel.project1,
    Labels.projectCarousel.project2,
    Labels.projectCarousel.project3,
    Labels.projectCarousel.project4,
  ];

  interface IProject {
    name: string;
    description: string;
    tech: string[];
    link: string;
    github: string;
    logo: string;
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches && carouselRef.current) {
      const carousel = carouselRef.current.querySelector(".carousel-inner");
      if (carousel) {
        carousel.classList.remove("animate-scroll");
      }
    }
  }, []);

  function projectCarouselCard({ project }: { project: IProject }) {
    return (
      <div className="project border border-[#86cecb] drop-shadow-md drop-shadow-[#86cecb] hover:bg-[#bec8d1] card flex flex-col items-center p-4 bg-white/90 rounded-lg">
        <section className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-lg p-2 flex items-center justify-center mb-3">
          <img src={project.logo} alt={project.name + " logo"} className="w-full h-full object-contain" />
        </section>
        <span className="projectName mt-2 text-base font-semibold text-portfolio-primary">
          {project.name}
        </span>
        <p className="text-xs text-gray-600 text-center mt-1 mb-2 line-clamp-2 max-w-[200px]">
          {project.description}
        </p>
        <div className="flex flex-wrap justify-center gap-1 mb-3">
          {project.tech.map((t) => (
            <span key={t} className="text-[10px] px-2 py-0.5 bg-portfolio-lightest text-portfolio-primary rounded-full">
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-xs text-portfolio-secondary hover:underline">
            Live
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-600 hover:text-portfolio-primary flex items-center gap-1">
            <FaGithub size={12} /> Code
          </a>
        </div>
      </div>
    );
  }

  return (
    <section className={cn("py-10 bg-portfolio-primary", className)} aria-label="Projects I've worked on">
      <h2 className="text-2xl md:text-3xl font-bold text-portfolio-lightest text-center mb-8">
        {Labels.projectCarousel.heading2}
      </h2>

      <section ref={carouselRef} className="carousel" aria-hidden="true">
        <div className="group">
          {projects.map((project) => projectCarouselCard({ project }))}
        </div>

        <div className="group">
          {projects.map((project) => projectCarouselCard({ project }))}
        </div>
      </section>
    </section>
  );
};

export default ProjectCarousel;
