import React from "react";
import ieltsImage from "../assets/ielts-banner.jpg";

function IELTS() {
  return (
    <div className="ielts-container">
      <h1>IELTS Online Coaching</h1>

      <div className="ielts-intro">
        <img src={ieltsImage} alt="IELTS Coaching" className="ielts-img" />
        <p>
          Join <strong>The Sanvi’s Academy</strong> and get trained by certified
          experts for the
          <strong>
            {" "}
            IELTS (International English Language Testing System)
          </strong>
          . Our coaching program is designed to help you achieve your target
          band score with personalized guidance, strategic practice, and
          full-length mock tests. We prepare students for both the{" "}
          <strong>Academic</strong> and
          <strong> General Training</strong> modules.
        </p>
      </div>

      <div className="ielts-details">
        <h2>📘 What is IELTS?</h2>
        <ul>
          <li>
            <strong>Total Band Score:</strong> Scored on a 0–9 scale
          </li>
          <li>
            <strong>Test Types:</strong> Academic (for study abroad) and General
            Training (for immigration/work)
          </li>
          <li>
            <strong>Total Duration:</strong> Approximately 2 hours 45 minutes
          </li>
          <li>
            <strong>Test Sections:</strong>
            <ul>
              <li>Listening – 30 minutes (4 sections, 40 questions)</li>
              <li>Reading – 60 minutes (3 passages, 40 questions)</li>
              <li>Writing – 60 minutes (2 tasks)</li>
              <li>Speaking – 11 to 14 minutes (face-to-face interview)</li>
            </ul>
          </li>
        </ul>

        <h2>🎯 Why Choose Our IELTS Coaching?</h2>
        <ul>
          <li>Daily live online classes with expert trainers</li>
          <li>Complete study material in PDF format</li>
          <li>Band-specific strategies and time management tips</li>
          <li>Regular mock tests with performance feedback</li>
          <li>1-on-1 speaking practice with fluency training</li>
          <li>Detailed writing task evaluations</li>
          <li>Flexible batch timings (morning/evening)</li>
        </ul>
        <h2>🌍 IELTS is Accepted In</h2>
        <div className="country-grid">
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
            href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-finder/study"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img src="https://flagcdn.com/w320/au.png" alt="Australia Flag" />
              <p>Australia</p>
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
            href="https://www.immigration.govt.nz/new-zealand-visas/options/study"
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
            href="https://www.irishimmigration.ie/coming-to-study-in-ireland/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img src="https://flagcdn.com/w320/ie.png" alt="Ireland Flag" />
              <p>Ireland</p>
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
              <td>20 Live Classes, PDF Materials, Basic Practice Worksheets</td>
              <td>₹5,000</td>
            </tr>
            <tr>
              <td>Premium</td>
              <td>Basic Plan + 5 Full-Length Mock Tests, Speaking Feedback</td>
              <td>₹8,000</td>
            </tr>
            <tr>
              <td>Pro</td>
              <td>
                Premium Plan + 1-on-1 Personal Coaching, Weekly Writing Task
                Reviews
              </td>
              <td>₹12,000</td>
            </tr>
          </tbody>
        </table>

        <p style={{ marginTop: "20px" }}>
          <strong>Enroll now</strong> and start your journey to a high IELTS
          band score! For demo sessions and counseling,{" "}
          <a href="/contact">contact us</a>.
        </p>
      </div>
    </div>
  );
}

export default IELTS;
