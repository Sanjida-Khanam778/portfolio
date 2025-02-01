import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Navbar/Main/Main";
import About from "../Components/About/About";
import Skills from "../Components/Skills/Skills";
import Home from "../Components/Home/Home";
import Education from "../Components/Education/Education";
import ProjectsDetails from "../Components/Projects/ProjectDetails";
import Projects from "../Components/Projects/Projects";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "skills",
        element: <Skills></Skills>,
      },
      {
        path: "education",
        element: <Education></Education>,
      },
      {
        path: "projects",
        element: <Projects></Projects>,
      },
      {
        path: "projects/:id",
        element: <ProjectsDetails></ProjectsDetails>,
      },
    ],
  },
]);
