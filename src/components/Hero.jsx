import React from "react";
import heroImage from "../assets/hero-image.jpg"; // Replace with your actual image path

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Welcome to <span className="highlight">Sanvi’s Academy</span>
          </h1>
          <h2>Ace Your Exams & Learn Languages</h2>
          <p>
            Get top scores in globally recognized exams like IELTS, TOEFL, PTE,
            GRE, GMAT, SAT, Duolingo & more. Our experienced tutors conduct
            regular live classes to guide you towards success.
          </p>
          <a href="/contact" className="cta-button">
            Get Started
          </a>
        </div>

        <div className="hero-image">
          <img src={heroImage} alt="Online Coaching" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
