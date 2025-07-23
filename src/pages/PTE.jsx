import React from "react";
import pteImage from "../assets/pte-banner.jpg"; // Add a relevant banner image

function PTA() {
  return (
    <div className="pte-container">
      <h1>PTE Academic Online Coaching</h1>

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
        <h2>📘 What is PTE Academic?</h2>
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
          <a
            href="https://www.studyinaustralia.gov.au/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img src="https://flagcdn.com/w320/au.png" alt="Australia Flag" />
              <p>Australia</p>
            </div>
          </a>

          <a
            href="https://www.studywithnewzealand.govt.nz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img
                src="https://flagcdn.com/w320/nz.png"
                alt="New Zealand Flag"
              />
              <p>New Zealand</p>
            </div>
          </a>

          <a
            href="https://www.educanada.ca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img src="https://flagcdn.com/w320/ca.png" alt="Canada Flag" />
              <p>Canada</p>
            </div>
          </a>

          <a
            href="https://study-uk.britishcouncil.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img src="https://flagcdn.com/w320/gb.png" alt="UK Flag" />
              <p>United Kingdom</p>
            </div>
          </a>

          <a
            href="https://educationusa.state.gov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img src="https://flagcdn.com/w320/us.png" alt="USA Flag" />
              <p>USA</p>
            </div>
          </a>
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
          <a href="/contact"> Contact us</a> today for a free trial session.
        </p>
      </div>
    </div>
  );
}

export default PTA;
