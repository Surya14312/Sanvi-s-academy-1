import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import IELTS from "./pages/IELTS.jsx";
import TOEFL from "./pages/TOEFL.jsx";
import PTA from "./pages/PTE.jsx";
import GRE from "./pages/GRE.jsx";
import SAT from "./pages/SAT.jsx";
import Duolingo from "./pages/Duolingo.jsx";
import French from "./pages/French.jsx";
import German from "./pages/German.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ielts" element={<IELTS />} />
        <Route path="/toefl" element={<TOEFL />} />
        <Route path="/pte" element={<PTA />} />
        <Route path="/gre" element={<GRE />} />
        <Route path="/sat" element={<SAT />} />
        <Route path="/duolingo" element={<Duolingo />} />
        <Route path="/french" element={<French />} />
        <Route path="/german" element={<German />} />

        {/* Add more routes as needed */}
      </Routes>
      <Footer /> {/* ✅ Footer will appear on every page */}
    </Router>
  );
}

export default App;
