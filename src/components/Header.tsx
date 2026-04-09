
import SocialLinks from './SocialLinks';
import { cn } from '@/lib/utils';
import { Labels } from '@/static/Labels';
import profile from '../../assets/profile-no-bg.png';
import { Download } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <header role="banner" className={cn("relative w-full min-h-[100vh] flex items-center justify-center overflow-hidden", className)}>
      <div className="absolute top-4 right-4 z-20">
        <ThemeToggle />
      </div>
      <div className="absolute inset-0 w-full h-full bg-portfolio-primary opacity-75 z-0">
      </div>

      <article className="mx-auto px-4 z-10 flex flex-col lg:flex-row items-center">
        <section className="w-full lg:w-1/2 text-left mb-8 lg:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-portfolio-lightest mb-4">
            {Labels.header.heading1}
          </h1>
          <h2 className="text-xl md:text-2xl text-portfolio-lightest mb-4">{Labels.header.heading2}</h2>
          <p className="text-lg text-portfolio-lightest/80 mb-6 max-w-lg">
            {Labels.header.bio}
          </p>
          
          <div className="flex flex-col items-center sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="bg-transparent hover:bg-portfolio-secondary/10 text-portfolio-lightest border border-portfolio-secondary px-6 py-3 rounded focus:outline-none focus:ring-2 focus:ring-portfolio-secondary transition-colors"
              aria-label={Labels.header.button}
            >
              {Labels.header.button}
            </a>
            <a 
              href={Labels.header.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-portfolio-secondary hover:bg-portfolio-secondary/80 text-portfolio-primary px-6 py-3 rounded focus:outline-none focus:ring-2 focus:ring-white transition-colors flex items-center gap-2 font-medium"
              aria-label="Download Resume"
            >
              <Download size={18} />
              Resume
            </a>
            <SocialLinks className="mt-6 sm:mt-0 sm:ml-4 text-portfolio-lightest" />
          </div>
        </section>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-portfolio-secondary">
            <img 
              src={profile}
              alt="Richard - React Developer" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </article>
    </header>
  );
};

export default Header;
