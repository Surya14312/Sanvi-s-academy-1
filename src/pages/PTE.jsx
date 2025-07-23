import React, { useEffect } from "react";
import pteImage from "../assets/pte-banner.jpg";
import { Link } from "react-router-dom";

function PTA() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pte-container">
      <h1>PTE Academic Online Coaching</h1>
      <div className="page-container">{/* all your page content */}</div>

      <div className="pte-intro">
        <img src={pteImage} alt="PTE Coaching" className="pte-img" />
        <p>
          <strong>The Sanvi’s Academy</strong> offers high-impact online
          coaching for the
          <strong> Pearson Test of English Academic (PTE Academic)</strong>. Our
          certified trainers guide you through{" "}
          <strong>Speaking, Writing, Reading, and Listening</strong> modules
          with interactive classes and mock exams.
        </p>
      </div>

      <div className="pte-details">
        <h2>📘 PTE </h2>
        <ul>
          <li>
            <strong>Total Score:</strong> 10–90
          </li>
          <li>
            <strong>Test Type:</strong> Computer-based, AI-evaluated
          </li>
          <li>
            <strong>Duration:</strong> Approximately 2 hours
          </li>
          <li>
            <strong>Test Sections:</strong>
            <ul>
              <li>Speaking & Writing – 54 to 67 minutes</li>
              <li>Reading – 29 to 30 minutes</li>
              <li>Listening – 30 to 43 minutes</li>
            </ul>
          </li>
        </ul>

        <h2>🎯 Why Choose Our PTE Coaching?</h2>
        <ul>
          <li>Interactive live classes with AI-evaluation prep</li>
          <li>Full mock tests with instant scoring feedback</li>
          <li>Practice with real-time question types</li>
          <li>1-on-1 mentoring with performance tracking</li>
          <li>Flexible timings for students & professionals</li>
        </ul>

        <h2>🌍 PTE is Accepted In</h2>
        <div className="country-grid">
          {[
            {
              href: "https://www.studyinaustralia.gov.au/",
              flag: "au",
              name: "Australia",
            },
            {
              href: "https://www.studywithnewzealand.govt.nz/",
              flag: "nz",
              name: "New Zealand",
            },
            { href: "https://www.educanada.ca/", flag: "ca", name: "Canada" },
            {
              href: "https://study-uk.britishcouncil.org/",
              flag: "gb",
              name: "United Kingdom",
            },
            {
              href: "https://educationusa.state.gov/",
              flag: "us",
              name: "USA",
            },
          ].map(({ href, flag, name }) => (
            <a key={flag} href={href} target="_blank" rel="noopener noreferrer">
              <div>
                <img
                  src={`https://flagcdn.com/w320/${flag}.png`}
                  alt={`${name} Flag`}
                />
                <p>{name}</p>
              </div>
            </a>
          ))}
        </div>

        <h2>💰 Course Plans & Pricing</h2>
        <table className="pricing-table">
          <thead>
            <tr>
              <th>Plan</th>
              <th>Features</th>
              <th>Price (INR)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Basic</td>
              <td>12 Live Classes + Study Material + Practice Sets</td>
              <td>₹4,000</td>
            </tr>
            <tr>
              <td>Premium</td>
              <td>Basic + 3 Full Mock Tests + Feedback Sessions</td>
              <td>₹6,500</td>
            </tr>
            <tr>
              <td>Pro</td>
              <td>Premium + 1-on-1 Speaking + Writing Correction</td>
              <td>₹10,000</td>
            </tr>
          </tbody>
        </table>

        <p style={{ marginTop: "20px" }}>
          <strong>Get PTE-ready with us!</strong> Reach your dream score with
          structured guidance.
          <Link to="/contact"> Contact us</Link> today for a free trial session.
        </p>

        <div className="course-navigation">
          <Link to="/toefl" className="nav-btn">
            ⟵ Previous
          </Link>
          <Link to="/gre" className="nav-btn">
            Next ⟶
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PTA;
