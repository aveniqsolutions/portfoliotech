import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = ({ scrollY }) => {
  const [displayedRole, setDisplayedRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ['Computer Scientist', 'Front-End Developer', 'Data Science Enthusiast', 'UI/UX Craftsman'];

  useEffect(() => {
    let charIndex = 0;
    const currentRole = roles[roleIndex];
    const typingInterval = setInterval(() => {
      if (charIndex <= currentRole.length) {
        setDisplayedRole(currentRole.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 80);

    return () => clearInterval(typingInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#27272a 1px, transparent 1px), linear-gradient(90deg, #27272a 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          transform: `translateY(${scrollY * 0.5}px)`
        }}></div>
      </div>

      {/* Geometric Accent */}
      <div className="absolute top-20 right-10 w-96 h-96 border border-[#8b5cf6]/20 rotate-45 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 border border-[#a78bfa]/20 rotate-12"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 border border-[#8b5cf6]/30 rounded-full text-sm text-[#a78bfa] font-mono">
                &lt;developer /&gt;
              </div>
              
              <h1 className="font-['Space_Grotesk'] font-bold text-6xl md:text-7xl lg:text-8xl leading-none">
                <span className="block text-white">ILSA</span>
                <span className="block text-white">KHURSHID</span>
                <span className="block bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] bg-clip-text text-transparent">QURESHI</span>
              </h1>

              <div className="h-16 flex items-center">
                <p className="text-xl md:text-2xl text-[#9ca3af] font-mono">
                  {displayedRole}
                  <span className="animate-pulse text-[#8b5cf6]">|</span>
                </p>
              </div>
            </div>

            <p className="text-lg text-[#9ca3af] max-w-lg leading-relaxed">
              Crafting exceptional digital experiences with clean code, modern frameworks, and data-driven insights.
            </p>

            <div className="flex gap-4 pt-4">
              <a href="#contact" className="group relative px-8 py-4 bg-[#8b5cf6] text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]">
                <span className="relative z-10">Let's Connect</span>
                <div className="absolute inset-0 bg-[#a78bfa] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </a>
              
              <div className="flex gap-3">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-4 border border-[#27272a] rounded-lg hover:border-[#8b5cf6] hover:bg-[#8b5cf6]/10 transition-all duration-300">
                  <Github size={24} className="text-[#9ca3af] hover:text-[#8b5cf6] transition-colors" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-4 border border-[#27272a] rounded-lg hover:border-[#8b5cf6] hover:bg-[#8b5cf6]/10 transition-all duration-300">
                  <Linkedin size={24} className="text-[#9ca3af] hover:text-[#8b5cf6] transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Placeholder Avatar */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#8b5cf6] via-[#a78bfa] to-[#c4b5fd] p-[2px] animate-pulse">
                <div className="w-full h-full bg-[#0a0a0f] rounded-2xl"></div>
              </div>
              
              {/* Avatar Content */}
              <div className="absolute inset-4 rounded-xl bg-gradient-to-br from-[#1a1a2e] to-[#16213e] flex items-center justify-center overflow-hidden">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#a78bfa] flex items-center justify-center text-6xl font-bold text-white">
                    IKQ
                  </div>
                  <div className="text-[#9ca3af] font-mono text-sm">Photo Coming Soon</div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#8b5cf6]/20 rounded-lg rotate-12 animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 border-2 border-[#a78bfa] rounded-lg -rotate-12"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-[#8b5cf6]" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
