import React from "react";
import js from "../../assets/icons/js.png";
import react from "../../assets/icons/react.png";
import node from "../../assets/icons/nodejs.png";
import mongodb from "../../assets/icons/mongo.png";
import html from "../../assets/icons/html.png";
import css from "../../assets/icons/css.png";
const Skills = () => {
  return (
    <div className="my-10 lg:my-24 max-w-screen-lg mx-auto">
      <section className="skills">
        <h3 className="font-bold text-xl lg:text-3xl mb-3 text-center">
          Skills
        </h3>
        <p className="section-description mb-4 md:mb-8 text-center">
          Tools & Technologies That Shape My Craft
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-6">
          <div className="p-7 rounded-md shadow-custom-dark">
            <img src={html} className="mx-auto" alt="" />
            <h4 className="font-bold mt-3 text-center">HTML</h4>
          </div>
          <div className="p-7 rounded-md shadow-custom-dark">
            <img src={css} className="mx-auto" alt="" />
            <h4 className="font-bold mt-3 text-center">CSS</h4>
          </div>
          <div className="p-7 rounded-md shadow-custom-dark">
            <img src={js} className="mx-auto" alt="" />
            <h4 className="font-bold mt-3 text-center">Vanilla JavaScript</h4>
          </div>
          <div className="p-7 rounded-md shadow-custom-dark">
            <img src={react} className="mx-auto" alt="" />
            <h4 className="font-bold mt-3 text-center">React</h4>
          </div>
          <div className="p-7 rounded-md shadow-custom-dark">
            <img src={node} className="mx-auto" alt="" />
            <h4 className="font-bold mt-3 text-center">Node.js</h4>
          </div>
          <div className="p-7 rounded-md shadow-custom-dark">
            <img src={mongodb} className="mx-auto" alt="" />
            <h4 className="font-bold mt-3 text-center">MongoDB</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;