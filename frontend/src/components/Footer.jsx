import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050508] border-t border-[#27272a] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-3xl font-bold font-['Space_Grotesk'] tracking-tight">
              <span className="text-white">IKQ</span>
              <span className="text-[#8b5cf6]">.</span>
            </div>
            <p className="text-[#9ca3af] leading-relaxed">
              Computer Scientist crafting exceptional digital experiences with clean code and creative design.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-[#9ca3af] hover:text-[#8b5cf6] transition-colors duration-300 inline-block hover:translate-x-1"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-[#27272a] rounded-lg hover:border-[#8b5cf6] hover:bg-[#8b5cf6]/10 transition-all duration-300 group"
              >
                <Github size={24} className="text-[#9ca3af] group-hover:text-[#8b5cf6] transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-[#27272a] rounded-lg hover:border-[#8b5cf6] hover:bg-[#8b5cf6]/10 transition-all duration-300 group"
              >
                <Linkedin size={24} className="text-[#9ca3af] group-hover:text-[#8b5cf6] transition-colors" />
              </a>
              <a
                href="mailto:ilsa@example.com"
                className="p-3 border border-[#27272a] rounded-lg hover:border-[#8b5cf6] hover:bg-[#8b5cf6]/10 transition-all duration-300 group"
              >
                <Mail size={24} className="text-[#9ca3af] group-hover:text-[#8b5cf6] transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#27272a] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#9ca3af] text-sm flex items-center gap-1">
            © {currentYear} ILSA KHURSHID QURESHI. Made with <Heart size={16} className="text-[#8b5cf6] animate-pulse" /> and code.
          </p>
          
          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="group p-3 border border-[#27272a] rounded-lg hover:border-[#8b5cf6] hover:bg-[#8b5cf6]/10 transition-all duration-300"
          >
            <ArrowUp size={20} className="text-[#9ca3af] group-hover:text-[#8b5cf6] group-hover:-translate-y-1 transition-all" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
