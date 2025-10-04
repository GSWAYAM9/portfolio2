import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Full-Stack Developer", "Machine Learning Enthusiast", "Competitive Programmer"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section id="hero" className="flex flex-col items-center justify-center min-h-screen py-20 text-center bg-gray-900 text-white" data-aos="fade-up">
      <img
        src="https://i.ibb.co/ds2ZDW61/profile.jpg"
        alt="Swayam Gupta"
        className="w-40 h-40 rounded-full border-4 border-yellow-300 mb-6"
      />
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Swayam Gupta</h1>
      <p className="text-xl md:text-2xl mb-8 text-gray-300" ref={typedRef}></p>
      {/* Resume Button */}
      <a 
        href="/resume.pdf" 
        download
        className="bg-yellow-300 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors text-lg"
      >
        Download My Resume
      </a>
    </section>
  );
};

export default Hero;
