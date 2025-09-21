import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "InvestWise",
      description: "Real-Estate Analytics Dashboard",
      image: "/images/invest-wise-image.png",
      technologies: ["ReactJS", "Node.js", "Fast API", "Chart.js", "LLM Chat - Groq API"],
      github: "https://github.com/contactpankaj/investwise",
      live: "",
      featured: true
    },

    {
      title: "Contract Management Platform",
      description: "CMS Platform for Brazos Valley Council of Govt.",
      image: "/images/brazos.jpg",
      technologies: ["Ruby On Rails", "JavaScript", "HTML/CSS", "Heroku"],
      github: "https://github.com/BVCOG-Contract-Management/BVGOG-Contract-Manager",
      live: "",
      featured: true
    },

    {
      title: "Job Hunter",
      description: "Web Platform to help job seekers get relevant job recommendations based on Skills/Experience",
      image: "images/job-hunter-logo.png",
      technologies: ["ReactJS", "Node.js", "HTML/CSS", "Machine Learning Frameworks", "LLM" ],
      github: "https://github.com/pi-sharan/JobHunter",
      live: "",
      featured: true
    },
    
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="featured-projects">
          {featuredProjects.map((project, index) => (
            <div key={index} className="project-card featured">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaGithub />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Projects;
