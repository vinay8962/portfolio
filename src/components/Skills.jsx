import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// ----------------- Animated Progress Component -----------------
const AnimatedProgressBar = ({ value, text, color, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const ref = useRef(null);

  // Intersection Observer for triggering animation
  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(currentRef);
    return () => observer.disconnect();
  }, []);

  // Animate progress increase
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        let current = 0;
        const interval = setInterval(() => {
          current += 1;
          setProgress(current);
          if (current >= value) clearInterval(interval);
        }, 15);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, value, delay]);

  return (
    <motion.div
      ref={ref}
      className="relative flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: delay / 1000, duration: 0.8 }}
    >
      {/* Progress Circle */}
      <CircularProgressbar
        value={progress}
        strokeWidth={8}
        styles={buildStyles({
          pathColor: color,
          trailColor: "#1e293b", // dark slate trail
          strokeLinecap: "round",
          textSize: "0px",
        })}
      />

      {/* Centered Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-2 text-center">
        <span className="text-lg sm:text-xl font-bold text-white drop-shadow-md leading-tight">
          {progress}%
        </span>
        <span className="text-xs sm:text-sm text-gray-300 font-semibold mt-0.5">
          {text}
        </span>
      </div>
    </motion.div>
  );
};

// ----------------- Skills Section -----------------
const Skills = () => {
  const skills = [
    { name: "HTML", percentage: 90, color: "#E34F26" },
    { name: "CSS", percentage: 85, color: "#1572B6" },
    { name: "JavaScript", percentage: 80, color: "#F7DF1E" },
    { name: "React.js", percentage: 75, color: "#61DAFB" },
    { name: "Next.js", percentage: 70, color: "#a855f7" },
    { name: "Tailwind", percentage: 85, color: "#38B2AC" },
    { name: "Redux Toolkit", percentage: 70, color: "#764ABC" },
    { name: "Redux", percentage: 75, color: "#764ABC" },
    { name: "TypeScript", percentage: 65, color: "#3178C6" },
  ];

  return (
    <div className="w-full h-auto relative flex flex-col items-center pt-16 pb-16 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Glowing radial backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mb-6">
          Skills
        </h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-4"
        >
          <div className="w-16 h-1 bg-gradient-to-r from-transparent to-blue-500 rounded-full" />
          <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-transparent rounded-full" />
        </motion.div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-12">
        {skills.map((skill, index) => (
          <AnimatedProgressBar
            key={index}
            value={skill.percentage}
            text={skill.name}
            color={skill.color}
            delay={index * 200}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
