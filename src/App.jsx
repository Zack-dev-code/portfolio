import React from 'react';
import './App.css';
import heroImage from './assets/Zack.jpg';
//import project1 from './assets/projects/project1.jpg';
//import project2 from './assets/projects/project2.png';
//import project3 from './assets/projects/project3.jpeg';
// Import React Icons
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

function App() {
  return (
    <div className="portfolio-site">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">
          <div className="logo-square"></div>
          <span className="logo-text">Zack</span>
        </div>
        
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#page">Page</a>
          <a href="#contact">Contact</a>
          <button className="cta-button">Get Free Consultant</button>
        </div>
        
        <button className="mobile-menu-btn">
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="circle-decoration"></div>
          
          <div className="tagline">GET EVERY SINGLE SOLUTIONS.</div>
          
          <h1 className="hero-title">
            I'm Web Designer <br />
            Zack Omusugu
          </h1>
          
          <p className="hero-description">
          As a skilled web designer and graphic design expert, I specialize in creating visually stunning and user-friendly websites. With a strong foundation in both design principles and user experience, I bring a unique blend of creativity and technical expertise to each project. I am proficient in the latest design software and web technologies, ensuring that my designs not only look great but also function seamlessly across all devices.
          </p>
          
          <div className="hero-buttons">
            <button className="primary-button">Learn More</button>
            <button className="secondary-button">Hire Me</button>
          </div>
        </div>
        
        <div className="hero-image">
          <img 
            src={heroImage} 
            alt="Designer portrait" 
          />
        </div>
      </section>
      
      {/* Services Section */}
      <section className="services-section" id="services">
        <div className="section-header">
          <h2 className="section-title">My Services</h2>
          <p className="section-description">
            Providing high-quality web solutions tailored to your needs
          </p>
        </div>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon"></div>
            <h3 className="service-title">Web Design</h3>
            <p className="service-description">
              Crafting visually stunning and user-friendly websites to enhance your online presence.
            </p>
          </div>
          
          <div className="service-card">
            <div className="service-icon"></div>
            <h3 className="service-title">UI/UX Design</h3>
            <p className="service-description">
              Designing intuitive and engaging user experiences for web and mobile applications.
            </p>
          </div>
          
          <div className="service-card">
            <div className="service-icon"></div>
            <h3 className="service-title">Branding</h3>
            <p className="service-description">
              Building strong and memorable brand identities that resonate with your audience.
            </p>
          </div>
        </div>
      </section>
      
      

      {/* Portfolio section */}
      <section className="portfolio-section" id="portfolio">
        <div className="section-header">
          <h2 className="section-title">My Portfolio</h2>
          <p className="section-description">
            Check out some of my recent works
          </p>
        </div>
        
        <div className="portfolio-grid">
          <div className="portfolio-item">
            <div className="portfolio-image" style={{ backgroundImage: `url('https://via.placeholder.com/300')` }}></div>
            <div className="portfolio-content">
              <h3 className="portfolio-title">E-Commerce Website</h3>
              <p className="portfolio-category">Web Design / Development</p>
            </div>
          </div>
          
          <div className="portfolio-item">
            <div className="portfolio-image" style={{ backgroundImage: `url('https://via.placeholder.com/300')`  }}></div>
            <div className="portfolio-content">
              <h3 className="portfolio-title">Portfolio Website</h3>
              <p className="portfolio-category">UI/UX Design</p>
            </div>
          </div>
          
          <div className="portfolio-item">
            <div className="portfolio-image" style={{ backgroundImage: `url('https://via.placeholder.com/300')`  }}></div>
            <div className="portfolio-content">
              <h3 className="portfolio-title">Brand Identity Design</h3>
              <p className="portfolio-category">Branding</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact section */}
      <section className="contact-section" id="contact">
        <div className="section-header">
          <h2 className="section-title">Contact Me</h2>
          <p className="section-description">
            Let's work together on your next project
          </p>
        </div>
        
        <div className="contact-container">
          <div className="contact-info">
            <h3 className="contact-info-title">Get in Touch</h3>
            <p className="contact-info-text">
              Have a project in mind? Let's discuss how I can help bring your ideas to life.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon"></div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p>zack@gladtech.org</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon"></div>
                <div className="contact-text">
                  <h4>Phone</h4>
                  <p>+254(792) 83-2297</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon"></div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p>Nairobi Kenya, </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <form>
              <div className="form-row">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
              </div>
              <input type="text" placeholder="Subject" />
              <textarea rows="5" placeholder="Your Message"></textarea>
              <button type="submit" className="primary-button">Send Message</button>
            </form>
          </div>
        </div>
      </section>
      
      

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-column">
            <div className="footer-logo">
              <div className="logo-square"></div>
              <span className="logo-text">PORTFOLIO</span>
            </div>
            <p>
              Modern portfolio website for creative professionals.
            </p>
          </div>
          
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Services</h3>
            <ul className="footer-links">
              <li><a href="#web-design">Web Design</a></li>
              <li><a href="#ui-ux">UI/UX Design</a></li>
              <li><a href="#branding">Branding</a></li>
              <li><a href="#illustration">Illustration</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Follow Me</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com/omusugu.zakayo" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaFacebookF />
              </a>
              <a href="https://x.com/ZOmusugu" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaTwitter />
              </a>
              <a href="https://www.linkedin.com/in/zakayo-omusugu/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedinIn />
              </a>
              <a href="https://www.instagram.com/zack_omusugu/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
