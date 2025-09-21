import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import AnimatedTitles from './AnimatedTitles';
import { MY_NAME } from '../constants';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-code">
            <span className="code-symbol">&lt;</span>
            <span className="code-tag">developer</span>
            <span className="code-symbol">&gt;</span>
          </div>
          <h1>Hi, I'm {MY_NAME}</h1>
          <p className="hero-subtitle">
            <span className="animated-titles">
              <AnimatedTitles
                titles={[
                  "Software Engineer",
                  "Product Developer",
                  "AI Enthusiast"
                ]}
                interval={2000}
              />
            </span>
          </p>
          <p className="hero-description">From Code to Impact: Engineering Scalable, Secure, and AI-Driven Solutions</p>
          <div className="hero-code">
            <span className="code-symbol">&lt;/</span>
            <span className="code-tag">developer</span>
            <span className="code-symbol">&gt;</span>
          </div>
          
          <div className="hero-buttons">
          <button 
              className="btn" 
              onClick={() => scrollToSection('experience')}
            >
              Experience
            </button>
            <button 
              className="btn" 
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </button>
            <button 
              className="btn btn-outline"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </button>
          </div>

          <div className="hero-social">
            <a href="https://github.com/{GITHUB_PROFILE_NAME}" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/{LINKEDIN_PROFILE_NAME}" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:{MY_EMAIL}">
              <FaEnvelope />
            </a>
            <a href="/resume.pdf" download>
              <FaDownload />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
