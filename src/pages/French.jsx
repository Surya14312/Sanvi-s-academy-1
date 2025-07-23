import React from "react";
import frenchBanner from "../assets/french-banner.jpg"; // Add a banner image
import frenchInfra from "../assets/french-infra.jpg"; // Add an image showing infrastructure/equipment

function French() {
  return (
    <div className="french-container">
      <h1>French Language Coaching</h1>

      <div className="french-intro">
        <img
          src={frenchBanner}
          alt="French Coaching Banner"
          className="french-img"
        />
        <p>
          <strong>The Sanvi’s Academy</strong> offers structured coaching for
          <strong> French (DELF / DALF / TEF / TCF)</strong> preparation,
          suitable for students, professionals, and immigration aspirants. Our
          program is CEFR-aligned (A1 to C2 levels), led by experienced language
          instructors.
        </p>
      </div>

      <div className="french-details">
        <h2>📘 Course Overview</h2>
        <ul>
          <li>
            <strong>Levels:</strong> A1, A2, B1, B2, C1, C2
          </li>
          <li>
            <strong>Duration:</strong> 2–4 months per level
          </li>
          <li>
            <strong>Tests:</strong> DELF, DALF, TEF, TCF
          </li>
          <li>
            <strong>Skills:</strong> Listening, Speaking, Reading, Writing
          </li>
          <li>
            <strong>Mode:</strong> Online + On-demand practice
          </li>
        </ul>

        <h2>🏫 Coaching Infrastructure</h2>
        <img src={frenchInfra} alt="French Class Setup" className="infra-img" />
        <ul>
          <li>Interactive digital whiteboard classrooms</li>
          <li>Pronunciation labs with headset-mic setup</li>
          <li>French learning apps & e-library access</li>
          <li>1-on-1 speaking room & feedback tools</li>
        </ul>

        <h2>🌍 Useful For</h2>
        <div className="country-grid">
          <a
            href="https://www.campusfrance.org/en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img src="https://flagcdn.com/w320/fr.png" alt="France" />
              <p>France</p>
            </div>
          </a>

          <a
            href="https://www.canada.ca/en/immigration-refugees-citizenship/services/application/medical-police/language-testing.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img src="https://flagcdn.com/w320/ca.png" alt="Canada" />
              <p>Canada (TEF/TCF for PR)</p>
            </div>
          </a>

          <a
            href="https://www.swissuniversities.ch/en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img src="https://flagcdn.com/w320/ch.png" alt="Switzerland" />
              <p>Switzerland</p>
            </div>
          </a>

          <a
            href="https://www.studyinbelgium.be/en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img src="https://flagcdn.com/w320/be.png" alt="Belgium" />
              <p>Belgium</p>
            </div>
          </a>

          <a
            href="https://www.ifcameroun.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img src="https://flagcdn.com/w320/cm.png" alt="Cameroon" />
              <p>Africa (Francophone Nations)</p>
            </div>
          </a>
        </div>

        <h2>🎯 Why Learn French with Us?</h2>
        <ul>
          <li>Certified native and bilingual trainers</li>
          <li>Mock tests with CEFR-based evaluation</li>
          <li>Spoken & written French immersion training</li>
          <li>Flexible batches (weekday/weekend)</li>
          <li>Job and study-abroad French readiness</li>
        </ul>

        <h2>💰 French Course Pricing</h2>
        <table className="pricing-table">
          <thead>
            <tr>
              <th>Level</th>
              <th>Features</th>
              <th>Fee (INR)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A1 / A2</td>
              <td>Beginner level + 20 live sessions + materials</td>
              <td>₹4,500</td>
            </tr>
            <tr>
              <td>B1 / B2</td>
              <td>Intermediate level + DELF prep + mocks</td>
              <td>₹7,000</td>
            </tr>
            <tr>
              <td>C1 / C2</td>
              <td>Advanced level + Writing & Oral mastery</td>
              <td>₹10,000</td>
            </tr>
          </tbody>
        </table>

        <p style={{ marginTop: "20px" }}>
          <strong>
            Become fluent in French and unlock global opportunities!
          </strong>{" "}
          Book your <strong>free demo</strong> today and receive your
          personalized learning roadmap.
          <a href="/contact"> Contact us</a> to begin.
        </p>
      </div>
    </div>
  );
}

export default French;
