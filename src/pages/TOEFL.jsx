import React from "react";
import toeflImage from "../assets/toefl-banner.jpg"; // Ensure you have a relevant image

function TOEFL() {
  return (
    <div className="toefl-container">
      <h1>TOEFL Online Coaching</h1>

      <div className="toefl-intro">
        <img src={toeflImage} alt="TOEFL Coaching" className="toefl-img" />
        <p>
          <strong>The Sanvi’s Academy</strong> offers expert-led online coaching
          for the
          <strong> TOEFL (Test of English as a Foreign Language)</strong>. Our
          structured training equips you to excel in the 4 sections —{" "}
          <strong>Reading, Listening, Speaking, and Writing</strong>. Suitable
          for those aiming to study or work in the USA, Canada, or other
          English-speaking countries.
        </p>
      </div>

      <div className="toefl-details">
        <h2>📘 What is TOEFL?</h2>
        <ul>
          <li>
            <strong>Total Score:</strong> 0–120 (each section scored out of 30)
          </li>
          <li>
            <strong>Test Type:</strong> iBT (Internet-Based Test)
          </li>
          <li>
            <strong>Duration:</strong> Approximately 2 hours
          </li>
          <li>
            <strong>Test Sections:</strong>
            <ul>
              <li>Reading – 35 minutes</li>
              <li>Listening – 36 minutes</li>
              <li>Speaking – 16 minutes (4 tasks)</li>
              <li>Writing – 29 minutes (2 tasks)</li>
            </ul>
          </li>
        </ul>

        <h2>🎯 Why Choose Our TOEFL Coaching?</h2>
        <ul>
          <li>Live online classes with certified TOEFL experts</li>
          <li>Updated materials with ETS-aligned strategies</li>
          <li>Time management techniques for each section</li>
          <li>Mock tests & real exam simulations</li>
          <li>1-on-1 speaking & writing evaluation</li>
          <li>Flexible schedules (weekday/weekend)</li>
        </ul>

        <h2>🌍 TOEFL is Accepted In</h2>
        <div className="country-grid">
          <a
            href="https://www.ets.org/toefl/test-takers.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img src="https://flagcdn.com/w320/us.png" alt="USA Flag" />
              <p>USA</p>
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
            href="https://www.study-in-germany.de/"
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
              <td>15 Live Classes, Study Material, Section-wise Drills</td>
              <td>₹4,500</td>
            </tr>
            <tr>
              <td>Premium</td>
              <td>Basic + 4 Mock Tests + Speaking & Writing Evaluation</td>
              <td>₹7,500</td>
            </tr>
            <tr>
              <td>Pro</td>
              <td>Premium + 1-on-1 Expert Mentoring, Personalized Feedback</td>
              <td>₹11,000</td>
            </tr>
          </tbody>
        </table>

        <p style={{ marginTop: "20px" }}>
          <strong>Ready to boost your TOEFL score?</strong> Get started with our
          expert trainers now!
          <a href="/contact"> Contact us</a> for demo sessions and guidance.
        </p>
      </div>
    </div>
  );
}

export default TOEFL;
