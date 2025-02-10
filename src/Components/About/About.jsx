import React from "react";

const About = () => {
  return (
    <div className="md:w-10/12 mx-auto">
      <section className="text-center text-white w-10/12 mx-auto md:w-full lg:px-[130px] lg:py-[150px]">
        <h3 className="text-4xl font-bold mb-5 md:mb-10">
          About Me
        </h3>
        <p className="text-lg mb-5 md:mb-10 text-justify">
        From the moment I wrote my first "Hello, World!" my programming journey has been a thrilling adventure of constant learning and creative exploration, evolving from experimenting with simple scripts to tackling complex, real-world challenges with languages like Python and JavaScript. I thrive on work that not only tests my technical skills but also fuels my passion for innovation, particularly in projects that merge problem-solving with a touch of artistry—be it through designing user-friendly applications or streamlining backend systems for efficiency. Outside of programming, I find balance and inspiration in a variety of pursuits; whether I’m getting lost in the rhythm of competitive sports or expressing myself through painting, these hobbies recharge my creative spirit and provide fresh perspectives that I bring back to my coding projects. At my core, I’m a curious and driven individual who believes in embracing every challenge as an opportunity to grow and make a meaningful impact, both in technology and in life.
        </p>
        <div className="flex flex-col lg:flex-row justify-around">
          <div className="about-item">
            <p className="text-xl mb-3">Name:</p>
            <p className="font-bold text-xl text-[#474747]">Sanjida Khanam</p>
          </div>
          <div className="about-item">
            <p className="text-xl mb-3">Email:</p>
            <p className="font-bold text-xl text-[#474747]">
              sanjida.ice.778@gmail.com
            </p>
          </div>
         
          <div className="about-item">
            <p className="text-xl mb-3">From:</p>
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
