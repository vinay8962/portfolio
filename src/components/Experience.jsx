import { motion } from "framer-motion";

const experiences = [
  {
    company: "Techieshubhdeep IT Pvt Ltd",
    role: "Frontend Developer",
    start: "Sept. 2023",
    end: "Jun 2024",
    description:
      "Developed and maintained features for a school management system, worked on an e-commerce website, contributed to the company website, and collaborated with cross-functional teams.",
  },
];

const Experience = () => {
  // Variants for the motion cards
  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3, // Delay for each card
        duration: 0.6,
      },
    }),
  };

  return (
    <div className="bg-n-8 w-full h-auto overflow-hidden">
      <div className="bg-n-8 flex flex-col items-center">
        <motion.h1
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          className="text-1xl sm:text-4xl font-bold text-white tracking-wide my-10 text-center"
        >
          <span className="inline-block sm:w-24 w-12 h-[0.5px] bg-red-500 font-thin"></span>{" "}
          Experience{" "}
          <span className="inline-block sm:w-24 w-12 h-[0.5px] bg-red-500 font-thin"></span>{" "}
        </motion.h1>
      </div>
      <div className="flex flex-col items-center w-full px-8">
        <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
          Working Since 2023
        </p>
        <p className="text-sm md:text-base text-gray-50 mb-4 tracking-wide">
          Nurturing Growth and Learning - My Journey of Gaining Professional
          Experience Since Freshman Year in College
        </p>
      </div>

      <div className="flex flex-col items-center w-full px-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            className="border border-n-1/15 shadow-2xl shadow-n-1/15 p-6 rounded-lg  text-n-4 mb-8 w-full max-w-4xl"
          >
            <div className="flex flex-col md:flex-row  justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2 text-gray-300">
                  {exp.company}
                </h2>
                <h3 className="text-xl font-medium mb-2">{exp.role}</h3>
              </div>
              <p className="text-sm mb-2 text-gray-300">
                {exp.start} - {exp.end}
              </p>
            </div>
            <p className="text-n-4 text-center">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

