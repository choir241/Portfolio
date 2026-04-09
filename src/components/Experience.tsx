
import { cn } from "@/lib/utils";
import { Labels } from "@/static/Labels";

interface ExperienceProps {
  className?: string;
}

const Experience = ({ className }: ExperienceProps) => {
  return (
    <section className={cn("py-20 bg-gray-50 dark:bg-gray-800", className)}>
      <div className="mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-primary dark:text-white mb-4">
            {Labels.experience.heading2}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My journey in software development through professional experience and open source contributions.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-4 top-0 bottom-0 w-0.5 bg-portfolio-secondary/30" />
          
          <div className="space-y-8">
            {Labels.experience.jobs.map((job, index) => (
              <div 
                key={index}
                className="relative flex items-start pl-12 md:pl-16"
              >
                <div className="absolute left-[5px] md:left-[5px] w-3 h-3 bg-portfolio-secondary rounded-full transform -translate-x-1/2 z-10 border-2 border-white dark:border-gray-800 mt-1.5" />
                
                <div className="flex-1 p-5 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-portfolio-primary dark:text-white">
                        {job.role}
                      </h3>
                      <p className="text-portfolio-secondary dark:text-portfolio-light font-medium">
                        {job.company}
                      </p>
                    </div>
                    <span className="text-sm text-portfolio-secondary font-medium whitespace-nowrap">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {job.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
