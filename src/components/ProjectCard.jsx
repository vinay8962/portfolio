import { motion } from "framer-motion";
import React from "react";
const ProjectCard = ({ project, onCardClick }) => {
  return (
    <div
      onClick={() => onCardClick(project)}
      className="relative w-11/12 p-1 h-80 flex justify-center items-center cursor-pointer  overflow-hidden  "
    >
      <motion.span
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        className="w-40 h-[30rem] bg-gradient-to-r from-white via-purple-500  absolute "
      ></motion.span>
      <div className="relative bg-black w-full  h-full flex justify-center text-center  items-center ">
        <h1 className="text-xl font-semibold text-white">
          {project.projectName}
        </h1>
      </div>
    </div>
  );
};

export default ProjectCard;

{
  /* <img
          src={project.image1}
          alt={project.projectName}
          className="w-full h-32 object-cover mb-4"
        /> */
}
