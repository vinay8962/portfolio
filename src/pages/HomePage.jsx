import React from "react";
import Herosection from "../components/Herosection";
import About from "../components/About";
import Skills from "../components/Skills";
import Project from "../components/Project";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Slide from "../components/Slide";
import Collaboration from "../components/Collaboration";
import Experience from "../components/Experience";

const HomePage = () => {
  return (
    <div>
      <div className="hero-section-bg-image">
        <Navbar />
        <Herosection />
      </div>
      <About />
      <Experience />
      <Slide />
      <Skills />
      <Project />
      <Collaboration />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
