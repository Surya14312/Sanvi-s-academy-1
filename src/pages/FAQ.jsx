import React, { useState } from "react";
import { Link } from "react-router-dom";

const faqData = [
  {
    question: "What courses does The Sanvi’s Academy offer?",
    answer:
      "We offer expert coaching for IELTS, TOEFL, SAT, GRE, GMAT, Duolingo, French, German, and more — all tailored to help students reach their highest potential.",
  },
  {
    question: "Are classes available online?",
    answer:
      "Yes! You can attend both online and offline classes, based on your convenience. Our online sessions are live, interactive, and backed by expert faculty.",
  },
  {
    question: "Do you help with study abroad applications?",
    answer:
      "Absolutely! From choosing the right university to SOP writing and visa documentation — our counselors provide end-to-end study abroad support.",
  },
  {
    question: "Who are the instructors at Sanvi’s Academy?",
    answer:
      "Our trainers are certified, highly experienced, and passionate educators with a proven track record in helping students achieve top scores.",
  },
  {
    question: "What is the batch size for coaching classes?",
    answer:
      "We maintain small batch sizes to ensure personalized attention. Typically, a batch consists of 8–12 students.",
  },
  {
    question: "Is there a free demo class available?",
    answer:
      "Yes, we offer one free demo session for most courses. It helps you evaluate our teaching style and content before enrolling.",
  },
  {
    question: "Do you provide mock tests and study materials?",
    answer:
      "Yes, we provide regular mock tests, detailed performance feedback, and updated study materials designed to match the latest exam patterns.",
  },
  {
    question: "How do I register or contact Sanvi’s Academy?",
    answer:
      "You can visit our contact page, call us directly, or fill out the inquiry form. Our team will get back to you within 24 hours.",
  },
  {
    question: "💻 Are classes available online or offline?",
    answer:
      "Yes! We provide flexible learning options to suit your convenience. You can attend in-person classes at our state-of-the-art coaching center or join our live online sessions from the comfort of your home. Both formats include interactive lessons, personalized feedback, doubt-clearing sessions, and regular progress tracking. We also provide access to recorded classes so you never miss a concept.",
  },
  {
    question: "🌍 Do you assist with study abroad applications?",
    answer:
      "Absolutely. Our dedicated study abroad team guides students through every step of the overseas education journey — from selecting the right country and university to crafting a strong SOP (Statement of Purpose), getting powerful LORs (Letters of Recommendation), applying for scholarships, and filing student visas. We specialize in destinations like the USA, UK, Canada, Australia, Europe, Japan, and more.",
  },
  {
    question: "👨‍🏫 Who are the instructors at The Sanvi’s Academy?",
    answer:
      "Our instructors are certified language trainers, subject experts, and test prep specialists with years of international teaching experience. Many are former high-scorers in exams like IELTS, GRE, and TOEFL. They follow result-driven strategies, offer one-on-one mentoring, and adapt teaching based on each student’s pace and learning style.",
  },
  {
    question: "👥 What is the typical batch size?",
    answer:
      "We keep our batch sizes small, typically 8 to 12 students per session. This enables personalized attention, active participation, and a more engaging classroom environment. Our trainers ensure that each student receives tailored guidance to address individual strengths and weaknesses.",
  },
  {
    question: "📅 Can I attend a free demo class?",
    answer:
      "Yes! We strongly encourage prospective students to attend a free demo class to experience our teaching quality and methodology firsthand. You’ll get a clear overview of how sessions are conducted, interact with faculty, and gain insight into the course structure before making a commitment.",
  },
  {
    question: "📘 Do you provide study materials and mock tests?",
    answer:
      "Definitely. We provide up-to-date study materials, topic-wise practice sets, vocabulary banks, grammar boosters, and access to full-length mock tests. Our AI-powered assessment tools offer detailed analytics, highlight your strengths and weaknesses, and help you improve quickly. All materials are aligned with the latest test patterns.",
  },
  {
    question: "📞 How can I contact or register at The Sanvi’s Academy?",
    answer:
      "Getting started is easy! You can contact us through our official website, call our admissions team, send a WhatsApp message, or walk into our center. Online registration forms are also available. Once we receive your inquiry, our counselors will connect with you to recommend the right course and batch timing based on your goals.",
  },
  {
    question: "📍 Where is your coaching center located?",
    answer:
      "Our coaching center is centrally located in [Your City] with easy access to public transportation. In addition to in-person classes, we also offer a full online learning platform that reaches students across India and abroad. Whether you live nearby or far away, The Sanvi’s Academy is always within reach.",
  },
  {
    question: "📈 What makes The Sanvi’s Academy different?",
    answer:
      "What sets us apart is our student-first approach. We provide personalized mentoring, result-oriented training, small batches, modern learning tools, and a global outlook. From coaching to visa processing, we ensure you’re guided at every stage. Our mission is not just to teach — it’s to empower students to thrive on international platforms.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {item.question}
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="course-pagination">
        <div className="course-navigation">
          <Link to="/blog" className="nav-btn">
            ⟵ Previous
          </Link>
          <Link to="/gallery" className="nav-btn">
            Next ⟶
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
