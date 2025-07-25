import React from "react";
import { Link } from "react-router-dom";
import germanBanner from "../assets/german-banner.jpg";
import germanInfra from "../assets/german-infra.jpg";

function German() {
  return (
    <div className="german-container">
      <div className="page-container">
        <h1>German Language Coaching</h1>

        <div className="german-intro">
          <img
            src={germanBanner}
            alt="German Coaching Banner"
            className="german-img"
          />
          <p>
            <strong>The Sanvi’s Academy</strong> provides comprehensive coaching
            for <strong>German Language (Goethe / TestDaF / TELC)</strong>{" "}
            certifications. Courses align with the{" "}
            <strong>CEFR framework</strong> (A1 to C2 levels) and prepare
            students for exams, study, work, or immigration purposes.
          </p>
        </div>

        <div className="german-details">
          <h2>📘 Course Overview</h2>
          <ul>
            <li>
              <strong>Levels:</strong> A1 to C2 (CEFR standard)
            </li>
            <li>
              <strong>Exams:</strong> Goethe, TestDaF, TELC
            </li>
            <li>
              <strong>Skills:</strong> Hören, Lesen, Schreiben, Sprechen
              (Listening, Reading, Writing, Speaking)
            </li>
            <li>
              <strong>Mode:</strong> Online + Interactive Sessions
            </li>
            <li>
              <strong>Duration:</strong> 2–4 months per level
            </li>
          </ul>

          <h2>🏫 Coaching Infrastructure</h2>
          <img
            src={germanInfra}
            alt="German Class Setup"
            className="infra-img"
          />
          <ul>
            <li>Smart classrooms with whiteboard and pronunciation labs</li>
            <li>German grammar & vocabulary drills with visual aids</li>
            <li>Goethe & TestDaF simulated practice tests</li>
            <li>One-on-one speaking booths & cultural immersion content</li>
          </ul>

          <h2>🌍 German is Accepted In</h2>
          <div className="country-grid">
            <a
              href="https://www.daad.de/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img src="https://flagcdn.com/w320/de.png" alt="Germany" />
                <p>Germany</p>
              </div>
            </a>
            <a
              href="https://studyinaustria.at/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img src="https://flagcdn.com/w320/at.png" alt="Austria" />
                <p>Austria</p>
              </div>
            </a>
            <a
              href="https://www.swissuniversities.ch/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img src="https://flagcdn.com/w320/ch.png" alt="Switzerland" />
                <p>Switzerland</p>
              </div>
            </a>
            <a
              href="https://luxembourg.public.lu/en/studies.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img src="https://flagcdn.com/w320/lu.png" alt="Luxembourg" />
                <p>Luxembourg</p>
              </div>
            </a>
            <a
              href="https://www.studyinnamibia.info/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img src="https://flagcdn.com/w320/na.png" alt="Namibia" />
                <p>Namibia</p>
              </div>
            </a>
          </div>

          <h2>🎯 Why Choose Our German Classes?</h2>
          <ul>
            <li>Certified Goethe & TestDaF trainers</li>
            <li>Level-wise speaking + grammar correction sessions</li>
            <li>Weekend/evening batch flexibility</li>
            <li>Exam-focused mock test series</li>
            <li>Guidance for job/study visa documentation</li>
            <li>
              Certified Goethe & TestDaF trainers with real exam experience
            </li>
            <li>
              Structured A1 to C2 level courses aligned with CEFR standards
            </li>
            <li>
              Level-wise grammar correction + real-life conversation sessions
            </li>
            <li>Weekend, evening, and fast-track batch options</li>
            <li>Interactive classroom tools and digital learning materials</li>
            <li>German culture & etiquette immersion through role-plays</li>
          </ul>

          <h2>💰 Course Pricing</h2>

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
                <td data-label="Course">GERMAN</td>
                <td data-label="No. of Classes">45</td>
                <td data-label="Mock Tests">3</td>
                <td data-label="Benefits">Study Material, Class Recording</td>
                <td data-label="Fees">15000</td>
                <td data-label="discount">15 - 20%</td>
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
                <th>Level</th>
                <th>Features</th>
                <th>Fee (INR)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A1 / A2</td>
                <td>30 sessions + exam prep + grammar bootcamp</td>
                <td>₹15,000</td>
              </tr>
              <tr>
                <td>B1 / B2</td>
                <td>Intermediate + TestDaF prep + mocks</td>
                <td>₹16,000</td>
              </tr>
              <tr>
                <td>C1 / C2</td>
                <td>Advanced fluency + Goethe writing/speaking mastery</td>
                <td>₹17,000</td>
              </tr>
            </tbody>
          </table> */}

          <p style={{ marginTop: "20px" }}>
            <strong>
              Join our German coaching today and open doors to education and
              career in Europe!
            </strong>{" "}
            Book your <strong>free demo</strong> or{" "}
            <Link to="/contact">Contact Us</Link> to begin your language
            journey.
          </p>

          <div className="course-navigation">
            <Link to="/french" className="nav-btn">
              ⟵ Previous
            </Link>
            <Link to="/about" className="nav-btn">
              Next ⟶
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default German;
