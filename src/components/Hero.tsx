
import SocialLinks from './SocialLinks';
import { cn } from '@/lib/utils';
import { Labels } from '@/static/Labels';
import profile from '../../assets/profile-no-bg.png';
import { Download, ArrowDown } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={cn("relative min-h-screen flex items-center justify-center overflow-hidden", className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-primary via-portfolio-background to-portfolio-primary z-0" />
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-portfolio-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-portfolio-secondary rounded-full blur-3xl" />
      </div>

      <div className="absolute top-4 right-4 z-20">
        <ThemeToggle />
      </div>

      <article className="mx-auto px-4 z-10 flex flex-col lg:flex-row items-center max-w-6xl">
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 pr-0 lg:pr-8">
          <p className="text-portfolio-secondary font-medium mb-2 tracking-wider uppercase text-sm">Full-Stack Developer</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            {Labels.header.heading1}
          </h1>
          <h2 className="text-xl sm:text-2xl text-white/90 mb-6">
            {Labels.header.heading2}
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-xl">
            {Labels.header.tagline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button 
              onClick={scrollToProjects}
              className="bg-portfolio-secondary hover:bg-portfolio-secondary/80 text-portfolio-primary px-8 py-3 rounded-lg font-medium transition-all hover:scale-105 shadow-lg shadow-portfolio-secondary/25"
              aria-label="View my work experience and projects"
            >
              {Labels.header.cta}
            </button>
            <a 
              href={Labels.header.resumeLink}
              download
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2"
              aria-label="Download Richard Choi's resume"
            >
              <Download size={18} />
              Resume
            </a>
          </div>
          
          <div className="mt-8">
            <SocialLinks className="justify-center lg:justify-start text-white" />
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-portfolio-secondary/20 rounded-full blur-2xl" />
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
              <img 
                src={profile}
                alt="Richard Choi - React Developer" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </article>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;
