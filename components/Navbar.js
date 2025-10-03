import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-gray-900 text-white">
      <h1 className="text-xl font-bold">Swayam Gupta</h1>
      <div className="flex gap-4 text-2xl">
        <a href="https://linkedin.com/in/swayam-gupta" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/GSWAYAM9" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
