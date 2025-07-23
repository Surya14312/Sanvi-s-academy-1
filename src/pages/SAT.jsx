import React from "react";
import satImage from "../assets/sat-banner.jpg"; // Add a suitable SAT banner image

function SAT() {
  return (
    <div className="sat-container">
      <h1>SAT Online Coaching</h1>

      <div className="sat-intro">
        <img src={satImage} alt="SAT Coaching" className="sat-img" />
        <p>
          <strong>The Sanvi’s Academy</strong> provides result-oriented online
          coaching for the <strong>SAT (Scholastic Assessment Test)</strong>,
          essential for undergraduate admissions in the US and other countries.
          We cover all test components with expert strategies and adaptive
          learning plans.
        </p>
      </div>

      <div className="sat-details">
        <h2>📘 What is the SAT?</h2>
        <ul>
          <li>
            <strong>Total Score:</strong> 400–1600
          </li>
          <li>
            <strong>Test Sections:</strong> Reading & Writing, Math
          </li>
          <li>
            <strong>Duration:</strong> ~2 hours 14 minutes (Digital SAT)
          </li>
          <li>
            <strong>Question Types:</strong> Multiple Choice & Grid-In
          </li>
          <li>
            <strong>Mode:</strong> Computer-Based Test
          </li>
        </ul>

        <h2>🌍 SAT Accepted In</h2>
        <div className="country-grid">
          <a
            href="https://collegereadiness.collegeboard.org/sat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img src="https://flagcdn.com/w320/us.png" alt="USA Flag" />
              <p>United States</p>
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
            href="https://www.studyinsingapore.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img src="https://flagcdn.com/w320/sg.png" alt="Singapore Flag" />
              <p>Singapore</p>
            </div>
          </a>

          <a
            href="https://studyinindia.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img src="https://flagcdn.com/w320/in.png" alt="India Flag" />
              <p>India (International Pathways)</p>
            </div>
          </a>
        </div>

        <h2>🎯 Why Choose Our SAT Coaching?</h2>
        <ul>
          <li>Concept-building for Reading, Writing, and Math</li>
          <li>Digital SAT practice with real-time analytics</li>
          <li>Adaptive drills tailored to your weaknesses</li>
          <li>Mock exams with section-wise reports</li>
          <li>Expert mentoring & progress tracking</li>
        </ul>

        <h2>💰 SAT Coaching Plans</h2>
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
              <td>16 Live Classes + E-Books + Weekly Quizzes</td>
              <td>₹6,000</td>
            </tr>
            <tr>
              <td>Premium</td>
              <td>Basic + 4 Mock Tests + Test Feedback Sessions</td>
              <td>₹9,000</td>
            </tr>
            <tr>
              <td>Pro</td>
              <td>Premium + 1-on-1 Math/English Mentoring</td>
              <td>₹13,000</td>
            </tr>
          </tbody>
        </table>

        <p style={{ marginTop: "20px" }}>
          <strong>Target a 1500+ SAT score with us!</strong> Book a free demo
          and get your personalized prep roadmap.
          <a href="/contact"> Contact us</a> now to get started.
        </p>
      </div>
    </div>
  );
}

export default SAT;
