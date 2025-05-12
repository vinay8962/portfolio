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
    <div className="scroll-smooth">
      <div className="hero-section-bg-image" id="home">
        <Navbar />
        <Herosection />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="experience">
        <Experience />
      </div>

      <div id="slide">
        <Slide />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="project">
        <Project />
      </div>

      <div id="collaboration">
        <Collaboration />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
