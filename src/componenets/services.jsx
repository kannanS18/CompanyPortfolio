import React, { useState } from "react";
import "./services.css";

function ServiceCard({ frontImg, title, desc, features, backTitle, backDesc }) {
  const [flip, setFlip] = useState(""); // '', 'top', 'right', 'bottom', 'left'

  // Mouse position logic for corner detection
  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const w = rect.width;
    const h = rect.height;
    if (y < h * 0.25 && x > w * 0.25 && x < w * 0.75) setFlip("top");
    else if (x > w * 0.75 && y > h * 0.25 && y < h * 0.75) setFlip("right");
    else if (y > h * 0.75 && x > w * 0.25 && x < w * 0.75) setFlip("bottom");
    else if (x < w * 0.25 && y > h * 0.25 && y < h * 0.75) setFlip("left");
    else setFlip("");
  }

  function handleMouseLeave() {
    setFlip("");
  }

  return (
    <div
      className={`glass-card ${flip ? `flip-${flip}` : ""}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="glass-card-inner">
        <div className="glass-card-front">
          <div className="glass-glare"></div>
          <img src={frontImg} alt={title} className="glass-card-img" />
          <h2>{title}</h2>
          <p>{desc}</p>
          <ul>
            {features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
        <div className="glass-card-back">
          <div className="glass-glare"></div>
          <h2>{backTitle}</h2>
          <p>{backDesc}</p>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <div className="services-new-main">
      <header className="services-new-hero">
        <h1>
          <span className="highlight">Our Creative Services</span>
        </h1>
        <p>
          We deliver stunning frontend and powerful backend solutions.<br />
          <span className="ux-note">Designed for every device. Crafted for every user.</span>
        </p>
      </header>
      <div className="glass-card-grid">
        <ServiceCard
          frontImg="./front.jpg"
          title="Frontend Development"
          desc="Responsive, fast, and interactive web apps using React, Angular, and modern CSS. We bring your brand to life with animations and pixel-perfect layouts."
          features={[
            "SPA & PWA Solutions",
            "Mobile-first Design",
            "3D & Motion Effects",
            "Performance Optimization",
          ]}
          backTitle="Why Choose Us?"
          backDesc="We create engaging interfaces with smooth transitions, accessibility, and blazing speed. Your users will love every interaction."
        />
        <ServiceCard
          frontImg="./back.jpg"
          title="Backend Development"
          desc="Robust, scalable, and secure APIs with Node.js, Express, and MongoDB. We handle data, integrations, and real-time features for your business."
          features={[
            "REST & GraphQL APIs",
            "Database Management",
            "Real-time Data",
            "Cloud Integration",
          ]}
          backTitle="Our Backend Power"
          backDesc="We build reliable, scalable systems with real-time features and seamless integrations. Your data is always secure and available."
        />
      </div>
    </div>
  );
}