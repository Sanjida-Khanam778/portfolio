import React from "react";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const resume =
    "https://drive.google.com/file/d/1La9nQUB8Qegr2ef_mt1Fd2wEHK5WWeW3/view?usp=sharing";

  const navlinks = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/about"}>About me</Link>
      </li>
      <li>
        <Link to={"/skills"}>Skills</Link>
      </li>
      <li>
        <Link to={"/education"}>Education</Link>
      </li>
      <li>
        <Link to={"/projects"}>Projects</Link>
      </li>
    </>
  );

  return (
    <>
      <div className="sticky top-0 z-10 text-white bg-black/5 backdrop-blur-md">
        <div className="navbar w-11/12 lg:w-10/12 mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navlinks}
              </ul>
            </div>
            <a className="text-xl text-[#15F5BA] md:text-3xl font-bold uppercase">
              Sanjida
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-bold">{navlinks}</ul>
          </div>
          <div className="navbar-end">
            <a href={resume} download target="_blank" rel="noopener noreferrer">
                 <button className="border border-[#15F5BA] text-white flex items-center gap-2 rounded-md font-medium px-2 py-1 md:px-4 md:py-2 mr-2 md:mr-0 md:text-xl">
                <FaDownload className="text-sm"/> Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;