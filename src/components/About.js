import React from 'react';
import { FaCode, FaRocket, FaUsers, FaLightbulb, FaBrain, FaGraduationCap, FaHandshake, FaPuzzlePiece } from 'react-icons/fa';

const About = () => {
  const interests = [
    {
      icon: <FaCode />,
      title: "Software Engineering",
      description: "Building scalable applications and solving complex technical challenges"
    },
    {
      icon: <FaRocket />,
      title: "Product Development",
      description: "Creating innovative solutions that make a real impact on users"
    },
    {
      icon: <FaBrain />,
      title: "AI Enthusiast",
      description: "Exploring machine learning and AI to build intelligent systems"
    },
    {
      icon: <FaGraduationCap />,
      title: "Continuous Learning",
      description: "Always staying updated with latest technologies and best practices"
    },
    {
      icon: <FaHandshake />,
      title: "Collaboration",
      description: "Working effectively in teams to achieve common goals"
    }, 
    {
      icon: <FaPuzzlePiece />,
      title: "Problem Solver",
      description: "Breaking down complex problems into manageable solutions"
    }, 

  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a passionate software engineer with a strong foundation in Software Engineering, Product Development 
              Agile Methodologies, Software Design 
              and a keen interest in emerging technologies. With experience in building scalable 
              applications and working with modern frameworks, I enjoy tackling complex problems 
              and creating solutions that make a real impact.
            </p>
            <p>
            I am a recent graduate with a Master's degree in Computer Science from Texas A&M University, 
              where I developed a strong foundation in Software Engineering, Machine Learning and GenAI Technologies. 
              My academic journey has equipped me with deep knowledge in algorithms, data structures, and modern development practices.
            </p>
            <p>
             In my professional and academic life, I have explored various domains including mobile and web development, 
              AI/ML, and product development. This experience has shaped my approach to 
              tackling complex problems and develop solutions which are scalable and secure.
            </p>
            <p>
              I like problem solving - and during my free time use the Leetcode platform to develop on my algorithmic 
              and problem solving skills. 
            </p>
          </div>

          <div className="about-interests">
            <div className="interests-grid">
              {interests.map((interest, index) => (
                <div key={index} className="interest-card">
                  <div className="card-inner">
                    <div className="card-front">
                      <div className="interest-icon">{interest.icon}</div>
                      <h4>{interest.title}</h4>
                    </div>
                    <div className="card-back">
                      <div className="interest-icon">{interest.icon}</div>
                      <p>{interest.description}</p>
                    </div>
                  </div>
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
