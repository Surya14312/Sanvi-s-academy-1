import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import pteImage from "../assets/pte-banner.jpg";

function PTA() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pte-container">
      <h1>PTE Academic Online Coaching</h1>

      <div className="pte-intro">
        <img src={pteImage} alt="PTE Coaching" className="pte-img" />
        <p>
          <strong>The Sanvi’s Academy</strong> offers high‑impact online
          coaching for the{" "}
          <strong>Pearson Test of English Academic (PTE Academic)</strong>. Our
          certified trainers guide you through the{" "}
          <strong>Speaking, Writing, Reading, and Listening</strong> modules
          with live classes and mock exams.
        </p>
      </div>

      <div className="pte-details">
        <h2>📘 PTE Overview</h2>
        <ul>
          <li>
            <strong>Total Score:</strong> 10–90
          </li>
          <li>
            <strong>Test Type:</strong> Computer‑based, AI‑evaluated
          </li>
          <li>
            <strong>Duration:</strong> Approximately 2 hours
          </li>
          <li>
            <strong>Test Sections:</strong>
            <ul>
              <li>Speaking & Writing: ~55–67 minutes</li>
              <li>Reading: ~29–30 minutes</li>
              <li>Listening: ~30–43 minutes</li>
            </ul>
          </li>
        </ul>

        <h2>🎯 Why Choose Our PTE Coaching?</h2>
        <ul>
          <li>Interactive live classes with AI‑scored practice</li>
          <li>Full mock tests with instant feedback</li>
          <li>Real‑world question practice</li>
          <li>1‑on‑1 mentoring & performance tracking</li>
          <li>Flexible batch timing for students & professionals</li>
          <li>Flexible batch timing for students & working professionals</li>
          <li>
            Targeted training for all four modules – Speaking, Writing, Reading,
            Listening
          </li>
          <li>Real-time speaking fluency analysis with pronunciation tips</li>
          <li>
            Score booster strategies for difficult question types like Repeat
            Sentence & Essay
          </li>
          <li>Access to online portal with 24x7 practice material</li>
          <li>Expert feedback on writing tasks with improvement suggestions</li>
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
              name: "New Zealand",
            },
            { href: "https://www.educanada.ca/", flag: "ca", name: "Canada" },
            {
              href: "https://study-uk.britishcouncil.org/",
              flag: "gb",
              name: "United Kingdom",
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
                  className="country-flag"
                />
                <p>{name}</p>
              </div>
            </a>
          ))}
        </div>

        <h2>💰 Course Plans & Pricing</h2>
        <table className="course-table">
          <thead>
            <tr>
              <th>Course</th>
              <th>No. of Classes</th>
              <th>Mock Tests</th>
              <th>Benefits</th>
              <th>Fees</th>
              <th>Discount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Course">PTE</td>
              <td data-label="No. of Classes">20</td>
              <td data-label="Mock Tests">1</td>
              <td data-label="Benefits">Study Material, Class Recording</td>
              <td data-label="Fees">8000</td>
              <td data-label="discount">10 - 15%</td>
            </tr>
          </tbody>
        </table>
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <Link to="/contact" className="contact-link">
            <button className="contact-btn">
              📞 Contact Us for Enrollment
            </button>
          </Link>
        </div>

        {/* <table className="pricing-table">
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
              <td>₹8,000</td>
            </tr>
            <tr>
              <td>Premium</td>
              <td>Basic + 3 Full Mock Tests + Feedback Sessions</td>
              <td>₹10,500</td>
            </tr>
            <tr>
              <td>Pro</td>
              <td>Premium + 1‑on‑1 Speaking & Writing Correction</td>
              <td>₹12,000</td>
            </tr>
          </tbody>
        </table> */}

        <p style={{ marginTop: "20px" }}>
          <strong>Get PTE‑ready with us!</strong> Achieve your dream score with
          structured guidance. <Link to="/contact"> Contact us</Link> today for
          a free trial.
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
