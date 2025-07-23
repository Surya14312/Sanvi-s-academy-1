import React from "react";
import founder1 from "../assets/founder1.jpg";
import founder2 from "../assets/founder2.jpg";
import infrastructure from "../assets/infrastructure.jpg";

function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <h2>About Sanvi’s Academy</h2>
        <p>
          At Sanvi’s Academy, we specialize in coaching for international exams
          such as IELTS, TOEFL, GRE, GMAT, PTE, French, and German. Our goal is
          to empower students to achieve their dream of studying abroad through
          expert guidance and dedicated support.
        </p>
        <p>
          Our academy is led by experienced mentors who are passionate about
          student success. With customized training modules, result-driven
          preparation, and modern classroom infrastructure, we ensure every
          student is well-prepared to achieve excellence.
        </p>
      </div>

      <div className="founder-section">
        <h3>Meet Our Founders</h3>
        <div className="founder-profiles">
          <div className="founder-card">
            <img
              src={founder1}
              alt="Mrs. V. Sangeetha"
              style={{ width: "200px", borderRadius: "12px" }}
            />
            <h4>Mrs. V. Sangeetha</h4>
            <p>
              A serial entrepreneur who founded Sanvi’s Academy. She has over 10
              years of experience in counselling and administration, gained in
              both India and Singapore.
            </p>
          </div>
          <div className="founder-card">
            <img
              src={founder2}
              alt="Mr. R.V. Rajan"
              style={{ width: "200px", borderRadius: "12px" }}
            />
            <h4>Mr. R.V. Rajan</h4>
            <p>
              Brings over 26 years of industry experience, having executed
              domestic and international projects. He is an expert in career
              counselling and guides students to pursue their educational and
              career goals through strategic mentoring.
            </p>
          </div>
        </div>
      </div>

      <div className="infra-section">
        <h3>Our Client Infrastructure</h3>
        <img
          src={infrastructure}
          alt="Sanvi's Infrastructure"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            borderRadius: "16px",
            maxWidth: "800px",
            margin: "0 auto",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            marginBottom: "20px",
            border: "2px solid #ccc",
            objectFit: "cover",
            height: "auto",
            maxHeight: "400px",
            transition: "transform 0.3s ease",
            cursor: "pointer",
            ":hover": {
              transform: "scale(1.05)",
            },
          }}
        />
        <p className="infra-caption">
          Spacious classrooms, smart boards, language labs, and online learning
          support to provide an engaging and effective learning environment.
        </p>
      </div>
    </div>
  );
}

export default About;
