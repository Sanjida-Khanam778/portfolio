import React from "react";
import { Link } from "react-router-dom";
import first from '../../assets/projects/first.png'
import second from '../../assets/projects/second.png'
import third from '../../assets/projects/third.png'
// Sample Projects Data
const projects = [
  {
    id: 1,
    name: "Mountain Treks",
    image: first,
    description: "Eco Adventure Website"
  },
  {
    id: 2,
    name: "FilmyScope",
    image: second,
    description: "Movie Portal Website"
  },
  {
    id: 3,
    name: "ElectroCare",
    image: third,
    description: "Electronics item reparing Service Website"
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen mt-10 md:mt-24">
      <h2 className="text-4xl font-bold text-center mb-10">My Best Projects 🚀</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white shadow-lg rounded-lg p-5">
            <img src={project.image} alt={project.name} className="w-full h-80 object-cover rounded-md" />
            <h3 className="text-2xl font-semibold mt-4">{project.name}</h3>
            <p>{project.description}</p>
            <Link to={`/projects/${project.id}`}>
              <button className="mt-4 bg-[#FD6E0A] text-white px-5 py-2 rounded-md">
                View More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
