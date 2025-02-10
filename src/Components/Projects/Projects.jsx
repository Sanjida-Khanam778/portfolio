import React from "react";
import { Link } from "react-router-dom";
import first from "../../assets/projects/first.png";
import second from "../../assets/projects/second.png";
import third from "../../assets/projects/third.png";

const projects = [
  {
    id: 1,
    name: "Click Cash",
    image: first,
    description: "Micro Task and Earning Platform",
    techStack: ["React", "CSS", "JavaScript", "Node.js", "Express", "MongoDB", "JWT", "Firebase", "Tailwind"],
  },
  {
    id: 2,
    name: "FilmyScope",
    image: second,
    description: "Movie Portal Website",
    techStack: ["React", "CSS", "GSAP", "JavaScript", "Node.js", "Express", "MongoDB", "JWT", "Firebase", "Tailwind"],
  },
  {
    id: 3,
    name: "ElectroCare",
    image: third,
    description: "Electronics Item Repairing Service Website",
    techStack: ["React", "CSS", "JavaScript", "Node.js", "Express", "MongoDB", "JWT", "Firebase", "Tailwind"],
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen mt-10 md:mt-24 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-10">My Best Projects</h2>

      <div className="grid md:grid-cols-3 gap-8 px-5">
        {projects.map((project) => (
          <div key={project.id} className="bg-gradient-to-r from-[#1d1d1d]/20 to-[#151515] shadow-lg rounded-lg p-5">
            <img src={project.image} alt={project.name} className="w-full object-cover rounded-sm h-56" />
            <h3 className="text-2xl font-semibold mt-4">{project.name}</h3>
            <p className="mt-2 text-gray-300">{project.description}</p>

            <div className="flex flex-wrap gap-2 mt-3">
              {project.techStack.map((tech, index) => (
                <span key={index} className="bg-gray-700 text-white text-sm px-2 py-1 rounded-md">
                  {tech}
                </span>
              ))}
            </div>

            <Link to={`/projects/${project.id}`}>
              <button className="bg-[#15F5BA] text-black font-medium w-full rounded-lg py-2 mt-4">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
