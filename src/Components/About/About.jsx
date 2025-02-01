import React from "react";

const About = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <section className="text-center bg-[#FFF8F3] w-10/12 mx-auto p-10 md:w-full lg:px-[130px] lg:py-[150px]">
        <h3 className="text-4xl font-bold text-[#181818] mb-5 md:mb-10">
          About Me
        </h3>
        <p className="text-lg text-gray-500 mb-5 md:mb-10">
          I am a passionate frontend developer with a deep love for creating
          visually appealing and user-friendly web applications. My journey into
          programming started with curiosity and a desire to build something
          meaningful. Over time, I fell in love with coding, especially crafting
          interactive and dynamic user experiences. Beyond programming, I enjoy
          exploring creative pursuits like painting and photography, which help
          me bring a unique artistic touch to my designs. I also love playing
          sports, as it keeps me active and disciplined. My goal is to
          continuously learn, grow, and contribute to projects that make a real
          impact.
        </p>
        <div className="flex flex-col lg:flex-row justify-around">
          <div className="about-item">
            <p className="text-xl text-[#757575] mb-3">Name:</p>
            <p className="font-bold text-xl text-[#474747]">Sanjida Khanam</p>
          </div>
          <div className="about-item">
            <p className="text-xl text-[#757575] mb-3">Email:</p>
            <p className="font-bold text-xl text-[#474747]">
              sanjida.ice.778@gmail.com
            </p>
          </div>
          <div className="about-item">
            <p className="text-xl text-[#757575] mb-3">Date of birth:</p>
            <p className="font-bold text-xl text-[#474747]">15 July 1999</p>
          </div>
          <div className="about-item">
            <p className="text-xl text-[#757575] mb-3">From:</p>
            <p className="font-bold text-xl text-[#474747]">
              Dhaka, Bangladesh
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
