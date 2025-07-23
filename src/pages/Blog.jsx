import React from "react";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <div className="page-section blog-section">
      <h2 className="blog-title">Student Blogs & Study Tips</h2>
      <p className="blog-intro">
        Welcome to <strong>The Sanvi’s Academy</strong> Blog — your trusted
        companion for <strong>IELTS preparation</strong>,{" "}
        <strong>TOEFL strategies</strong>,<strong> GRE/SAT success tips</strong>
        , and <strong>study abroad guidance</strong>. Whether you're a student,
        a working professional, or a language enthusiast, our goal is to help
        you make smarter, faster, and more confident decisions about your global
        education journey.
      </p>
      <p className="blog-intro">
        With insights from certified trainers, visa experts, and real student
        journeys, our blog is packed with actionable advice — from building your
        SOP to choosing the best <strong>language learning apps</strong> and
        discovering scholarships in Europe, Japan, and more.
      </p>

      <div className="blog-articles">
        <Link to="/blog/ielts-tips" className="blog-card">
          <h3>🎯 How to Score 8+ Bands in IELTS</h3>
          <p>
            Learn smart IELTS preparation tips with strategies for Listening,
            Reading, Writing, and Speaking. Discover time-tested tips from top
            scorers and certified trainers.
          </p>
        </Link>

        <Link to="/blog/study-abroad-2025" className="blog-card">
          <h3>🌍 Study Abroad in 2025: Trends & Tips</h3>
          <p>
            Understand emerging admission trends in the UK, Europe, and Japan.
            Get expert advice on profile building, university shortlisting, and
            deadlines.
          </p>
        </Link>

        <Link to="/blog/toefl-vs-duolingo" className="blog-card">
          <h3>💡 TOEFL vs. Duolingo vs. PTE</h3>
          <p>
            Choosing the right English test? We break down key differences in
            format, scoring, preparation time, and university acceptability.
          </p>
        </Link>

        <Link to="/blog/gre-vocabulary" className="blog-card">
          <h3>📚 Master Your Vocabulary for GRE/SAT</h3>
          <p>
            Build a strong vocabulary bank with smart memorization techniques —
            essential for GRE verbal reasoning and SAT critical reading success.
          </p>
        </Link>

        <Link to="/blog/student-visa-interview" className="blog-card">
          <h3>✈️ Student Visa Interview Preparation</h3>
          <p>
            Nervous about your student visa interview? Learn how to present
            yourself confidently and avoid common pitfalls with our expert
            guidance.
          </p>
        </Link>

        <Link to="/blog/best-apps-2025" className="blog-card">
          <h3>🧑‍🏫 Best Language Learning Apps for 2025</h3>
          <p>
            Want to learn German, French, or English faster? Explore the top
            language learning apps to boost fluency from your mobile — ideal for
            busy learners.
          </p>
        </Link>

        <Link to="/blog/study-abroad-2025" className="blog-card">
          <h3>📆 Study Plan for Working Professionals</h3>
          <p>
            Crunched for time? This flexible and effective study plan helps
            working professionals prepare for exams like IELTS or GRE after work
            hours.
          </p>
        </Link>

        <Link to="/blog/why-japan" className="blog-card">
          <h3>🇯🇵 Why Japan is Emerging as a Study Hub</h3>
          <p>
            Discover why Japan is becoming a top destination for international
            students. Learn how Sanvi’s Academy supports your journey — from
            university selection to visa success.
          </p>
        </Link>

        <Link to="/blog/speaking-mistakes" className="blog-card">
          <h3>📖 Top Mistakes Students Make in Speaking Tests</h3>
          <p>
            Avoid the most common speaking test errors in IELTS, TOEFL, and PTE
            with practical tips to improve fluency, coherence, and confidence.
          </p>
        </Link>

        <Link to="/blog/sop-lor-guide" className="blog-card">
          <h3>💬 How to Write the Perfect SOP & LOR</h3>
          <p>
            Your Statement of Purpose and Letters of Recommendation matter! Get
            templates, examples, and formatting tips to impress any admissions
            committee.
          </p>
        </Link>

        <Link to="/blog/europe-universities" className="blog-card">
          <h3>🌐 Exploring European Universities: A Guide</h3>
          <p>
            From tuition-free education in Germany to scholarships in Italy and
            France, explore your options and application strategies for Europe.
          </p>
        </Link>

        <Link to="/blog/success-stories" className="blog-card">
          <h3>👩‍🎓 Real Success Stories from Sanvi Students</h3>
          <p>
            Be inspired by students who cracked IELTS, GRE, and SAT with Sanvi’s
            help — and got into their dream universities abroad!
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Blog;
