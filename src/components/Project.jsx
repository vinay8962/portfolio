import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { ProjectData } from "../constants/index"; // Assuming your project data is imported here
import { RiCloseLargeLine } from "react-icons/ri";
import { motion } from "framer-motion";
const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  console.log(selectedProject);
  // Function to handle card click
  const handleCardClick = (project) => {
    setSelectedProject(project); // Open the modal with the selected project data
  };

  const handleCloseModal = () => {
    setSelectedProject(null); // Close the modal
  };
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden"; // Stop scrolling
    } else {
      document.body.style.overflow = "auto"; // Restore scrolling
    }

    // Cleanup on component unmount or when modal closes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  return (
    <div className="bg-n-8 w-full h-auto py-10 overflow-hidden">
      <div className="flex flex-col items-center">
        <motion.h1
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          className="text-1xl sm:text-4xl font-bold text-white tracking-wide my-10 text-center"
        >
          <span className="inline-block sm:w-24 w-12 h-[0.5px] bg-red-500 font-thin"></span>{" "}
          Project{" "}
          <span className="inline-block sm:w-24 w-12   h-[0.5px] bg-red-500 font-thin"></span>{" "}
        </motion.h1>
        <p className="text-lg text-gray-500 max-w-4xl text-center mx-4 sm:mx-0">
          As a passionate frontend developer, I have worked on a variety of
          projects that showcase my skills in creating responsive, user-friendly
          interfaces. Below are some of the projects I’ve completed,
          demonstrating my expertise in modern frontend technologies, including
          React, Tailwind CSS, and more.
        </p>
      </div>
      <div className="grid w-full grid-cols-1 sm:grid-cols-4 gap-6 px-10 py-10">
        {ProjectData.map((item) => (
          <ProjectCard
            key={item.id}
            project={item}
            onCardClick={handleCardClick}
          />
        ))}
      </div>

      {/* Modal for showing project details */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center text-black overflow-hidden ">
          <div className="bg-gray-500  p-6 rounded-lg max-w-4xl h-auto w-full">
            <div className="w-full flex justify-end ">
              <button
                onClick={handleCloseModal}
                className="mt-6  text-black  rounded"
              >
                <RiCloseLargeLine size={30} />
              </button>
            </div>
            <h2 className="text-2xl font-bold">
              {selectedProject.projectName}
            </h2>
            <div className="flex gap-5 justify-center">
              <img
                src={selectedProject.image1}
                alt={selectedProject.projectName}
                className="my-4 w-44 h-60"
              />
              <img
                src={selectedProject.image1}
                alt={selectedProject.projectName}
                className="my-4 w-44 h-60"
              />
              <img
                src={selectedProject.image1}
                alt={selectedProject.projectName}
                className="my-4 w-44 h-60"
              />
              <img
                src={selectedProject.image1}
                alt={selectedProject.projectName}
                className="my-4 w-44 h-60"
              />
            </div>
            <p>{selectedProject.description}</p>
            <div className="mt-4">
              <a
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                GitHub
              </a>
              <span className="mx-4">|</span>
              <a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
