import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaCode } from 'react-icons/fa';
import { MY_EMAIL, PHONE_NUMBER, LINKEDIN_PROFILE_NAME, GITHUB_PROFILE_NAME, LEETCODE_PROFILE_NAME } from '../constants';
import emailjs from '@emailjs/browser';

const Contact = () => {
  // EmailJS configuration - Using environment variables for security
  const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Initialize EmailJS with your public key
      emailjs.init(EMAILJS_PUBLIC_KEY);

      // Prepare template parameters - these variable names must match your EmailJS template
      const templateParams = {
        from_name: formData.name,        // {{from_name}} in template
        from_email: formData.email,      // {{from_email}} in template  
        subject: formData.subject,       // {{subject}} in template
        message: formData.message,       // {{message}} in template
        to_email: MY_EMAIL,              // {{to_email}} in template (optional)
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      console.log('Email sent successfully:', response);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: MY_EMAIL,
      link: `mailto:${MY_EMAIL}`
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: PHONE_NUMBER,
      link: `tel:${PHONE_NUMBER}`
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "College Station, TX",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      url: `https://www.linkedin.com/in/${LINKEDIN_PROFILE_NAME}/`
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
      url: `https://github.com/${GITHUB_PROFILE_NAME}`
    },
    {
      icon: <FaCode />,
      name: "LeetCode",
      url: `https://leetcode.com/${LEETCODE_PROFILE_NAME}`
    }
  ];

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in new opportunities and exciting projects!
            </p>
            
            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-text">
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link}>{info.value}</a>
                    ) : (
                      <span>{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h3>Send Me a Message</h3>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="alert alert-success">
                Thank you for your message! I'll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="alert alert-error">
                Sorry, there was an error sending your message. Please try again or contact me directly.
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
