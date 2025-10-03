import { FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) setVisible(true);
      else setVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return visible ? (
    <div className="fixed bottom-5 right-5 cursor-pointer text-blue-600" onClick={scrollToTop}>
      <FaArrowUp size={30} />
    </div>
  ) : null;
};

export default ScrollToTop;
