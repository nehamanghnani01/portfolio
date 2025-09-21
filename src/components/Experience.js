import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: "Software Applications Developer - Technology Services",
      company: "Computer Science Department, Texas A&M University",
      location: "College Station, TX",
      period: "Jun 2025 - Present",
      description: [
        "Engineered an enterprise solution to enable 254 Texas counties to securely manage and input plan details for TIDC.",
        "Led the development of the Family Protection Representation ID forms, actively iterating based on client feedback.",
        "Analyzed the legacy system database and implemented scripts for seamless data migration to the current system."
      ],
      technologies: ["PHP", "Laravel", "MVC", "Azure DevOps", "JavaScript", "HTML/CSS", "MySQL", "SQL Server"]
    }, 

    {
      title: "Student Technician - Software Development",
      company: "Computer Science Department, Texas A&M University",
      location: "College Station, TX",
      period: "Sep 2023 - Mar 2025",
      description: [
        "Built Chrome Extension to mask sensitive data when interacting with websites & remote models, enhancing privacy.",
        "Implemented Python scripts to evaluate model performance for on-device deployment, ensuring best LLM selection.",
        "Developed an AI system to detect & auto-fix code vulnerabilities, securing Top 7 at the AIxCC DARPA Challenge."
      ],
      technologies: ["Python","Local LLM Model Testing", "Ollama", "Chrome Extension", "LLM Evaluation Metrics", "Langchain", "Machine Learning", "C++"]
    }, 

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
      technologies: ["Android", "Kotlin", "Azure DevOps", "MVVM", "Impact Analysis", "NoSQL", "MongoDB", "XMPP"]
    }, 

    {
      title: "Software Engineer",
      company: "Deskfactors Inc.",
      location: "Bangalore, India",
      period: "Oct 2020 - Feb 2023",
      description: [
        "Implemented features- text & media messages, reply, forward, share, delete message in the BlueSecures platform.",
        "Engineered core business features and enhanced platform security with encryption at rest and encryption at transit.",
        "Enhanced the stability of the client-side XMPP connection for the instant messaging feature by handling streamerrors, reconnections, and adding API support which led to improved product reliability and client confidence.",
        "Developed WhatsApp and Text integration with the app which increased user adoption and interest by 3 times."
      ],
      technologies: ["Android", "Java", "Kotlin", "NoSQL", "MongoDB", "CouchDB", "XMPP", "Git"]
    }, 

    {
      title: "Software Developer Intern",
      company: "Deskfactors Inc.",
      location: "Bangalore, India",
      period: "Jan 2020 - July 2020",
      description: [
        "Designed 55 webpages for the IT Service Helpdesk to file employee grievances following ITIL framework and using HTML, CSS, JavaScript, PHP, Bootstrap, Ajax which reduced manual IT queries by 50%.",
        "Streamlined employee reimbursements using MS PowerPlatform. Mobile platform with PowerApps and automated workflows using PowerAutomate & Sharepoint which reduced load on the HR team for manual settlements by 60%."
      ],
      technologies: ["JavaScript", "HTML/CSS", "ITIL Framework", "Microsoft PowerPlatform", "Microsoft PowerBI", "Sharepoint"]
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
                  <h5>Technologies:</h5>
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
