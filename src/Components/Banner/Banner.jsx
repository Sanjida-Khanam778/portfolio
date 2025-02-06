import React from "react";
import {
  FaDownload,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";
import img from "../../assets/profile.png";

const resume =
  "https://drive.google.com/file/d/1La9nQUB8Qegr2ef_mt1Fd2wEHK5WWeW3/view?usp=sharing";

const Banner = () => {
  return (
    <div className="flex flex-col-reverse text-white w-11/12 mx-auto xl:w-full lg:flex-row justify-between items-center gap-10 my-10 lg:my-24">
      <div className="lg:w-1/2">
        <h4 className="font-medium text-2xl lg:text-2xl text-white">
          Hi, I am
        </h4>
        <h1 className="font-bold text-4xl lg:text-7xl mt-2 lg:mt-4">
          Sanjida Khanam
        </h1>
        <p className="mt-10 text-xl font-medium tracking-widest"> Frontend Developer</p>
        <p className="text-justify text-white/55 tracking-widest leading-loose">
       I love tackling complex problems and
          continuously push myself to stay up to date with the latest trends and
          tools in web development.
        </p>
        <div className="flex gap-2 text-4xl my-8">
          <a
            href="https://www.facebook.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <FaFacebook className="text-white" />
          </a>

          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            <FaLinkedin className="text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            <FaGithub className="text-white" />
          </a>
        </div>
        <div className="flex flex-col md:flex-row gap-3 mt-5 lg:mt-12">
          <a href={resume} download target="_blank" rel="noopener noreferrer">
            <button className="border border-[#15F5BA] text-white flex items-center gap-2 rounded-md font-medium px-2 py-1 md:px-4 md:py-2 mr-2 md:mr-0 md:text-xl">
              <FaDownload className="text-sm" /> Resume
            </button>
          </a>
        </div>
      </div>
      <img className="w-full md:w-1/3" src={img} alt="Profile" />
    </div>
  );
};

export default Banner;
