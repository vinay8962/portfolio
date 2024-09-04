import React from "react";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <>
      <div className="bg-n-8 w-full h-auto flex flex-col items-center">
        <h1 className="text-4xl font-bold text-white tracking-wide my-10">
          <span className="inline-block w-24 h-[0.5px] bg-red-500 font-thin"></span>{" "}
          Projects{" "}
          <span className="inline-block w-24 h-[0.5px] bg-red-500 font-thin"></span>{" "}
        </h1>
        <p className="text-lg text-gray-500 max-w-4xl text-center mx-4 sm:mx-0">
          As a passionate frontend developer, I have worked on a variety of
          projects that showcase my skills in creating responsive, user-friendly
          interfaces. Below are some of the projects I’ve completed,
          demonstrating my expertise in modern frontend technologies, including
          React, Tailwind CSS, and more.
        </p>
      </div>
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-6  ">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </>
  );
};

export default Project;
