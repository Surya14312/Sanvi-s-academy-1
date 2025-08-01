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
          MBA programs at global universities. Our tailored courses are designed
          for students aiming to pursue postgraduate and MBA programs in leading
          global universities. With strategic preparation, personal mentoring,
          and full-length mock tests, we ensure you're fully equipped to ace
          your exam.
        </p>
      </div>

      <div className="gre-gmat-details" style={{ marginTop: "30px" }}>
        <h2>📘 GRE/GMAT Highlights</h2>
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
            <strong>Duration:</strong> 2 hours 15 minutes
          </li>
          <li>
            <strong>Mode:</strong> Computer-Based (Focus Edition)
          </li>
        </ul>

        <h2>🌍 GRE/GMAT Accepted In</h2>
        <div className="country-grid">
          {[
            { flag: "de", name: "Germany" },
            { flag: "at", name: "Austria" },
            { flag: "ch", name: "Switzerland" },
            { flag: "lu", name: "Luxembourg" },
            { flag: "na", name: "Namibia" },
          ].map(({ flag, name }) => (
            <div key={flag} className="country-card">
              <img src={`https://flagcdn.com/w320/${flag}.png`} alt={name} />
              <p>{name}</p>
            </div>
          ))}
        </div>

        <h2>🎯Why Choose our GRE/GMAT Coaching?</h2>
        <ul>
          <li>Advanced strategies for Quant & Verbal mastery</li>
          <li>Full-length timed mock exams</li>
          <li>Section-wise analytics and improvement tracking</li>
          <li>Recorded lectures and flexible scheduling</li>
          <li>Live Interactive Sessions</li>
          <li>Analytical Writing Practice</li>
          <li>Score Improvement Guarantee</li>
          <li>25 years of Expertise in Standardized Tests Coaching</li>
          <li>Veteran, Highly Skilled, Certified Trainers</li>
          <li>Result-Oriented Teaching to Ensure High Scores</li>
          <li>Individual Attention and Enthused Learning Environment</li>
          <li>Mock Tests to gain real Test Experience</li>
          <li>Free Demo Class</li>
          <li>
            Each class is 1.5 hours long – approximately 0.5 month duration
          </li>
        </ul>

        <h2>💰 GRE/GMAT Course Pricing</h2>
        <table className="course-table">
          <thead>
            <tr>
              <th>Course</th>
              <th>No. of Classes</th>
              <th>Mock Tests</th>
              <th>Benefits</th>
              <th>Fees</th>
              <th>Discount</th>
              <th className="final-fee-header">Final Fee</th>{" "}
              {/* Styled header */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Course">GRE</td>
              <td data-label="No. of Classes">50</td>
              <td data-label="Mock Tests">10</td>
              <td data-label="Benefits">Study Material, Class Recording</td>
              <td data-label="Fees">22500 INR</td>
              <td data-label="Discount">15 - 20%</td>
              <td data-label="Final Fee">
                {" "}
                <div className="final-fee-box">₹18,000 INR</div>
              </td>{" "}
              {/* New Value */}
            </tr>
            <tr>
              <td data-label="Course">GMAT</td>
              <td data-label="No. of Classes">50</td>
              <td data-label="Mock Tests">6</td>
              <td data-label="Benefits">Study Material, Class Recording</td>
              <td data-label="Fees">22500 INR</td>
              <td data-label="Discount">15 - 20%</td>
              <td data-label="Final Fee">
                {" "}
                <div className="final-fee-box">₹18,000 INR</div>
              </td>{" "}
              {/* New Value */}
            </tr>
          </tbody>
        </table>

        <p style={{ marginTop: "20px" }}>
          <strong>Get GRE/GMAT-ready with us!</strong> Achieve your dream
          university admit.{" "}
          <Link to="/contact" style={{ color: "#c91432", fontWeight: "bold" }}>
            Contact us
          </Link>{" "}
          now to start with a free demo session.
        </p>

        <div className="course-pagination">
          <div>
            <Link to="/pte" className="nav-btn">
              ⟵ Previous
            </Link>
          </div>
          <div>
            <Link to="/sat" className="nav-btn">
              Next ⟶
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GreGmat;
