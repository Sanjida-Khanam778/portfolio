import React from "react";
import { FaDownload, FaFacebook, FaLinkedin, FaPhone } from "react-icons/fa";
import img from "../../assets/profile.png";

// Google Drive থেকে ডাউনলোডযোগ্য লিংক দিন
const resume =
  "https://drive.google.com/file/d/1La9nQUB8Qegr2ef_mt1Fd2wEHK5WWeW3/view?usp=sharing";

const Banner = () => {
  return (
    <div className="flex flex-col-reverse w-10/12 mx-auto xl:w-full lg:flex-row justify-between gap-10 my-10 lg:my-24">
      <div className="lg:w-1/2">
        <h4 className="font-medium text-2xl lg:text-4xl text-gray-600">Hi, I am</h4>
        <h1 className="font-bold text-4xl lg:text-7xl mt-6 lg:mt-12">Sanjida Khanam</h1>
        <p className="mt-4 text-xl font-medium"> Frontend Developer</p>
        {/* <p className="text-gray-500 mt-12">
          Shot what able cold new see hold. Friendly as an betrayed formerly he.
          Morning because as to society behaved moments.
        </p> */}
        <div className="flex gap-2 text-4xl my-8">
          <a
            href="https://www.facebook.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <FaFacebook />
          </a>

          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            <FaLinkedin />
          </a>
        </div>
        <div className="flex flex-col md:flex-row gap-3 mt-5 lg:mt-12">
          <a href={resume} download target="_blank" rel="noopener noreferrer">
            <button className="bg-[#FD6E0A] xl:w-full flex items-center gap-2 rounded-lg font-bold text-white px-4 py-2 lg:px-8 lg:py-3 lg:text-xl">
              <FaDownload /> Download CV
            </button>
          </a>
         
        </div>
      </div>
      <img className="w-1/2" src={img} alt="Profile" />
    </div>
  );
};

export default Banner;
