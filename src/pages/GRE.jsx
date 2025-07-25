import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import greGmatImage from "../assets/gre-gmat-banner.jpg";

function GreGmat() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="gre-gmat-container" style={{ paddingTop: "40px" }}>
      <h1>GRE & GMAT Online Coaching</h1>

      <div className="gre-gmat-intro">
        <img
          src={greGmatImage}
          alt="GRE and GMAT Coaching"
          className="gre-gmat-img"
          style={{ width: "100%", borderRadius: "8px", marginBottom: "20px" }}
        />
        <p>
          <strong>The Sanvi’s Academy</strong> delivers expert-led coaching for
          <strong> GRE (Graduate Record Examination)</strong> and
          <strong> GMAT (Graduate Management Admission Test)</strong>. Our
          courses are designed for students aspiring to pursue postgraduate and
          MBA programs at global universities.Our tailored courses are designed
          for students aiming to pursue postgraduate and MBA programs in leading
          global universities. With strategic preparation, personal mentoring,
          and full-length mock tests, we ensure you're fully equipped to ace
          your exam.
        </p>
      </div>

      <div className="gre-gmat-details" style={{ marginTop: "30px" }}>
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

        <h2>🌍 GRE/GMAT Accepted In</h2>
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

        <h2>🎯 Why Choose Us?</h2>
        <ul>
          <li>Advanced strategies for Quant & Verbal mastery</li>
          <li>Full-length timed mock exams</li>
          <li>Section-wise analytics and improvement tracking</li>
          <li>1-on-1 mentoring with doubt clearing sessions</li>
          <li>Recorded lectures and flexible scheduling</li>
          <li> Personalized Study Plans</li>
          <li>Live Interactive Sessionss</li>
          <li>Analytical Writing Practice</li>
          <li>Comprehensive Materials</li>
          <li>1-on-1 Mentorship</li>
          <li>Score Improvement Guarantee</li>
        </ul>

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
              <td>GRE</td>
              <td>50</td>
              <td>10</td>
              <td>Study Material, Class Recording</td>
              <td>22500</td>
              <td>15 - 20%</td>
            </tr>
            <tr>
              <td>GMAT</td>
              <td>50</td>
              <td>6</td>
              <td>Study Material, Class Recording</td>
              <td>22500</td>
              <td>15 - 20%</td>
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
        {/* <table
          className="pricing-table"
          style={{ width: "100%", borderCollapse: "collapse" }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f0f0f0" }}>
              <th>Plan</th>
              <th>Features</th>
              <th>Price (INR)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Basic</td>
              <td>Live Classes + Study Material</td>
              <td>₹22,000</td>
            </tr>
            <tr>
              <td>Premium</td>
              <td>+ Mock Tests + Sectional Reviews</td>
              <td>₹23,000</td>
            </tr>
            <tr>
              <td>Pro</td>
              <td>+ 1-on-1 Mentoring + AWA & IR Evaluation</td>
              <td>₹24,000</td>
            </tr>
          </tbody>
        </table> */}

        <p style={{ marginTop: "20px" }}>
          <strong>Get GRE/GMAT-ready with us!</strong> Achieve your dream
          university admit.
          <Link to="/contact"> Contact us</Link> now to start with a free demo
          session.
        </p>

        <div
          className="course-navigation"
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "30px",
          }}
        >
          <Link to="/pte" className="nav-btn">
            ⟵ Previous
          </Link>
          <Link to="/sat" className="nav-btn">
            Next ⟶
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GreGmat;
