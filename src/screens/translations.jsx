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
          className="relative bg-cover bg-center text-white text-center py-18 mt-15"
          style={{ backgroundImage: `url(${mercedes})` }}
        >
          {/* Black overlay (below text) */}
          <div className="absolute inset-0 bg-black/75 z-0" />

          {/* Text content (above overlay) */}
          <div className="relative z-10">
            <h4 className="uppercase tracking-widest text-xl">PROFESSIONAL</h4>
            <h1 className="text-5xl md:text-8xl font-normal mt-2">
              TRANSLATIONS
            </h1>
            <p className="mt-4 font-thin text-lg">
              Quality guarantee for translators documents{" "}
            </p>
          </div>
        </section>

        <section className="bg-black text-white flex flex-col md:flex-row px-20 mt-30 gap-3">
          {/* Left Side */}
          <div className="flex-1 h-[300px] flex justify-center items-center">
            <div className="bg-[#10101099] p-8 shadow-md w-full h-full flex items-center justify-center">
              <p className="text-xl leading-relaxed text-center max-w-md">
                Years of experience have enabled us to provide you with the
                certainty of a perfect translation. By providing us with texts
                you receive their most faithful translation into any language
                you choose.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1 h-[300px] flex justify-center items-center">
            <div className="bg-[#10101099] p-8 shadow-md w-full h-full flex items-center justify-center">
              <p className="text-xl leading-relaxed text-center max-w-md">
                Excellent knowledge of foreign languages, careful tracking of
                all linguistic changes is our passion. We guarantee accurate and
                reliable translation, regardless of language and subject!
              </p>
            </div>
          </div>
        </section>

        <section
          className="relative bg-cover bg-center text-white text-center py-18 mt-30"
          style={{ backgroundImage: `url(${mustang})` }}
        >
          {/* Black overlay (below text) */}
          <div className="absolute inset-0 bg-black/75 z-0" />

          {/* Text content (above overlay) */}
          <div className="relative z-10">
            <h4 className="uppercase tracking-widest text-xl">LOW</h4>
            <h1 className="text-5xl md:text-8xl font-normal mt-2">PRICES</h1>
            <p className="mt-4 font-thin text-lg">
              The best prices on the market translations{" "}
            </p>
          </div>
        </section>

        {/* Vehicles */}
        <section className="bg-black text-white flex flex-col md:flex-row px-20 mt-30 gap-3">
          {/* Left Side */}
          <div className="relative flex-1 h-[300px]">
            <img
              src={car3}
              alt="Why Us"
              className="w-full h-full object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/70 z-10" />

            {/* Text Overlay */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6">
              <h2 className="text-lg font-thin">REGISTRATION</h2>
              <h2 className="text-5xl mt-8">VEHICLES</h2>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1 h-[300px] flex justify-center items-center">
            <div className="bg-[#10101099] p-8 shadow-md w-full h-full flex flex-col gap-3 items-center justify-center">
              <p className="text-xl leading-relaxed text-center max-w-md">
                Check our registration price vehicle in its area
              </p>
              <button className="bg-[#162A5D] hover:bg-blue-700 px-8 py-2 rounded-lg">
                See Registration Offer
              </button>
            </div>
          </div>
        </section>

        {/* Communication */}
        <section className="bg-black text-white flex flex-col md:flex-row px-20 mt-30 gap-3">
          <div className="flex-1 h-[300px] flex justify-center items-center">
            <div className="bg-[#10101099] p-8 shadow-md w-full h-full flex flex-col gap-3 items-center justify-center">
              <p className="text-xl leading-relaxed text-center max-w-md">
                Cheap insurance OC and AC{" "}
              </p>
              <button className="bg-[#162A5D] hover:bg-blue-700 px-8 py-2 rounded-lg">
                See Insurance Offer
              </button>
            </div>
          </div>
          <div className="relative flex-1 h-[300px]">
            <img
              src={comm}
              alt="Why Us"
              className="w-full h-full object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/70 z-10" />

            {/* Text Overlay */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6">
              <h2 className="text-lg font-thin">INSURANCE</h2>
              <h2 className="text-4xl mt-8">COMMUNICATION</h2>
            </div>
          </div>
        </section>

        {/* Contact */}
        <footer className="text-white mt-30 md:px-2 grid grid-cols-1 md:grid-cols-3 gap-2 items-stretch">
          {/* Box 1 */}
          <div className="bg-[#10101099] p-8 h-full">
            <h5 className="text-sm tracking-widest uppercase mb-1">Fast</h5>
            <h2 className="text-5xl uppercase mb-4">Contact</h2>
            <p className="text-sm">
              Do you want to use our services?
              <br />
              Do you have additional questions?
            </p>
          </div>

          {/* Box 2 */}
          <div className="bg-[#10101099] p-8 h-full">
            <p>
              +48 662 969 662
              <br />( New Market )
            </p>
            <p className="mt-4">
              +48 887 770 774
              <br />( Białka Tatrzańska )
            </p>
          </div>

          {/* Box 3 */}
          <div className="bg-[#10101099] p-8 h-full flex items-center justify-center md:px-2">
            <button className="bg-[#162A5D] hover:bg-blue-700 px-6 py-2 rounded-lg">
              REACH OUT TO US
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default translations;
