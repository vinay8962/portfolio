import React from "react";
import Demo from "../assets/Screenshot 2024-08-18 013513.png";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = () => {
  return (
    <div className="w-full p-4">
      <div className="flex flex-col sm:flex-row font-sans w-full h-auto sm:h-[200px] bg-white bg-opacity-50 rounded-lg shadow-lg overflow-hidden">
        {/* Left Side: Image */}
        <div className="flex-none sm:w-48 w-full h-48 sm:h-full relative">
          <img
            src={Demo}
            alt="Project Thumbnail"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Right Side: Content */}
        <div className="flex-auto p-4 sm:p-6">
          <div className="flex items-center justify-between">
            {/* Project Name */}
            <h2 className="text-xl font-semibold">Project Name</h2>
            <div className="flex space-x-4">
              {/* GitHub Icon */}
              <a
                href="https://github.com/your-repo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black"
              >
                <FaGithub size={24} />
              </a>
              {/* Link Icon */}
              <a
                href="https://your-project-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black"
              >
                <FaExternalLinkAlt size={24} />
              </a>
            </div>
          </div>

          {/* Project Description */}
          <p className="mt-2 text-gray-600">
            This is a brief description of the project. It explains what the
            project is about and highlights its main features.
          </p>

          {/* Project Duration */}
          <div className="mt-4 text-sm text-gray-500">
            <span>Start Date: Jan 2024</span> - <span>End Date: Apr 2024</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
