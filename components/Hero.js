import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Full-Stack Developer", "Machine Learning Enthusiast", "Competitive Programmer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Swayam Gupta</h1>
      <span className="text-2xl text-blue-500" ref={typedRef}></span>
    </section>
  );
};

export default Hero;
