// src/App.jsx
import React from "react";
import { FaDownload } from "react-icons/fa";
import write from "../assets/Images/write.jpg";
import logo from "../assets/Images/logo.png";
import { NavLink } from "react-router-dom";


function downloads() {
  const documents = [
    "Polish–English agreement",
    "Polish–French agreement",
    "Polish–German agreement",
    "Polish–Italian agreement",
    "Polish–Dutch agreement",
    "Donation Agreement",
    "PCC–3 declaration",
    "Declaration under criminal liability",
    "Purchase and sale agreement",
    "ACC–US declaration",
    "Application for sale of area. Nowotarski",
    "Application for sale of area. Tatra",
    "GDPR consent",
    "Power of attorney and Declaration",
  ];

  return (
    <div className="bg-black text-white font-serif">
      {/* Header */}
      <header
        className="relative bg-cover bg-center h-[300px] text-white flex flex-col justify-center items-center text-center"
        style={{ backgroundImage: `url(${write})` }}
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
          Useful Design
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

      {/* Document List */}
      <section className="p-6 md:p-20 max-w-6xl mx-auto space-y-8">
        {documents.map((doc, i) => (
          <div
            key={i}
            className="flex justify-between items-center border border-[#162A5D] rounded px-4 py-4 hover:bg-[#162A5D] cursor-pointer transition"
          >
            <span>{doc}</span>
            <FaDownload />
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h5 className="text-sm tracking-widest uppercase mb-1">Fast</h5>
          <h2 className="text-3xl mb-2">Contact</h2>
          <p className="text-sm">
            Do you want to use our services?
            <br />
            Do you have additional questions?
          </p>
        </div>
        <div>
          <p>
            +48 662 969 662
            <br />
            (New Market)
          </p>
          <p className="mt-2">
            +48 887 770 774
            <br />
            (Białka Tatrzańska)
          </p>
        </div>
        <div className="flex items-center justify-center md:justify-end">
          <button className="bg-[#162A5D]  cursor-pointer px-6 py-2 rounded">
            REACH OUT TO US
          </button>
        </div>
      </footer>
    </div>
  );
}

export default downloads;
