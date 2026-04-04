import React, { useEffect, useRef, useState } from 'react';
import { Code2, Database, Palette, TrendingUp } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [stats, setStats] = useState({ projects: 0, technologies: 0, experience: 0 });

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
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        setStats({
          projects: Math.min(Math.floor((50 * step) / steps), 50),
          technologies: Math.min(Math.floor((15 * step) / steps), 15),
          experience: Math.min(Math.floor((3 * step) / steps), 3)
        });

        if (step >= steps) clearInterval(timer);
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const highlights = [
    {
      icon: <Code2 size={32} />,
      title: 'Full-Stack Development',
      description: 'Expert in modern web technologies from React to backend APIs'
    },
    {
      icon: <Palette size={32} />,
      title: 'UI/UX Engineering',
      description: 'Creating beautiful, responsive interfaces with Tailwind & Bootstrap'
    },
    {
      icon: <Database size={32} />,
      title: 'Database Architecture',
      description: 'Proficient in SQL, NoSQL, MongoDB, Firebase, and Oracle'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Data Science',
      description: 'Python-based data analysis, visualization, and insights'
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-32 px-6 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#8b5cf6]/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className={`space-y-8 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}>
            <div className="space-y-4">
              <h2 className="font-['Space_Grotesk'] text-5xl md:text-6xl font-bold">
                About <span className="text-[#8b5cf6]">Me</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa]"></div>
            </div>

            <p className="text-lg text-[#9ca3af] leading-relaxed">
              I'm a passionate computer scientist with a strong foundation in software development, 
              front-end engineering, and data science. My expertise spans across modern frameworks, 
              databases, and Python-based analytics.
            </p>

            <p className="text-lg text-[#9ca3af] leading-relaxed">
              I thrive on building exceptional digital experiences that combine technical excellence 
              with beautiful design. Whether it's crafting responsive UIs, architecting databases, 
              or analyzing complex datasets, I bring creativity and precision to every project.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-[#8b5cf6] font-['Space_Grotesk']">{stats.projects}+</div>
                <div className="text-sm text-[#9ca3af]">Projects</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-[#8b5cf6] font-['Space_Grotesk']">{stats.technologies}+</div>
                <div className="text-sm text-[#9ca3af]">Technologies</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-[#8b5cf6] font-['Space_Grotesk']">{stats.experience}+</div>
                <div className="text-sm text-[#9ca3af]">Years Exp</div>
              </div>
            </div>
          </div>

          {/* Right Side - Highlights Grid */}
          <div className={`grid grid-cols-2 gap-6 transition-all duration-1000 delay-300 transform ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}>
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-6 border border-[#27272a] rounded-xl hover:border-[#8b5cf6] transition-all duration-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] hover:-translate-y-2"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-[#8b5cf6] mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-[#a78bfa] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#9ca3af] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
