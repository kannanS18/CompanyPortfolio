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
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      const progress = Math.min(scrollY / (documentHeight - windowHeight), 1);
      setScrollProgress(progress);
      
      const projectsSection = document.querySelector('.projects-section-3d');
      if (projectsSection) {
        const sectionTop = projectsSection.offsetTop;
        const sectionHeight = projectsSection.offsetHeight;
        const scrollInSection = Math.max(0, scrollY - sectionTop);
        const sectionProgress = Math.min(scrollInSection / (sectionHeight - windowHeight), 1);
        
        const newActiveIndex = Math.min(Math.floor(sectionProgress * projects.length), projects.length - 1);
        setActiveIndex(newActiveIndex);
        
        const timelineItems = document.querySelectorAll(".project-card-3d");
        timelineItems.forEach((item, index) => {
          item.classList.remove("active");
          if (index <= newActiveIndex && scrollY > sectionTop - windowHeight / 2) {
            item.classList.add("active");
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [projects.length]);

  return (
    <section className="projects-section-3d">
      <div className="projects-container-3d">
        <div className="projects-header-3d">
          <h1>Our Project Journey</h1>
          <p>Experience our development timeline in 3D</p>
        </div>

        <div className="timeline-3d" ref={timelineRef}>
          <div className="timeline-track">
            <div 
              className="timeline-progress" 
              style={{ height: `${scrollProgress * 100}%` }}
            ></div>
            <div 
              className="timeline-orb" 
              style={{ 
                top: `${scrollProgress * 100}%`
              }}
            >
            </div>
          </div>

          <div className="projects-grid-3d">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`project-card-3d ${index % 2 === 0 ? "left" : "right"}`}
                style={{
                  '--project-color': project.color,
                  '--delay': `${index * 0.1}s`
                }}
              >
                <div className="card-3d-wrapper" onClick={() => handleCardClick(project.id)}>
                  <div className={`card-3d-inner ${flippedCards[project.id] ? 'flipped' : ''}`}>
                    <div className="card-front">
                      <div className="project-number">{String(index + 1).padStart(2, '0')}</div>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="tech-stack-3d">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="tech-tag-3d">{tech}</span>
                        ))}
                      </div>
                      <div className="mobile-project-footer">
                        <span className="mobile-status">{project.status}</span>
                        <button 
                          className="mobile-view-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.url, '_blank');
                          }}
                        >
                          View Project
                        </button>
                      </div>
                    </div>
                    <div className="card-back">
                      <div className="project-details">
                        <h4>Project Details</h4>
                        <div className="detail-item">
                          <span>Status:</span>
                          <span className={`status-3d ${project.status.toLowerCase().replace(' ', '-')}`}>
                            {project.status}
                          </span>
                        </div>
                        <div className="detail-item">
                          <span>Year:</span>
                          <span>{project.date}</span>
                        </div>
                        <button 
                          className="view-project-3d"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.url, '_blank');
                          }}
                        >
                          <span>View Project</span>
                          <div className="button-bg"></div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}