import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const AnimatedProgressBar = ({ value, text, color, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setProgress((prev) => {
            if (prev >= value) {
              clearInterval(interval);
              return value;
            }
            return prev + 1;
          });
        }, 20); // Adjust speed here
      }, delay); // Apply delay

      return () => clearTimeout(timer);
    }
  }, [isVisible, value, delay]);

  return (
    <motion.div
      ref={ref}
      className="relative flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32"
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: delay / 1000, duration: 1 }} // Convert ms to seconds
    >
      <CircularProgressbar
        value={progress}
        styles={buildStyles({
          textSize: "0px", // Hide default text
          pathColor: color,
          trailColor: "#d6d6d6",
        })}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-white text-base sm:text-lg font-bold">{`${progress}%`}</div>
        <div className="text-white text-sm sm:text-base font-bold mt-1">
          {text}
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const skills = [
    { name: "HTML", percentage: 90, color: "#E34F26" },
    { name: "CSS", percentage: 85, color: "#1572B6" },
    { name: "JavaScript", percentage: 80, color: "#F7DF1E" },
    { name: "React.js", percentage: 75, color: "#61DAFB" },
    { name: "Next.js", percentage: 70, color: "#d699ff" },
    { name: "Tailwind CSS", percentage: 85, color: "#38B2AC" },
    { name: "Redux Toolkit", percentage: 70, color: "#764ABC" },
    { name: "Redux", percentage: 75, color: "#764ABC" },
    { name: "TypeScript", percentage: 65, color: "#3178C6" },
  ];

  return (
    <div className="w-full h-auto bg-black flex flex-col items-center pt-10 pb-10 skill-bg-wallpaper overflow-hidden">
      <motion.h1
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="text-2xl sm:text-4xl font-bold text-white tracking-wide my-6 sm:my-10 text-center"
      >
        <span className="inline-block w-12 sm:w-24 h-[0.5px] bg-red-500"></span>{" "}
        Skill{" "}
        <span className="inline-block w-12 sm:w-24 h-[0.5px] bg-red-500"></span>
      </motion.h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-12">
        {skills.map((skill, index) => (
          <AnimatedProgressBar
            key={index}
            value={skill.percentage}
            text={skill.name}
            color={skill.color}
            delay={index * 200} // 0.2-second gap between each skill bar
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
