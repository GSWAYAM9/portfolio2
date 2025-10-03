import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-between py-20 px-6 max-w-6xl mx-auto"
    >
      <div className="text-center md:text-left md:w-1/2" data-aos="fade-right">
        <h1 className="text-5xl font-bold mb-4 text-white">
          Hi, I'm Swayam Gupta
        </h1>
        <p className="text-gray-300 mb-6">
          B.Tech CSE Student | Machine Learning & Web Development Enthusiast
        </p>
        <a
          href="#contact"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
        >
          Contact Me
        </a>
      </div>
      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center" data-aos="fade-left">
        <img
          src="https://i.ibb.co/ds2ZDW61/profile.jpg"
          alt="Profile"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-blue-500 shadow-xl"
        />
      </div>
    </section>
  );
};

export default Hero;
