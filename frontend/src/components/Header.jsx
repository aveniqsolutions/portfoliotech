import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

  const scrollToSection = (id) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-[#27272a]' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="text-2xl font-bold font-['Space_Grotesk'] tracking-tight">
          <span className="text-white">IKQ</span>
          <span className="text-[#8b5cf6]">.</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => scrollToSection(item)}
                className="text-[#9ca3af] hover:text-[#8b5cf6] transition-colors duration-300 font-medium relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8b5cf6] group-hover:w-full transition-all duration-300"></span>
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white p-2 hover:text-[#8b5cf6] transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-[#27272a] transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <ul className="px-6 py-4 space-y-4">
          {navItems.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => scrollToSection(item)}
                className="text-[#9ca3af] hover:text-[#8b5cf6] transition-colors duration-300 font-medium block w-full text-left"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
