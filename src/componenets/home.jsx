import React, { useEffect, useState } from "react";
import "./home.css";

const flipWords = ["Web", "React", "Angular", "Frontend", "Fullstack"];

export default function Home({ onNavigate }) {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % flipWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="home-section" id="home">
      <div className="home-images">
        <img src="/sar.jpg" alt="Me" className="home-img" />
        <img src="/kan.jpg" alt="Partner" className="home-img" />
      </div>
      <div className="home-overlay">
        <h1>
          Skilled&nbsp;
          <span className="flip-container">
            <span className="flip-word" key={wordIndex}>
              {flipWords[wordIndex]}
            </span>
          </span>
          &nbsp;Freelancers
        </h1>
        <p>
          We create functional websites and web applications for your business needs.<br />
          <span className="highlight">Clean Code • Good Design • Fair Pricing</span> - Let's work together!
        </p>
        <div className="cta-buttons">
          <button className="btn-primary" onClick={() => onNavigate('contact')}>Get Started</button>
          <button className="btn-secondary" onClick={() => onNavigate('projects')}>View Portfolio</button>
        </div>
      </div>
    </section>
  );
}