"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-gray-950 bg-opacity-90 backdrop-blur-md shadow-md">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
        <div className="text-2xl font-bold text-white">Swayam Gupta</div>
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-gray-300 hover:text-blue-400 transition">
              {link.name}
            </Link>
          ))}
        </div>
        <div className="md:hidden text-white" onClick={toggleMenu}>
          {open ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-gray-900">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} onClick={toggleMenu} className="text-gray-300 hover:text-blue-400 text-lg transition">
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
