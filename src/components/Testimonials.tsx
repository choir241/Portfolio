
import { cn } from "@/lib/utils";
import { Labels } from "@/static/Labels";
import { Quote } from "lucide-react";

interface TestimonialsProps {
  className?: string;
}

const Testimonials = ({ className }: TestimonialsProps) => {
  const testimonials = [
    Labels.testimonialCarousel.testimonial1,
    Labels.testimonialCarousel.testimonial2,
  ];

  return (
    <section className={cn("py-20 bg-white dark:bg-gray-900", className)}>
      <div className="mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-primary dark:text-white mb-4">
            {Labels.testimonialCarousel.heading2}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            What colleagues and mentors say about working with me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-6 bg-gray-50 dark:bg-gray-800 rounded-xl"
            >
              <Quote className="absolute top-4 right-4 text-portfolio-secondary/20" size={40} />
              <p className="text-gray-600 dark:text-gray-300 mb-6 relative z-10">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-portfolio-secondary/20 rounded-full flex items-center justify-center">
                  <span className="text-portfolio-secondary font-semibold">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-portfolio-primary dark:text-white">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
