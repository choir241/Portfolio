
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import ProjectGrid from '@/components/ProjectGrid';
import About from '@/components/About';
import Blog from '@/components/Blog';
import Streams from '@/components/Streams';
import Testimonials from '@/components/Testimonials';
import ContactCards from '@/components/ContactCards';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-portfolio-primary focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-secondary"
      >
        Skip to main content
      </a>
      <main id="main-content" className="min-h-screen">
        <Hero />
        <Experience />
        <ProjectGrid />
        <About />
        <Blog />
        <Streams />
        <Testimonials />
        <ContactCards />
        <Footer />
      </main>
    </>
  );
};

export default Index;
