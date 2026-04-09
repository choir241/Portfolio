
import { cn } from "@/lib/utils";
import { Labels } from "@/static/Labels";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

interface AboutProps {
  className?: string;
}

const About = ({ className }: AboutProps) => {
  return (
    <section className={cn("py-20 bg-white dark:bg-gray-900", className)}>
      <div className="mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-portfolio-primary dark:text-white mb-6">
              {Labels.about.heading2}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              {Labels.about.content}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <GraduationCap size={20} className="text-portfolio-secondary" />
                <span>{Labels.about.education.school}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Calendar size={20} className="text-portfolio-secondary" />
                <span>Class of {Labels.about.education.year}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <MapPin size={20} className="text-portfolio-secondary" />
                <span>Ewing Township, NJ</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {Labels.features.stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-portfolio-lightest dark:bg-gray-800 p-6 rounded-xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl md:text-4xl font-bold text-portfolio-primary dark:text-portfolio-secondary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
