import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    course: "",
    education: "",
    country: "",
    startDate: "",
    endDate: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendWhatsApp = () => {
    const {
      name,
      age,
      course,
      education,
      country,
      startDate,
      endDate,
      address,
    } = formData;

    const message = `📚 *New Admission Enquiry*\n\n👤 Name: ${name}\n🎂 Age: ${age}\n🎓 Course: ${course}\n📘 Education Level: ${education}\n🌍 Country Interested: ${country}\n🗓️ Start Date: ${startDate}\n🗓️ End Date: ${endDate}\n🏠 Address: ${address}`;

    const phoneNumber = "919966428787";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="contact">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>Phone: +91 99664 28787</p>
        <p>
          Email:{" "}
          <a href="mailto:thesanvisacademy@gmail.com">
            thesanvisacademy@gmail.com
          </a>
        </p>
        <p>
          WhatsApp:{" "}
          <a href="https://wa.me/919966428787" target="_blank" rel="noreferrer">
            Click to Chat
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/posts/sanvi-infolink-system_studyinuk-studyabroad-ukeducation-activity-7209922540947869696-pFVZ"
            target="_blank"
            rel="noreferrer"
          >
            Visit Profile
          </a>
        </p>
        <p>
          Instagram:{" "}
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            @thesanvisacademy
          </a>
        </p>
        <p>
          Location:&nbsp;
          <a
            href="https://www.google.com/maps/place/A23,+Basement+Floor,+Gemini+Parsn+Complex,+Chennai+-+600034"
            target="_blank"
            rel="noopener noreferrer"
          >
            A23, Basement Floor, Gemini Parsn Complex, Chennai – 600 034
          </a>
        </p>

        <h3>Send Your Details</h3>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            required
          />

          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Course --</option>
            <option value="IELTS">IELTS</option>
            <option value="TOEFL">TOEFL</option>
            <option value="PTE">PTE</option>
            <option value="GMAT">GMAT</option>
            <option value="GRE">GRE</option>
            <option value="French">French</option>
            <option value="German">German</option>
          </select>

          <select
            name="education"
            value={formData.education}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Education Level --</option>
            <option value="10th">10th</option>
            <option value="12th">12th</option>
            <option value="Diploma">Diploma</option>
            <option value="Undergraduate">Undergraduate</option>
            <option value="Graduate">Graduate</option>
            <option value="Postgraduate">Postgraduate</option>
          </select>

          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Preferred Country --</option>
            <option value="Europe">Europe</option>
            <option value="Italy">Italy</option>
            <option value="Lithuania">Lithuania</option>
            <option value="Japan">Japan</option>
            <option value="Singapore">Singapore</option>
            <option value="UK">UK</option>
            <option value="USA">USA</option>
            <option value="Syria">Syria</option>
            <option value="Germany">Germany</option>
            <option value="China">China</option>
            <option value="Australia">Australia</option>
            <option value="Poland">Poland</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Others">Others</option>
          </select>

          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
          />
          <textarea
            name="address"
            placeholder="Your Address"
            value={formData.address}
            onChange={handleChange}
            rows="3"
            required
          ></textarea>

          <button type="submit" onClick={sendWhatsApp}>
            Send via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
