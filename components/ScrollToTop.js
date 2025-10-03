import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  return visible ? (
    <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 cursor-pointer p-3 rounded-full bg-yellow-300 text-black">
      <FaArrowUp />
    </div>
  ) : null;
};

export default ScrollToTop;
