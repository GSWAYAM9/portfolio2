import { Link } from 'react-scroll';

const Navbar = () => {
  const links = ["hero", "about", "skills", "projects", "achievements", "resume", "contact"];
  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-white shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <span className="font-bold text-2xl">Swayam</span>
        <div className="flex items-center space-x-6">
          {links.map((link) => (
            <Link 
              key={link} 
              to={link} 
              smooth={true} 
              duration={500} 
              className="cursor-pointer hover:text-yellow-300 transition-colors hidden md:block"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </Link>
          ))}
          {/* Resume Download Button */}
          <a 
            href="/resume.pdf" 
            download
            className="bg-yellow-300 text-black px-4 py-2 rounded font-bold hover:bg-yellow-400 transition-colors"
          >
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
