import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Images/logo.png";
import flag from "../assets/Images/flags.jpg";
import mercedes from "../assets/Images/mercedes car.jpg";
import mustang from "../assets/Images/mustang.jpg";
import car3 from "../assets/Images/car3.jpg";
import comm from "../assets/Images/comm.jpg";

function translations() {
  return (
    <div>
      <div className="bg-black text-white font-serif">
        {/* Header */}
        <header
          className="relative bg-cover bg-center h-[300px] text-white flex flex-col justify-center items-center text-center"
          style={{ backgroundImage: `url(${flag})` }}
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
            TRANSLATIONS
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
          className="relative bg-cover bg-center text-white text-center py-20 mt-10"
          style={{
            backgroundImage: `url(${mercedes})`,
            width: "100%",
            height: "300px",
          }}
        >
          <h4 className="uppercase tracking-widest text-sm">PROFESSIONAL</h4>
          <h1 className="text-5xl md:text-6xl font-serif mt-2">TRANSLATIONS</h1>
          <p className="mt-4 text-lg">
            Quality guarantee for translators documents
          </p>
        </section>

        <section className="flex flex-col md:flex-row h-100">
          <div className="w-full md:w-1/2 flex items-center justify-center p-8">
            <div className="max-w-md text-center md:text-left">
              <p>
                Years of experience have enabled us to provide you with the
                certainty of a perfect translation. By providing us with texts
                you receive their most faithful translation into any language
                you choose.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center p-8">
            <div className="max-w-md text-center md:text-left">
              <p>
                Excellent knowledge of foreign languages, careful tracking of
                all linguistic changes is our passion. We guarantee accurate and
                reliable translation, regardless of language and subject!
              </p>
            </div>
          </div>
        </section>

        <section
          className="relative bg-cover bg-center text-white text-center py-20 mt-10"
          style={{
            backgroundImage: `url(${mustang})`,
            width: "100%",
            height: "300px",
          }}
        >
          <h4 className="uppercase tracking-widest text-sm">PROFESSIONAL</h4>
          <h1 className="text-5xl md:text-6xl font-serif mt-2">TRANSLATIONS</h1>
          <p className="mt-4 text-lg">
            Quality guarantee for translators documents
          </p>
        </section>

        {/* Vehicles */}
        <section className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <img
              src={car3}
              alt="Vehicles"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8">
            <p className="mb-4">
              Check our registration price vehicle in its area
            </p>
            <button className="bg-blue-800 hover:bg-blue-700 px-6 py-2 rounded">
              See Registration Offer
            </button>
          </div>
        </section>

        {/* Communication */}
        <section className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8">
            <p className="mb-4">Cheap insurance OC and AC</p>
            <button className="bg-blue-800 hover:bg-blue-700 px-6 py-2 rounded">
              See Insurance Offer
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={comm}
              alt="Communication"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Contact */}
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
            <button className="bg-blue-800 hover:bg-blue-700 px-6 py-2 rounded">
              REACH OUT TO US
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default translations;
