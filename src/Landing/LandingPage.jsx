import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <header className="navbar">
        <div className="logo">SQL Editor</div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="/editor">SQL Editor</a>
          <a href="https://github.com/AditiKulkarni9/sql-editor.git" target="_blank" rel="noopener noreferrer">GitHub</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-inner">
            <h1>Query with Power.</h1>
            <p>Your modern SQL Editor for fast, intuitive, and beautiful querying.</p>
            <div className="cta-buttons">
            <a href="/editor" className="btn primary">Open Editor</a>
            <a href="https://github.com/AditiKulkarni9/sql-editor.git" className="btn secondary" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
        </div>
        </section>
    </div>
  );
};

export default LandingPage;
