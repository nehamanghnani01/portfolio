import React from 'react';
import { FaCode, FaRocket, FaUsers, FaLightbulb } from 'react-icons/fa';

const About = () => {
  const interests = [
    // {
    //   icon: <FaCode />,
    //   title: "Web Development",
    //   description: "Building responsive and interactive web applications using modern technologies"
    // },
    // {
    //   icon: <FaRocket />,
    //   title: "Innovation",
    //   description: "Always exploring new technologies and finding creative solutions to complex problems"
    // },
    // {
    //   icon: <FaUsers />,
    //   title: "Collaboration",
    //   description: "Enjoy working in teams and contributing to open-source projects"
    // },
    // {
    //   icon: <FaLightbulb />,
    //   title: "Problem Solving",
    //   description: "Passionate about breaking down complex challenges into manageable solutions"
    // }
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
           
          </div>

          <div className="about-interests">
            <h3>My Interests</h3>
            <div className="interests-grid">
              {interests.map((interest, index) => (
                <div key={index} className="interest-card">
                  <div className="interest-icon">{interest.icon}</div>
                  <h4>{interest.title}</h4>
                  <p>{interest.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
