import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Deskfactors Inc.",
      location: "Bangalore, India",
      period: "Mar 2023 - July 2023",
      description: [
        "Led the Android platform development supervising 5 engineers, sprint planning, code reviews and impact analysis.",
        "Redesigned and incorporated MVVM architecture in the codebase which enhanced code maintenance and stability.",
        "Led development of helpdesk integrated with Whatsapp/SMS which promoted faster onboarding of potential clients."
      ],
      technologies: ["Android", "Java", "Kotlin", "NoSQL", "MongoDB", "XMPP"]
    }
    
  ];

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <div className="experience-title">
                  <h3>{exp.title}</h3>
                  <h4>{exp.company}</h4>
                </div>
                <div className="experience-meta">
                  <div className="experience-period">
                    <FaCalendarAlt />
                    <span>{exp.period}</span>
                  </div>
                  <div className="experience-location">
                    <FaMapMarkerAlt />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="experience-content">
                <ul className="experience-description">
                  {exp.description.map((desc, descIndex) => (
                    <li key={descIndex}>{desc}</li>
                  ))}
                </ul>
                
                <div className="experience-technologies">
                  <h5>Technologies Used:</h5>
                  <div className="tech-tags">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
