import React from 'react';
import { 
  FaReact, 
  FaJs, 
  FaNodeJs, 
  FaPython, 
  FaHtml5, 
  FaCss3Alt, 
  FaKotlin,
  FaJavaScript,
  FaCpp,
  FaPhp,
  FaJava,
  FaGitAlt, 
  FaDocker,
  FaAws,
  FaDatabase
} from 'react-icons/fa';
import { SiMongodb, SiPostgresql, SiExpress, SiRedux } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Java", icon: <FaJava />, level: 95 },
        { name: "Kotlin", icon: <FaJava />, level: 90 },
        { name: "PHP", icon: <FaJava />, level: 85 },
        { name: "JavaScript", icon: <FaJava />, level: 85 },
        { name: "Python", icon: <FaJava />, level: 85 },
        { name: "C++", icon: <FaJava />, level: 80 },
        { name: "C", icon: <FaJava />, level: 75 },
      ]
    },
    // {
    //   title: "Backend",
    //   skills: [
    //     { name: "Node.js", icon: <FaNodeJs />, level: 85 },
    //     { name: "Express", icon: <SiExpress />, level: 80 },
    //     { name: "Python", icon: <FaPython />, level: 75 },
    //     { name: "MongoDB", icon: <SiMongodb />, level: 80 },
    //     { name: "PostgreSQL", icon: <SiPostgresql />, level: 75 }
    //   ]
    // },
    // {
    //   title: "Tools & Technologies",
    //   skills: [
    //     { name: "Git", icon: <FaGitAlt />, level: 85 },
    //     { name: "Docker", icon: <FaDocker />, level: 70 },
    //     { name: "AWS", icon: <FaAws />, level: 65 },
    //     { name: "Database Design", icon: <FaDatabase />, level: 80 }
    //   ]
    // }
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        
        <div className="skills-content">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-icon">{skill.icon}</div>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
