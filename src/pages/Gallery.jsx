import React from "react";
import { Link } from "react-router-dom";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    alt: "IELTS Coaching Session",
  },
  {
    src: "https://images.unsplash.com/photo-1588072432836-e10032774350",
    alt: "Student Orientation",
  },
  {
    src: "https://images.unsplash.com/photo-1588072432836-e10032774350",
    alt: "Online Class in Progress",
  },
  {
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    alt: "Award Ceremony",
  },
  {
    src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
    alt: "Counseling Session",
  },
  {
    src: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    alt: "Interactive Learning",
  },
  {
    src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    alt: "Group Workshop",
  },
];

function Gallery() {
  return (
    <div className="gallery-section">
      <h2 className="gallery-title">Our Moments @ Sanvi’s Academy</h2>
      <div className="gallery-grid">
        {galleryImages.map((img, index) => (
          <div key={index} className="gallery-item">
            <img
              src={`${img.src}?auto=format&fit=crop&w=600&q=80`}
              alt={img.alt}
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <div className="course-pagination">
        <div className="course-navigation">
          <Link to="/faq" className="nav-btn">
            ⟵ Previous
          </Link>
          <Link to="/" className="nav-btn">
            Next ⟶
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
