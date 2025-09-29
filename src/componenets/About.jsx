import React from "react";
import "./About.css";

export default function About({ onNavigate }) {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h1>About Us</h1>
          <p>Meet the passionate developers behind your next project</p>
        </div>
        
        <div className="team-grid">
          <div className="team-member">
            <div className="member-image">
              <img src="/sar.jpg" alt="Saravana Sanjhay" />
            </div>
            <div className="member-info">
              <h3>Saravana Sanjhay.M</h3>
              <span className="role">Full Stack Developer</span>
              <p>
                A dedicated full stack developer specializing in modern web applications. 
                Expert in Angular, JavaScript, and the MEAN stack, delivering scalable and user-friendly solutions for businesses.
              </p>
              <div className="skills">
                <span>Angular</span>
                <span>MEAN Stack</span>
                <span>JavaScript</span>
                <span>Node.js</span>
              </div>
            </div>
          </div>

          <div className="team-member">
            <div className="member-image">
              <img src="/kan.jpg" alt="Kannan" />
            </div>
            <div className="member-info">
              <h3>Kannan</h3>
              <span className="role">MERN Stack Developer</span>
              <p>
                A passionate full-stack developer with expertise in modern web technologies. 
                Specializing in the MERN stack, creating dynamic web applications with seamless user experiences and robust backends.
              </p>
              <div className="skills">
                <span>MERN Stack</span>
                <span>React</span>
                <span>MongoDB</span>
                <span>Express.js</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about-footer">
          <h2>What We Build</h2>
          <p className="services-intro">Get a glimpse of the digital solutions we create</p>
          <div className="approach-grid">
            <div className="approach-item">
              <div className="service-icon">🌐</div>
              <h4>Web Applications</h4>
              <p>Full-stack web apps using MERN & MEAN stacks with modern UI/UX design</p>
            </div>
            <div className="approach-item">
              <div className="service-icon">📱</div>
              <h4>Responsive Websites</h4>
              <p>Mobile-first designs that work perfectly across all devices and browsers</p>
            </div>
            <div className="approach-item">
              <div className="service-icon">⚡</div>
              <h4>API Development</h4>
              <p>RESTful APIs and backend services for seamless data management</p>
            </div>
          </div>
          <div className="cta-section">
            <p>Want to see more of what we can do?</p>
            <button className="services-btn" onClick={() => onNavigate('services')}>Explore All Services</button>
          </div>
        </div>
      </div>
    </section>
  );
}