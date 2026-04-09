import { cn } from "@/lib/utils";
import { Labels } from "@/static/Labels";
import { Play, Youtube } from "lucide-react";

interface StreamsProps {
  className?: string;
}

const Streams = ({ className }: StreamsProps) => {
  const featuredStreams = [
    Labels.streamCarousel.stream1,
    Labels.streamCarousel.stream2,
    Labels.streamCarousel.stream3,
  ];

  return (
    <section className={cn("py-20 bg-gray-50 dark:bg-gray-800", className)}>
      <div className="mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-primary dark:text-white mb-4">
            {Labels.streamCarousel.heading2}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Check out some of my recent streams, talks, and podcast appearances where I share my knowledge with the developer community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredStreams.map((stream, index) => (
            <a
              key={index}
              href={stream.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white dark:bg-gray-700 rounded-xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="relative h-40">
                <img
                  src={stream.image}
                  alt={stream.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center">
                    <Play size={24} className="text-portfolio-primary ml-1" />
                  </div>
                </div>
                <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                  <Youtube size={12} />
                  Video
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-portfolio-primary dark:text-white text-sm line-clamp-2 mb-1">
                  {stream.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs">
                  {stream.host}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Streams;
