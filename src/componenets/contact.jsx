import React, { useState } from "react";
import "../componenets/contact.css";

export default function Contact() {
  const [activeForm, setActiveForm] = useState("query");
  const [query, setQuery] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });
  const [website, setWebsite] = useState({
    name: "",
    email: "",
    phone: "",
    profession: "",
    technology: "",
    time: "",
    message: "",
  });

  // Validation helpers
  const isQueryValid =
    query.name &&
    query.email.includes("@") &&
    query.contact &&
    query.message;
  const isWebsiteValid =
    website.name &&
    website.email.includes("@") &&
    website.phone &&
    website.profession &&
    website.technology &&
    website.time;

  // Handlers
  function handleQueryChange(e) {
    setQuery({ ...query, [e.target.name]: e.target.value });
  }
  function handleWebsiteChange(e) {
    setWebsite({ ...website, [e.target.name]: e.target.value });
  }

  async function handleQuerySubmit(e) {
    e.preventDefault();
    if (!isQueryValid) return;

    const formData = new FormData();
    formData.append('access_key', process.env.REACT_APP_WEB3FORMS_ACCESS_KEY);
    formData.append('subject', 'New Client Query from Portfolio');
    formData.append('name', query.name);
    formData.append('email', query.email);
    formData.append('phone', query.contact);
    formData.append('message', query.message);
    formData.append('from_name', 'Portfolio Contact Form');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        alert('Query submitted successfully!');
        setQuery({ name: "", email: "", contact: "", message: "" });
      } else {
        alert('Failed to submit query. Please try again.');
      }
    } catch (error) {
      alert('Error submitting query. Please try again.');
    }
  }

  async function handleWebsiteSubmit(e) {
    e.preventDefault();
    if (!isWebsiteValid) return;

    const formData = new FormData();
    formData.append('access_key', process.env.REACT_APP_WEB3FORMS_ACCESS_KEY);
    formData.append('subject', 'New Website Request from Portfolio');
    formData.append('name', website.name);
    formData.append('email', website.email);
    formData.append('phone', website.phone);
    formData.append('profession', website.profession);
    formData.append('technology', website.technology);
    formData.append('timeframe', website.time);
    formData.append('message', website.message || 'No additional message');
    formData.append('from_name', 'Website Request');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        alert('Website request submitted successfully!');
        setWebsite({
          name: "",
          email: "",
          phone: "",
          profession: "",
          technology: "",
          time: "",
          message: "",
        });
      } else {
        alert('Failed to submit request. Please try again.');
      }
    } catch (error) {
      alert('Error submitting request. Please try again.');
    }
  }

  return (
    <div className="contact-main">
      <h1 className="contact-title">Contact Us</h1>
      <div className="contact-toggle">
        <button
          className={activeForm === "query" ? "active" : ""}
          onClick={() => setActiveForm("query")}
        >
          Client Query
        </button>
        <button
          className={activeForm === "website" ? "active" : ""}
          onClick={() => setActiveForm("website")}
        >
          Need a Website
        </button>
      </div>
      <div className="contact-card-grid">
        {activeForm === "query" && (
          <form
            className="contact-card animate-in"
            onSubmit={handleQuerySubmit}
            autoComplete="off"
          >
            <h2>Have a Query?</h2>
            <div className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name*"
                value={query.name}
                onChange={handleQueryChange}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email*"
                value={query.email}
                onChange={handleQueryChange}
                required
                pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                title="Please enter a valid email"
              />
            </div>
            <div className="input-group">
              <input
                type="tel"
                name="contact"
                placeholder="Contact Number*"
                value={query.contact}
                onChange={handleQueryChange}
                required
              />
            </div>
            <div className="input-group">
              <textarea
                name="message"
                placeholder="Your Message*"
                value={query.message}
                onChange={handleQueryChange}
                required
                rows={3}
              />
            </div>
            <button
              type="submit"
              className="contact-btn"
              disabled={!isQueryValid}
            >
              Send Query
            </button>
          </form>
        )}
        {activeForm === "website" && (
          <form
            className="contact-card animate-in"
            onSubmit={handleWebsiteSubmit}
            autoComplete="off"
          >
            <h2>Need a Website?</h2>
            <div className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name*"
                value={website.name}
                onChange={handleWebsiteChange}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email*"
                value={website.email}
                onChange={handleWebsiteChange}
                required
                pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                title="Please enter a valid email"
              />
            </div>
            <div className="input-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number*"
                value={website.phone}
                onChange={handleWebsiteChange}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                name="profession"
                placeholder="Your Profession*"
                value={website.profession}
                onChange={handleWebsiteChange}
                required
              />
            </div>
            <div className="input-group">
              <label className="input-label">Technology*</label>
              <select
                name="technology"
                value={website.technology}
                onChange={handleWebsiteChange}
                required
              >
                <option value="">Select Technology</option>
                <option value="React">React</option>
                <option value="Angular">Angular</option>
                {/* <option value="Vue.js">Vue.js</option>
                <option value="Next.js">Next.js</option>
                <option value="WordPress">WordPress</option> */}
                <option value="HTML/CSS/JS">HTML/CSS/JS</option>
                <option value="No Preference">No Preference</option>
              </select>
            </div>
            <div className="input-group">
              <label className="input-label">Time Frame*</label>
              <select
                name="time"
                value={website.time}
                onChange={handleWebsiteChange}
                required
              >
                <option value="">Select Timeline</option>
                <option value="1 week">1 week (Rush)</option>
                <option value="2 weeks">2 weeks</option>
                <option value="1 month">1 month</option>
                {/* <option value="2-3 months">2-3 months</option>
                <option value="3+ months">3+ months</option> */}
                <option value="No time constraints">No time constraints</option>
              </select>
            </div>
            <div className="input-group">
              <textarea
                name="message"
                placeholder="Message (optional)"
                value={website.message}
                onChange={handleWebsiteChange}
                rows={3}
              />
            </div>
            <button
              type="submit"
              className="contact-btn"
              disabled={!isWebsiteValid}
            >
              Request Website
            </button>
          </form>
        )}
      </div>
    </div>
  );
}