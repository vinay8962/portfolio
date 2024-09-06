import React from "react";

const ProjectCard = ({ project, onCardClick }) => {
  return (
    <div
      onClick={() => onCardClick(project)}
      className="w-11/12 p-4 bg-dark bg-opacity-15 h-80 flex justify-center items-center border border-white cursor-pointer"
    >
      <div>
        <img
          src={project.image1}
          alt={project.projectName}
          className="w-full h-32 object-cover mb-4"
        />
        <h1 className="text-xl font-semibold">{project.projectName}</h1>
      </div>
    </div>
  );
};

export default ProjectCard;
