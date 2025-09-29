import React, { useState } from "react";
import "../componenets/contact.css"; // Or create a new contact.css if you prefer

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
    technology: "React",
    time: "2 weeks",
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

  function handleQuerySubmit(e) {
    e.preventDefault();
    if (isQueryValid) {
      alert("Query submitted!");
      setQuery({ name: "", email: "", contact: "", message: "" });
    }
  }
  function handleWebsiteSubmit(e) {
    e.preventDefault();
    if (isWebsiteValid) {
      alert("Website request submitted!");
      setWebsite({
        name: "",
        email: "",
        phone: "",
        profession: "",
        technology: "React",
        time: "2 weeks",
        message: "",
      });
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
                <option value="React">React</option>
                <option value="Angular">Angular</option>
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
                <option value="2 weeks">2 weeks</option>
                <option value="4 weeks">4 weeks</option>
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