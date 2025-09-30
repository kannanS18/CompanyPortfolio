import React, { useState, useEffect } from 'react'
import Preloader from './componenets/Preloader'
import Nav from './componenets/nav'
import Home from './componenets/home'
import About from './componenets/About'
import Projects from './componenets/Projects'
import Services from './componenets/services'
import Contact from './componenets/contact'
export default function App() {
  const [activeSection, setActiveSection] = useState(() => {
    const path = window.location.pathname.slice(1) || 'home';
    return path;
  });

  useEffect(() => {
    window.history.pushState(null, '', `/${activeSection}`);
  }, [activeSection]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.slice(1) || 'home';
      setActiveSection(path);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const renderSection = () => {
    switch(activeSection) {
      case 'home': return <Home onNavigate={setActiveSection} />;
      case 'about': return <About onNavigate={setActiveSection} />;
      case 'projects': return <Projects />;
      case 'services': return <Services />;
      case 'contact': return <Contact/>;
      default: return <Home onNavigate={setActiveSection} />;
    }
  };

  return (
    <div>
      <Preloader />
      <Nav activeSection={activeSection} onNavigate={setActiveSection} />
      {renderSection()}
    </div>
  )
}