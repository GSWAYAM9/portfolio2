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
    <section id="hero" className="flex flex-col items-center justify-center py-20 text-center bg-gray-900 text-white" data-aos="fade-up">
      <img
        src="https://i.ibb.co/ds2ZDW61/profile.jpg"
        alt="Profile"
        className="w-40 h-40 rounded-full border-4 border-yellow-300 mb-6"
      />
      <h1 className="text-4xl font-bold mb-2">Swayam Gupta</h1>
      <p className="text-xl" ref={typedRef}></p>
    </section>
  );
};

export default Hero;
