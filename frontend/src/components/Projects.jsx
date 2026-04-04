import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { mockProjects } from '../mock/mockData';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const scrollContainerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filters = ['All', 'Web Apps', 'Mobile Apps', 'Data Science', 'UI/UX'];

  const filteredProjects = activeFilter === 'All'
    ? mockProjects
    : mockProjects.filter(project => project.category === activeFilter);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" ref={sectionRef} className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className={`mb-16 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <h2 className="font-['Space_Grotesk'] text-5xl md:text-6xl font-bold mb-4">
            Featured <span className="text-[#8b5cf6]">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] mb-6"></div>
          <p className="text-[#9ca3af] text-lg max-w-2xl">
            A showcase of my recent work across web development, mobile apps, and data science
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-4 mb-12">
          {filters.map((filter, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-[#8b5cf6] text-white shadow-[0_0_20px_rgba(139,92,246,0.5)]'
                  : 'bg-[#1a1a2e] text-[#9ca3af] hover:bg-[#27272a] hover:text-white border border-[#27272a]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative border border-[#27272a] rounded-2xl overflow-hidden hover:border-[#8b5cf6] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(139,92,246,0.3)] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-bold text-[#8b5cf6]/20 font-['Space_Grotesk']">
                    {project.title.charAt(0)}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Hover Links */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href="#" className="p-2 bg-[#0a0a0f]/80 backdrop-blur rounded-lg hover:bg-[#8b5cf6] transition-colors">
                    <Github size={20} className="text-white" />
                  </a>
                  <a href="#" className="p-2 bg-[#0a0a0f]/80 backdrop-blur rounded-lg hover:bg-[#8b5cf6] transition-colors">
                    <ExternalLink size={20} className="text-white" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#a78bfa] transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#9ca3af] text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#8b5cf6]/10 text-[#a78bfa] text-xs rounded-full font-mono border border-[#8b5cf6]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Category Badge */}
                <div className="pt-2">
                  <span className="text-xs px-3 py-1 bg-[#1a1a2e] text-[#8b5cf6] rounded-full font-semibold border border-[#27272a]">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
