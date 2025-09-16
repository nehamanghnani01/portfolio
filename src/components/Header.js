import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MY_NAME } from '../constants';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="nav-logo" onClick={() => scrollToSection('home')}>
          {MY_NAME}
        </a>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#about" className="nav-link" onClick={() => scrollToSection('about')}>
            About
          </a>
          <a href="#skills" className="nav-link" onClick={() => scrollToSection('skills')}>
            Skills
          </a>
          <a href="#experience" className="nav-link" onClick={() => scrollToSection('experience')}>
            Experience
          </a>
          <a href="#projects" className="nav-link" onClick={() => scrollToSection('projects')}>
            Projects
          </a>
          <a href="#contact" className="nav-link" onClick={() => scrollToSection('contact')}>
            Contact
          </a>
        </div>

        <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Header;
