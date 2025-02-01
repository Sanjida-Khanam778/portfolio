import React from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div>
      <section className="max-w-screen-lg mx-auto">
        <Banner></Banner>
       
      </section>
      <section className="max-w-screen-xl mx-auto">
      <About></About>
        <Skills></Skills>
        <Education></Education>
        <Projects></Projects>
        <Contact></Contact>
      </section>
    </div>
  );
};

export default Home;
