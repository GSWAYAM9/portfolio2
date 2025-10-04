import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return visible ? (
    <div 
      onClick={scrollToTop} 
      className="fixed bottom-6 right-6 cursor-pointer p-3 rounded-full bg-yellow-300 text-black hover:bg-yellow-400 transition-colors z-50 shadow-lg"
    >
      <FaArrowUp size={20} />
    </div>
  ) : null;
};

export default ScrollToTop;
