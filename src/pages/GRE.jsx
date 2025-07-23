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
          MBA programs at global universities.
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

        <h2>🌍 Accepted In</h2>
        <div
          className="country-grid"
          style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}
        >
          {[
            {
              img: "us.png",
              name: "USA",
              link: "https://educationusa.state.gov/",
            },
            {
              img: "gb.png",
              name: "United Kingdom",
              link: "https://study-uk.britishcouncil.org/",
            },
            {
              img: "ca.png",
              name: "Canada",
              link: "https://www.educanada.ca/",
            },
            {
              img: "au.png",
              name: "Australia",
              link: "https://www.studyinaustralia.gov.au/",
            },
            { img: "de.png", name: "Germany", link: "https://www.daad.de/en/" },
          ].map((country) => (
            <a
              key={country.name}
              href={country.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textAlign: "center", width: "100px" }}
            >
              <img
                src={`https://flagcdn.com/w320/${country.img}`}
                alt={country.name}
                style={{ width: "100%" }}
              />
              <p>{country.name}</p>
            </a>
          ))}
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
        <table
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
