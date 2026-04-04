import React, { useState, useEffect, useRef } from 'react';
import { mockSkills } from '../mock/mockData';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isVisible, setIsVisible] = useState(false);
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

  const categories = ['All', 'Front-End', 'Frameworks', 'Databases', 'Data Science'];

  const filteredSkills = activeCategory === 'All' 
    ? mockSkills 
    : mockSkills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" ref={sectionRef} className="py-32 px-6 bg-[#050508] relative overflow-hidden">
      {/* Diagonal Divider */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-br from-[#0a0a0f] to-transparent transform -skew-y-2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <h2 className="font-['Space_Grotesk'] text-5xl md:text-6xl font-bold mb-4">
            Technical <span className="text-[#8b5cf6]">Arsenal</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] mx-auto mb-6"></div>
          <p className="text-[#9ca3af] text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#8b5cf6] text-white shadow-[0_0_20px_rgba(139,92,246,0.5)]'
                  : 'bg-[#1a1a2e] text-[#9ca3af] hover:bg-[#27272a] hover:text-white border border-[#27272a]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.id}
              className={`group relative p-6 border border-[#27272a] rounded-xl hover:border-[#8b5cf6] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Skill Name */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white group-hover:text-[#a78bfa] transition-colors">
                  {skill.name}
                </h3>
                <div className="text-sm font-mono text-[#8b5cf6]">{skill.level}%</div>
              </div>

              {/* Progress Bar */}
              <div className="h-2 bg-[#1a1a2e] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] transition-all duration-1000 ease-out"
                  style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                ></div>
              </div>

              {/* Category Tag */}
              <div className="mt-4">
                <span className="text-xs px-3 py-1 bg-[#8b5cf6]/10 text-[#a78bfa] rounded-full font-mono">
                  {skill.category}
                </span>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6]/0 to-[#a78bfa]/0 group-hover:from-[#8b5cf6]/5 group-hover:to-[#a78bfa]/5 rounded-xl transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-tl from-[#0a0a0f] to-transparent transform skew-y-2"></div>
    </section>
  );
};

export default Skills;
