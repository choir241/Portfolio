
import { cn } from "@/lib/utils";
import { Labels } from "@/static/Labels";
import { FileText, ExternalLink } from "lucide-react";

interface BlogProps {
  className?: string;
}

const Blog = ({ className }: BlogProps) => {
  return (
    <section className={cn("py-20 bg-gray-600 dark:bg-gray-900", className)}>
      <div className="mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-primary text-white mb-4">
            {Labels.blog.heading2}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {Labels.blog.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Labels.blog.articles.map((article, index) => (
            <a
              key={index}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center gap-2 text-portfolio-secondary mb-3">
                <FileText size={18} />
                <span className="text-xs font-medium uppercase tracking-wider">
                  {article.platform}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-portfolio-primary dark:text-white mb-2 group-hover:text-portfolio-secondary transition-colors">
                {article.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {article.excerpt}
              </p>
              <div className="flex items-center gap-1 text-portfolio-secondary text-sm font-medium">
                Read Article
                <ExternalLink size={14} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
