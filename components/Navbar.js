import { Link } from 'react-scroll';

const Navbar = () => {
  const links = ["hero", "about", "skills", "projects", "achievements", "contact"];
  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-white shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <span className="font-bold text-2xl">Swayam</span>
        <div className="space-x-6">
          {links.map((link) => (
            <Link key={link} to={link} smooth={true} duration={500} className="cursor-pointer hover:text-yellow-300">
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
