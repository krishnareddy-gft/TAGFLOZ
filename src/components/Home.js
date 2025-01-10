import React from 'react';
import './Home.css';
import { Link as RouterLink } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>NextRFID</h1>
            <h2>Revolutionizing Asset Management</h2>
            <p>
              Leveraging cutting-edge RFID technology to transform inventory tracking
              and supply chain management. Our solutions provide real-time visibility
              and seamless integration for businesses of all sizes.
            </p>
          </div>
          <div className="hero-image">
            <img 
              src="/images/hero-rfid.jpg" 
              alt="RFID Technology"
            />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products-section">
        <h2>Our Products</h2>
        <div className="product-cards">
          <div className="product-card">
            <h3>RFID Reader</h3>
            <p>High-performance readers with extended range and accuracy.</p>
            <RouterLink to="/reader" className="learn-more">Learn More</RouterLink>
          </div>
          <div className="product-card">
            <h3>RFID Tags</h3>
            <p>Durable and reliable tags for various applications.</p>
            <RouterLink to="/tags" className="learn-more">Learn More</RouterLink>
          </div>
          <div className="product-card">
            <h3>RFID Printer</h3>
            <p>Industrial-grade printers for high-volume tag production.</p>
            <RouterLink to="/printer" className="learn-more">Learn More</RouterLink>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <h3>Asset Tracking</h3>
            <p>Real-time monitoring and management of your valuable assets.</p>
            <RouterLink to="/services/asset-tracking" className="learn-more">Learn More</RouterLink>
          </div>
          <div className="service-card">
            <h3>Inventory Tracking</h3>
            <p>Automated inventory management for improved efficiency.</p>
            <RouterLink to="/services/inventory-tracking" className="learn-more">Learn More</RouterLink>
          </div>
          <div className="service-card">
            <h3>Vehicle Identification</h3>
            <p>Smart vehicle access control and monitoring solutions.</p>
            <RouterLink to="/services/vehicle-identification" className="learn-more">Learn More</RouterLink>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="tech-section">
        <div className="section-header">
          <h2>Technologies</h2>
        </div>
        <div className="tech-scroll">
          <div className="tech-icons">
            <div className="tech-icon">
              <i className="devicon-java-plain colored"></i>
              <span>Java</span>
            </div>
            <div className="tech-icon">
              <i className="devicon-python-plain colored"></i>
              <span>Python</span>
            </div>
            <div className="tech-icon">
              <i className="devicon-react-original colored"></i>
              <span>React</span>
            </div>
            <div className="tech-icon">
              <i className="devicon-nodejs-plain colored"></i>
              <span>Node.js</span>
            </div>
            <div className="tech-icon">
              <i className="devicon-mongodb-plain colored"></i>
              <span>MongoDB</span>
            </div>
            <div className="tech-icon">
              <i className="devicon-docker-plain colored"></i>
              <span>Docker</span>
            </div>
            {/* Duplicate icons for continuous scroll effect */}
            <div className="tech-icon">
              <i className="devicon-java-plain colored"></i>
              <span>Java</span>
            </div>
            <div className="tech-icon">
              <i className="devicon-python-plain colored"></i>
              <span>Python</span>
            </div>
            <div className="tech-icon">
              <i className="devicon-react-original colored"></i>
              <span>React</span>
            </div>
            <div className="tech-icon">
              <i className="devicon-nodejs-plain colored"></i>
              <span>Node.js</span>
            </div>
            <div className="tech-icon">
              <i className="devicon-mongodb-plain colored"></i>
              <span>MongoDB</span>
            </div>
            <div className="tech-icon">
              <i className="devicon-docker-plain colored"></i>
              <span>Docker</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-decoration">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L50,100 Z" fill="rgba(81, 200, 239, 0.03)" />
          </svg>
        </div>
        <div className="section-header">
          <h2>Contact Us</h2>
          <p className="section-subtext">Get in touch with our expert team</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>Head Office</h3>
              <p>Level 32, 200 George St<br />Sydney NSW 2000</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h3>Email Us</h3>
              <p>info@nextrfid.com<br />support@nextrfid.com</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <h3>Call Us</h3>
              <p>+61 2 8000 0000<br />Monday - Friday, 9am - 5pm</p>
            </div>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
            </div>
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Your Message" rows="4" required></textarea>
            <button type="submit" className="submit-btn">
              Send Message
              <i className="fas fa-arrow-right"></i>
            </button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section company-info">
            <div className="footer-logo">
              <h3>NextRFID</h3>
              <p>Revolutionizing Asset Management</p>
            </div>
            <p className="company-details">
              ABN: 12 345 678 901<br />
              Est. 2024
            </p>
          </div>

          <div className="footer-section locations">
            <h4>Our Locations</h4>
            <div className="location-grid">
              <div className="location">
                <h5>NSW Office</h5>
                <p>Level 32, 200 George St<br />Sydney NSW 2000</p>
              </div>
              <div className="location">
                <h5>VIC Office</h5>
                <p>Level 18, 101 Collins St<br />Melbourne VIC 3000</p>
              </div>
              <div className="location">
                <h5>QLD Office</h5>
                <p>Level 21, 123 Eagle St<br />Brisbane QLD 4000</p>
              </div>
              <div className="location">
                <h5>WA Office</h5>
                <p>Level 15, 240 St Georges Tce<br />Perth WA 6000</p>
              </div>
            </div>
          </div>

          <div className="footer-section quick-links">
            <h4>Quick Links</h4>
            <div className="links-grid">
              <div>
                <h5>Products</h5>
                <ul>
                  <li><RouterLink to="/reader">RFID Reader</RouterLink></li>
                  <li><RouterLink to="/tags">RFID Tags</RouterLink></li>
                  <li><RouterLink to="/printer">RFID Printer</RouterLink></li>
                </ul>
              </div>
              <div>
                <h5>Services</h5>
                <ul>
                  <li><RouterLink to="/services/asset-tracking">Asset Tracking</RouterLink></li>
                  <li><RouterLink to="/services/inventory-tracking">Inventory Tracking</RouterLink></li>
                  <li><RouterLink to="/services/vehicle-identification">Vehicle Identification</RouterLink></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 NextRFID. All rights reserved.</p>
          <div className="footer-social">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home; 