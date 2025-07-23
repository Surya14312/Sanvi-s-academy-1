import React from "react";
import duolingoImage from "../assets/duolingo-banner.jpg"; // Add a relevant banner image

function Duolingo() {
  return (
    <div className="duolingo-container">
      <h1>Duolingo English Test Online Coaching</h1>

      <div className="duolingo-intro">
        <img
          src={duolingoImage}
          alt="Duolingo Coaching"
          className="duolingo-img"
        />
        <p>
          <strong>The Sanvi’s Academy</strong> offers expert-led online coaching
          for the <strong>Duolingo English Test (DET)</strong>, a widely
          accepted English proficiency exam for global admissions. Our program
          is designed to help students master test strategies with AI-integrated
          practice and score improvement plans.
        </p>
      </div>

      <div className="duolingo-details">
        <h2>📘 What is the Duolingo English Test?</h2>
        <ul>
          <li>
            <strong>Total Score:</strong> 10–160
          </li>
          <li>
            <strong>Test Sections:</strong> Literacy, Comprehension,
            Conversation, and Production
          </li>
          <li>
            <strong>Duration:</strong> ~1 hour
          </li>
          <li>
            <strong>Question Types:</strong> Reading, Writing, Speaking, and
            Listening
          </li>
          <li>
            <strong>Mode:</strong> Fully Online, Taken From Home
          </li>
          <li>
            <strong>Results:</strong> Delivered within 48 hours
          </li>
        </ul>

        <h2>🌍 DET Accepted In</h2>
        <div className="country-grid">
          <a
            href="https://educationusa.state.gov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img src="https://flagcdn.com/w320/us.png" alt="USA Flag" />
              <p>United States</p>
            </div>
          </a>

          <a
            href="https://www.gov.uk/student-visa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img src="https://flagcdn.com/w320/gb.png" alt="UK Flag" />
              <p>United Kingdom</p>
            </div>
          </a>

          <a
            href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img src="https://flagcdn.com/w320/ca.png" alt="Canada Flag" />
              <p>Canada</p>
            </div>
          </a>

          <a
            href="https://www.daad.de/en/study-and-research-in-germany/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img src="https://flagcdn.com/w320/de.png" alt="Germany Flag" />
              <p>Germany</p>
            </div>
          </a>

          <a
            href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-finder/study"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img src="https://flagcdn.com/w320/au.png" alt="Australia Flag" />
              <p>Australia</p>
            </div>
          </a>
        </div>

        <h2>🎯 Why Choose Our Duolingo Coaching?</h2>
        <ul>
          <li>Targeted practice for AI-evaluated speaking & writing</li>
          <li>Complete test simulation with instant scoring insights</li>
          <li>Section-wise improvement drills & feedback</li>
          <li>Access to recorded sessions & practice materials</li>
          <li>Flexible learning schedule with personal mentoring</li>
        </ul>

        <h2>💰 Duolingo Coaching Plans</h2>
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
              <td>10 Live Classes + Sample Questions + Strategy Guide</td>
              <td>₹3,500</td>
            </tr>
            <tr>
              <td>Premium</td>
              <td>Basic + 2 Full-Length Mock Tests + Feedback Analysis</td>
              <td>₹5,500</td>
            </tr>
            <tr>
              <td>Pro</td>
              <td>Premium + 1-on-1 Sessions + Speaking/Writing Evaluation</td>
              <td>₹8,500</td>
            </tr>
          </tbody>
        </table>

        <p style={{ marginTop: "20px" }}>
          <strong>Score 120+ on your DET with our expert guidance!</strong>{" "}
          Schedule your free trial today and boost your global admission
          chances.
          <a href="/contact"> Contact us</a> to begin your journey.
        </p>
      </div>
    </div>
  );
}

export default Duolingo;
