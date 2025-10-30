import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'glass-effect shadow-lg shadow-accent/10' 
        : 'bg-transparent backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6 md:px-8">
        <a href="#home" className="font-bold text-xl sm:text-2xl tracking-wider text-accent hover:text-neon transition-all duration-300 transform hover:scale-110">
          Abir Chodha
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 lg:gap-8 text-sm font-medium uppercase tracking-wide">
          <a href="#home" className="relative text-text hover:text-accent transition-all duration-300 group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#about" className="relative text-text hover:text-accent transition-all duration-300 group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#skills" className="relative text-text hover:text-accent transition-all duration-300 group">
            Skills
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#projects" className="relative text-text hover:text-accent transition-all duration-300 group">
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#certifications" className="relative text-text hover:text-accent transition-all duration-300 group">
            Certifications
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#contact" className="relative text-text hover:text-accent transition-all duration-300 group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
          </a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 glass-effect rounded-lg hover:bg-accent hover:text-white transition-all duration-300"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-effect border-t border-border">
          <nav className="flex flex-col px-4 py-4 space-y-3">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-text hover:text-accent transition-all duration-300 py-2">
              Home
            </a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-text hover:text-accent transition-all duration-300 py-2">
              About
            </a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="text-text hover:text-accent transition-all duration-300 py-2">
              Skills
            </a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="text-text hover:text-accent transition-all duration-300 py-2">
              Projects
            </a>
            <a href="#certifications" onClick={() => setMobileMenuOpen(false)} className="text-text hover:text-accent transition-all duration-300 py-2">
              Certifications
            </a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-text hover:text-accent transition-all duration-300 py-2">
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
