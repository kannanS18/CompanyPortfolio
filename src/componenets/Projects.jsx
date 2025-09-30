import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";

export default function Projects() {
  const timelineRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [flippedCards, setFlippedCards] = useState({});

  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description: "Modern e-commerce platform with product categories, shopping cart, and user authentication. Features baked goods section with responsive design.",
      tech: ["React", "CSS3", "JavaScript", "Responsive Design"],
      status: "Completed",
      date: "2024",
      color: "#4CAF50",
      url: "https://ecommerece-website-ivory.vercel.app/home"
    },
    {
      id: 2,
      title: "HridTech Internship Landing",
      description: "Professional landing page for internship opportunities with contact forms and company information display.",
      tech: ["HTML", "CSS", "JavaScript", "PHP"],
      status: "Completed",
      date: "2024",
      color: "#2196F3",
      url: "https://shanthiitsolution.com/internship/kannan/hridtech/Internship/"
    },
    {
      id: 3,
      title: "Trust Organization Website",
      description: "Non-profit organization website with donation system and volunteer management. Clean design with social impact focus.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      status: "Completed",
      date: "2024",
      color: "#FF9800",
      url: "https://shanthiitsolution.com/internship/kannan/trust/"
    },
    {
      id: 4,
      title: "HridTech Recruitment Landing",
      description: "Professional recruitment landing page with job listings and contact information for potential candidates.",
      tech: ["HTML", "CSS", "JavaScript", "Database"],
      status: "Completed",
      date: "2024",
      color: "#9C27B0",
      url: "https://shanthiitsolution.com/internship/kannan/hridtech/Recruitment/"
    },
    {
      id: 5,
      title: "Personal Portfolio",
      description: "Professional portfolio website showcasing skills, projects, and experience with modern design and smooth animations.",
      tech: ["HTML", "CSS", "JavaScript", "Animations"],
      status: "Completed",
      date: "2024",
      color: "#F44336",
      url: "https://shanthiitsolution.com/internship/kannan/sit_portfolio/"
    },
    {
      id: 6,
      title: "Saravana Portfolio",
      description: "Professional portfolio website showcasing skills, projects, and experience with modern design and smooth animations.",
      tech: ["HTML", "CSS", "JavaScript", "Animations"],
      status: "Completed",
      date: "2024",
      color: "#673AB7",
      url: "https://saravana2745.github.io/portfolio/"
    },
    {
      id: 7,
      title: "Cafe Website",
      description: "Modern cafe website with menu display, online ordering system, and responsive design for food service business.",
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      status: "Completed",
      date: "2024",
      color: "#795548",
      url: "https://saravana2745.github.io/Cafe-website/"
    },
    {
      id: 8,
      title: "E-Commerce Textile",
      description: "Textile e-commerce platform with product catalog, shopping cart, and user-friendly interface for clothing business.",
      tech: ["HTML", "CSS", "JavaScript", "E-commerce"],
      status: "Completed",
      date: "2024",
      color: "#607D8B",
      url: "https://saravana2745.github.io/E-commerce-textile/"
    },
    {
      id: 9,
      title: "Gym Website",
      description: "Fitness center website with membership plans, trainer profiles, and class schedules for gym management.",
      tech: ["HTML", "CSS", "JavaScript", "PHP"],
      status: "Completed",
      date: "2024",
      color: "#FF5722",
      url: "https://shanthiitsolution.com/internship/saravanasanjay/gym/gym/"
    }
  ];

  const handleCardClick = (cardId) => {
    setFlippedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      projectCards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="timeline-hero">
        <div className="hero-content">
          <h1 className="gradient-text">Our Project Journey</h1>
          <p>Showcasing our development expertise through innovative solutions</p>
          <div className="timeline-stats">
            <div className="stat-item">
              <span className="stat-number">9+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2024</span>
              <span className="stat-label">Year Active</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="projects-grid-section">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card animate"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="project-icon">
                <div 
                  style={{
                    width: '90%',
                    height: '180px',
                    background: `linear-gradient(135deg, ${project.color}, ${project.color}80)`,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '2rem',
                    fontWeight: 'bold'
                  }}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
              <div className="project-details">
                <p className="project-date">{project.date}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-tags">
                  {project.tech.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
                <a 
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="explore-btn"
                >
                  Explore Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}