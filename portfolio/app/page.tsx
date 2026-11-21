"use client";

import type { FormEvent } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#resume", label: "Resume" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const facts = [
  { title: "Location", text: "Davao City, Philippines" },
  { title: "Studying", text: "BS Information Technology" },
  { title: "Interests", text: "Gaming, web design, new tech" },
  { title: "Status", text: "Open to internships" },
];

const softSkills = [
  "Quick learner",
  "Problem solving",
  "Teamwork",
  "Attention to detail",
  "Time management",
];

const languages = ["English", "Filipino"];

const projects = [
  { title: "Project One", tags: ["HTML", "CSS"] },
  { title: "Project Two", tags: ["HTML", "JavaScript"] },
  { title: "Project Three", tags: ["HTML", "CSS", "JavaScript"] },
];

const GITHUB_URL = "https://github.com/siaabianx03";

export default function Home() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo"></div>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="home-section">
        <div className="hero-content">
          <p>Hello, I&apos;m</p>
          <h1>Sophia Bianca Licayan</h1>
          <h2>Web Developer &amp; Designer</h2>
          <p className="intro">
            I build simple, clean websites and web applications. Passionate
            about learning and creating.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn primary-btn">
              Contact Me
            </a>
            <a href="#projects" className="btn secondary-btn">
              View Work
            </a>
            <a href="#resume" className="btn secondary-btn">
              View Resume
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="circle-frame">SBL</div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <h2>About Me</h2>
        <div className="about-content">
          <p>
            Hi! I&apos;m Sophia Bianca Licayan, a student and aspiring BSIT
            graduate at Holy Cross of Davao College. I love gaming and learning
            new technologies. I work with HTML, CSS, and JavaScript, and I&apos;m
            currently exploring more about web development and design.
          </p>
          <p>
            My goal is to build projects that are simple, user-friendly, and
            helpful. I believe in learning by doing and continuously improving
            my skills.
          </p>

          <div className="about-facts">
            {facts.map((fact) => (
              <div className="fact" key={fact.title}>
                <h4>{fact.title}</h4>
                <p>{fact.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="resume-section">
        <h2>My Resume</h2>
        <p className="subtitle">
          A quick look at my education, skills, and experience
        </p>

        <div className="resume-content">
          {/* Summary */}
          <div className="resume-box resume-summary">
            <h3>Profile Summary</h3>
            <p>
              Motivated BSIT student with hands-on practice in front-end web
              development. Comfortable building responsive pages with HTML, CSS,
              and JavaScript, and eager to grow into full web applications. A
              fast learner who enjoys turning ideas into clean, usable
              interfaces.
            </p>
          </div>

          {/* Education & Experience */}
          <div className="resume-columns">
            <div className="resume-box">
              <h3>Education</h3>
              <div className="resume-item">
                <h4>BS in Information Technology</h4>
                <p>Holy Cross of Davao College</p>
                <p className="meta">[Start year] - Present</p>
                <ul>
                  <li>
                    Coursework in programming, web development, and information
                    systems
                  </li>
                  <li>
                    Building portfolio projects to practice what I learn in
                    class
                  </li>
                </ul>
              </div>
            </div>

            <div className="resume-box">
              <h3>Experience</h3>
              <div className="resume-item">
                <h4>Personal &amp; Academic Web Projects</h4>
                <p>Self-directed | Student</p>
                <p className="meta">[Year] - Present</p>
                <ul>
                  <li>
                    Designed and coded responsive websites with HTML, CSS, and
                    JavaScript
                  </li>
                  <li>Published code on GitHub and practiced version control</li>
                  <li>Built this portfolio from scratch</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="resume-box resume-summary">
            <h3>Soft Skills &amp; Languages</h3>
            <p className="label">Soft Skills</p>
            <div className="tags">
              {softSkills.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>

            <p className="label">Languages</p>
            <div className="tags">
              {languages.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </div>
          </div>

          {/* Put your resume PDF in /public and name it resume.pdf */}
          <div className="resume-download">
            <a href="/resume.pdf" className="btn primary-btn" download>
              Download Resume (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h2>My Projects</h2>
        <p className="subtitle">
          Here are 3 of my recent works - click to visit them on GitHub
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <h3>{project.title}</h3>
              <p>
                A short description of what this project does. Replace this with
                your own summary.
              </p>
              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View on GitHub &rarr;
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Contact Me</h2>
            <p>Phone: 09067709707</p>
            <p>
              Email:{" "}
              <a href="mailto:sophiabianca.licayan@hcdc.edu.ph">
                sophiabianca.licayan@hcdc.edu.ph
              </a>
            </p>
            <p>Location: Davao City</p>
            <p>
              GitHub:{" "}
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                github.com/siaabianx03
              </a>
            </p>
          </div>

          <div className="contact-form">
            <h2>Get in Touch</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Full Name" required />
              <input type="text" placeholder="Mobile Contact" required />
              <input type="email" placeholder="Enter email" required />
              <textarea placeholder="Your message" required />
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>


    </>
  );
}