
import { cn } from "@/lib/utils";
import { Labels } from "@/static/Labels";

interface SkillsProps {
  className?: string;
}

const Skills = ({ className }: SkillsProps) => {
  return (
    <section className={cn("py-20 bg-white dark:bg-gray-900", className)}>
      <div className="mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-primary dark:text-white mb-4">
            {Labels.skills.heading2}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Labels.skills.categories.map((category) => (
            <div 
              key={category.name}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-portfolio-primary dark:text-white mb-4 text-center">
                {category.name}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-600 hover:border-portfolio-secondary hover:text-portfolio-secondary transition-colors cursor-default"
                  >
                    {skill}
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

export default Skills;
