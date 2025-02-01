import React from "react";
import { useParams, Link } from "react-router-dom";
import first from "../../assets/projects/first.png";
import second from "../../assets/projects/second.png";
import third from "../../assets/projects/third.png";

// Project Details Data
const projectDetails = {
  1: {
    name: "Eco Adventure Website",
    image: first,
    description:
      "The application will provide detailed information on mountain treks eco-adventure, allowing users to browse, learn more about each experience, and consult experts if they’re interested.  It also includes user profiles, login, and registration to enhance user engagement. Primary purpose of this application is to showcase information about trekking adventures, such as cost, location, duration, and eco-friendliness.",
    technologies: ["React", "Tailwind CSS", "Firebase"],
    github:
      "https://github.com/programming-hero-web-course1/b10-a9-authentication-Sanjida-Khanam778",
    live: "https://eco-adventure-76af7.web.app",
    challenges:
      "Faced issues with firebase integration and performance optimization.",
    improvements: "Planning to add backend data and better UI improvements.",
  },
  2: {
    name: "Movie Portal Website",
    image: second,
    description:
      "A movie portal showcasing movies with the movie details like released year, duration, poster, rating etc.",
    technologies: ["React", "Tailwind CSS", "Express.js", "MongoDB"],
    github:
      "https://github.com/programming-hero-web-course2/b10-a10-client-side-Sanjida-Khanam778",
    live: "https://movie-portal-8bfdb.web.app",
    challenges:
      "Faced responsive design issues and animation performance problems.",
    improvements:
      "Planning to add a blog section and more interactive animations.",
  },
  3: {
    name: "ElectroCare",
    image: third,
    description:
      "A electronics item reparing service app with exploring various services added by different service proveders.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "Framer Motion",
    ],
    github:
      "https://github.com/programming-hero-web-course2/b10a11-client-side-Sanjida-Khanam778",
    live: "https://electronics-repair-9c5bf.web.app",
    challenges: "Implementing JWT token for authentication.",
    improvements:
      "Planning to add end-to-end encryption.",
  },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectDetails[id];

  if (!project)
    return <h2 className="text-center text-2xl">Project not found</h2>;

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-10">
      <div className="max-w-3xl bg-white shadow-lg rounded-lg p-8">
        <img src={project.image} alt="" />
        <h2 className="text-4xl font-bold text-gray-800 mt-10">{project.name}</h2>
        <p className="mt-4 text-gray-700">{project.description}</p>

        <div className="mt-4">
          <h3 className="text-xl font-semibold">Main Technologies:</h3>
          <ul className="list-disc list-inside text-gray-600">
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-semibold">Challenges Faced:</h3>
          <p className="text-gray-700">{project.challenges}</p>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-semibold">Future Improvements:</h3>
          <p className="text-gray-700">{project.improvements}</p>
        </div>

        <div className="mt-6 flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-5 py-2 rounded-md"
          >
            GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-5 py-2 rounded-md"
          >
            Live Demo
          </a>
        </div>

        <div className="mt-6">
          <Link to="/projects">
            <button className="bg-red-500 text-white px-5 py-2 rounded-md">
              Back to Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
