import React from "react";
import AboutImage from "../assets/4965791_50426-removebg-preview.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative w-full min-h-[500px] py-12 px-6 md:px-12 overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 bg-cover bg-center  z-0 bg-n-8"></div>

      {/* Content Layer */}
      <div className="relative z-10 w-full h-full flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            src={AboutImage}
            className="w-72 md:w-8/12 rounded-full shadow-lg"
            alt="About Vinay Kushwah"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start overflow-hidden">
          <motion.h1
            className="text-1xl sm:text-4xl font-bold text-white mb-6 tracking-wide text-center md:text-left"
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
          >
            <span className="inline-block w-12 sm:w-24 h-[0.5px] bg-red-500 font-thin"></span>{" "}
            About Me
            <span className="inline-block w-12 sm:w-24 h-[0.5px] bg-red-500 font-thin "></span>
          </motion.h1>
          <motion.p
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
            className="text-white text-xs md:text-xl leading-relaxed tracking-wide text-center md:text-left"
          >
            I am a self-learner and frontend developer specializing in designing
            and implementing user-friendly, responsive interfaces. My expertise
            includes proficiency in React.js, Redux Toolkit, and Tailwind CSS. I
            am passionate about leveraging my technical skills and attention to
            detail to deliver impactful and innovative web solutions. Dedicated
            to continuous learning, I stay updated with the latest industry
            trends and best practices to enhance my development skills and
            contribute effectively to team projects.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default About;
