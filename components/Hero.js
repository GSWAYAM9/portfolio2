"use client";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Machine Learning Enthusiast", "Full-Stack Developer", "Competitive Programmer"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">Hi, I'm Swayam Gupta</h1>
      <p className="text-gray-300 text-xl md:text-2xl">
        <span ref={typedRef}></span>
      </p>
    </section>
  );
}
