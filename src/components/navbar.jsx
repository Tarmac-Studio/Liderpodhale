// src/components/Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "HOME", to: "/" },
    { name: "INSURANCE", to: "/insurance" },
    { name: "REGISTRATION", to: "/registration" },
    { name: "TRANSLATIONS", to: "/translations" },
    { name: "DOWNLOADS", to: "/downloads" },
    { name: "DOCUMENTS", to: "/documents" },
    { name: "CONTACT US", to: "/contact" },
  ];

  return (
    <nav className="w-full bg-[#162A5D] py-6 px-6 lg:px-20">
      <div className="flex justify-between items-center">
        {/* ✅ Desktop Menu (only visible ≥1024px) */}
        <ul className="hidden lg:flex w-full justify-center items-center gap-10 text-white text-lg">
          {links.map((link, idx) => (
            <li key={idx}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#FFFB00] border-b-2 border-[#FFFB00] pb-2 px-2"
                    : "hover:text-[#FFFB00]"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ✅ Mobile & Tablet Hamburger Button (visible <1024px) */}
        <div className="lg:hidden flex justify-end w-full pr-5">
          <button className="text-white" onClick={() => setIsOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* ✅ Mobile & Tablet Drawer Menu (slides in from right) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#162A5D] shadow-lg transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)} className="text-white">
            <X size={28} />
          </button>
        </div>

        {/* Links */}
        <ul className="flex flex-col gap-6 mt-6 px-6 text-white text-lg">
          {links.map((link, idx) => (
            <li key={idx}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "block text-[#FFFB00] border-l-4 border-[#FFFB00] pl-2"
                    : "hover:text-[#FFFB00] block"
                }
                onClick={() => setIsOpen(false)} // close menu after click
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
