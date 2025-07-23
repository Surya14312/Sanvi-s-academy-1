import React from "react";
import greGmatImage from "../assets/gre-gmat-banner.jpg"; // Add a banner image in your assets folder

function GreGmat() {
  return (
    <div className="gre-gmat-container">
      <h1>GRE & GMAT Online Coaching</h1>

      <div className="gre-gmat-intro">
        <img
          src={greGmatImage}
          alt="GRE and GMAT Coaching"
          className="gre-gmat-img"
        />
        <p>
          <strong>The Sanvi’s Academy</strong> delivers expert-led coaching for
          <strong> GRE (Graduate Record Examination)</strong> and
          <strong> GMAT (Graduate Management Admission Test)</strong>. Our
          courses are designed for students aspiring to pursue postgraduate and
          MBA programs at global universities.
        </p>
      </div>

      <div className="gre-gmat-details">
        <h2>📘 GRE Overview</h2>
        <ul>
          <li>
            <strong>Total Score:</strong> 260–340
          </li>
          <li>
            <strong>Sections:</strong> Verbal, Quantitative, Analytical Writing
          </li>
          <li>
            <strong>Duration:</strong> 1 hour 58 minutes (New format)
          </li>
          <li>
            <strong>Mode:</strong> Computer-Based
          </li>
        </ul>

        <h2>📘 GMAT Overview</h2>
        <ul>
          <li>
            <strong>Total Score:</strong> 200–800
          </li>
          <li>
            <strong>Sections:</strong> Quantitative, Verbal, Integrated
            Reasoning, AWA
          </li>
          <li>
            <strong>Duration:</strong> ~2 hours 15 minutes
          </li>
          <li>
            <strong>Mode:</strong> Computer-Based (Focus Edition)
          </li>
        </ul>

        <h2>🌍 Accepted In</h2>
        <div className="country-grid">
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
            href="https://www.daad.de/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img src="https://flagcdn.com/w320/de.png" alt="Germany Flag" />
              <p>Germany</p>
            </div>
          </a>
        </div>

        <h2>🎯 Why Choose Us?</h2>
        <ul>
          <li>Advanced strategies for Quant & Verbal mastery</li>
          <li>Full-length timed mock exams</li>
          <li>Section-wise analytics and improvement tracking</li>
          <li>1-on-1 mentoring with doubt clearing sessions</li>
          <li>Recorded lectures and flexible scheduling</li>
        </ul>

        <h2>💰 Course Pricing</h2>
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
              <td>Live Classes + Study Material</td>
              <td>₹6,000</td>
            </tr>
            <tr>
              <td>Premium</td>
              <td>+ Mock Tests + Sectional Reviews</td>
              <td>₹9,000</td>
            </tr>
            <tr>
              <td>Pro</td>
              <td>+ 1-on-1 Mentoring + AWA & IR Evaluation</td>
              <td>₹13,000</td>
            </tr>
          </tbody>
        </table>

        <p style={{ marginTop: "20px" }}>
          <strong>Get GRE/GMAT-ready with us!</strong> Achieve your dream
          university admit.
          <a href="/contact"> Contact us</a> now to start with a free demo
          session.
        </p>
      </div>
    </div>
  );
}

export default GreGmat;
