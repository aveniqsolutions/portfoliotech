import React, { useState, useEffect, useRef } from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { mockExperience } from '../mock/mockData';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
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

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionHeight = rect.height;
        const visibleHeight = Math.min(window.innerHeight, rect.bottom) - Math.max(0, rect.top);
        const progress = Math.max(0, Math.min(100, (visibleHeight / sectionHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-32 px-6 bg-[#050508] relative overflow-hidden">
      {/* Diagonal Top */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-br from-[#0a0a0f] to-transparent transform -skew-y-2"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <h2 className="font-['Space_Grotesk'] text-5xl md:text-6xl font-bold mb-4">
            Professional <span className="text-[#8b5cf6]">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] mx-auto mb-6"></div>
          <p className="text-[#9ca3af] text-lg max-w-2xl mx-auto">
            My career path and achievements in software development
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#27272a]">
            <div
              className="w-full bg-gradient-to-b from-[#8b5cf6] to-[#a78bfa] transition-all duration-300"
              style={{ height: `${scrollProgress}%` }}
            ></div>
          </div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {mockExperience.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative transition-all duration-1000 transform ${
                  isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${index % 2 === 0 ? '-translate-x-20' : 'translate-x-20'}`
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`md:flex md:items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Content */}
                  <div className={`md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                    <div className="group ml-16 md:ml-0 p-6 border border-[#27272a] rounded-xl hover:border-[#8b5cf6] transition-all duration-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]">
                      {/* Role */}
                      <h3 className="text-2xl font-bold text-white group-hover:text-[#a78bfa] transition-colors mb-2">
                        {exp.role}
                      </h3>
                      
                      {/* Company */}
                      <div className="flex items-center gap-2 text-[#8b5cf6] mb-3">
                        <Briefcase size={18} />
                        <span className="font-semibold">{exp.company}</span>
                      </div>

                      {/* Date & Location */}
                      <div className="flex flex-wrap gap-4 text-sm text-[#9ca3af] mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-[#9ca3af] leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[#9ca3af]">
                            <span className="text-[#8b5cf6] mt-1">▹</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1">
                    <div className="w-4 h-4 bg-[#8b5cf6] rounded-full border-4 border-[#0a0a0f] shadow-[0_0_20px_rgba(139,92,246,0.8)]">
                      <div className="absolute inset-0 bg-[#8b5cf6] rounded-full animate-ping opacity-75"></div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-tl from-[#0a0a0f] to-transparent transform skew-y-2"></div>
    </section>
  );
};

export default Experience;
