import React from "react";
import AboutImage from "../assets/4965791_50426.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative w-full min-h-[500px] py-12 px-6 md:px-12">
      {/* Background Layer */}
      <div className="absolute inset-0 bg-cover bg-center filter blur-lg z-0 about-bg-image"></div>

      {/* Content Layer */}
      <div className="relative z-10 w-full h-full flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-center">
          <motion.img
            initial={{ x: -200, opacity: 0, scale: 0.1 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            src={AboutImage}
            className="w-72 md:w-8/12 rounded-full shadow-lg"
            alt="About Vinay Kushwah"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          <motion.h1
            className="text-4xl font-bold text-white mb-6 tracking-wide text-center md:text-left"
            initial={{ y: -200, opacity: 0, scale: 0.1 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
          >
            <span className="inline-block w-24 h-[0.5px] bg-red-500 font-thin"></span>{" "}
            About Me
            <span className="inline-block w-24 h-[0.5px] bg-red-500 font-thin ml-4"></span>
          </motion.h1>
          <motion.p className="text-white text-lg md:text-xl leading-relaxed tracking-wide text-center md:text-left">
            I hope this message finds you well. My name is Vinay Kushwah, and I
            am a Frontend Developer with 10 months of experience at
            Techieshubhdeep IT Pvt Ltd. During my time with the company, I have
            worked on a variety of projects that have honed my skills in
            frontend development. I am currently seeking new opportunities in
            the field and would love to bring my expertise and passion for
            frontend development to your team. Thank you for considering my
            application. I look forward to the possibility of discussing how I
            can contribute to your company.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default About;
