import React from "react";
import doc from "../assets/Images/doc.jpg";
import logo from "../assets/Images/logo.png";
import { NavLink } from "react-router-dom";
import real from "../assets/Images/real.jpg";

function documents() {
  return (
    <div>
      <div className="bg-black text-white font-serif">
        {/* Header */}
        <header
          className="relative bg-cover bg-center h-[300px] text-white flex flex-col justify-center items-center text-center"
          style={{ backgroundImage: `url(${doc})` }}
        >
          <div className="absolute inset-0 bg-black/70 z-0" />

          {/* Top bar */}
          <div className="absolute top-0 left-0 w-full flex px-20 justify-between p-4 text-sm">
            <span>hotline: +48 511 245 533</span>
            <span>mail: newtarg@liderpodhale.pl</span>
          </div>

          <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
            <img src={logo} alt="Lider Logo" className="w-20 md:w-30" />
          </div>

          <h4 className="absolute uppercase tracking-widest text-sm mt-10">
            FOREIGN DESIGNS
          </h4>
          <h1 className="absolute text-5xl md:text-6xl mt-30">DOCUMENTS</h1>
        </header>

        {/* <ul className="flex flex-wrap justify-center space-x-6 py-4 text-sm md:text-base"> */}

        {/* Navbar Section */}
        <nav className="w-full bg-[#162A5D] py-6 px-20">
          <ul className="w-full px-20 flex justify-center items-center gap-10 text-white text-sm font-Montaga">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
                    : "hover:text-yellow-400"
                }
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/insurance"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
                    : "hover:text-yellow-400"
                }
              >
                INSURANCE
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/registration"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
                    : "hover:text-yellow-400"
                }
              >
                REGISTRATION
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/translations"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
                    : "hover:text-yellow-400"
                }
              >
                TRANSLATIONS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/downloads"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
                    : "hover:text-yellow-400"
                }
              >
                DOWNLOADS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/documents"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
                    : "hover:text-yellow-400"
                }
              >
                DOCUMENTS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
                    : "hover:text-yellow-400"
                }
              >
                CONTACT US
              </NavLink>
            </li>
          </ul>
        </nav>

        <section
          className="relative bg-cover bg-center h-[400px] flex flex-col justify-center items-center text-center px-4"
          style={{ backgroundImage: `url(${real})` }}
        >
          {/* Overlay for darkening */}
          {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

          {/* Content */}
          <div className="relative z-10 max-w-3xl">
            <h4 className="uppercase text-sm tracking-widest mb-2">Foreign</h4>
            <h1 className="text-5xl md:text-6xl font-serif">DOCUMENTS</h1>
            <p className="mt-4 text-lg">
              Select a country from the list to view the document templates that
              apply to it.
            </p>

            {/* Select dropdown */}
            <div className="mt-10 relative">
              <select
                className="bg-[#162A5D] text-white pl-4 py-3 rounded-lg text-lg outline-none appearance-none w-full"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Country
                </option>
                <option value="poland">Poland</option>
                <option value="france">France</option>
                <option value="germany">Germany</option>
                <option value="italy">Italy</option>
              </select>

              {/* Custom Arrow */}
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                ▼
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default documents;
