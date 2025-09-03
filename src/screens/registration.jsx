import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Images/logo.png";
import insurCar from "../assets/Images/reg-car.jpg";
import car from "../assets/Images/why-us car.jpg";
import mercedes from "../assets/Images/mercedes car.jpg";
import mustang from "../assets/Images/mustang.jpg";
import white from "../assets/Images/white.jpeg";

function registration() {
  return (
    <div>
      <div className="bg-black text-white">
        {/* Header */}
        <header
          className="relative bg-cover bg-center h-[300px] text-white flex flex-col justify-center items-center text-center"
          style={{ backgroundImage: `url(${insurCar})` }}
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
            REGISTER YOUR
          </h4>

          <h1 className="absolute text-5xl md:text-6xl mt-30">VEHICLE</h1>
        </header>

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

        <section className="bg-black text-white flex flex-col md:flex-row px-20 mt-15 gap-3">
          {/* Left Side */}
          <div className="relative flex-1 h-[300px]">
            <img
              src={car}
              alt="Why Us"
              className="w-full h-full object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/70 z-10" />

            {/* Text Overlay */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6">
              <div className="h-[3px] w-50 bg-[#36B5EB] mt-4" />
              <h2 className="text-8xl mt-8">Why Us?</h2>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1 h-[300px] flex justify-center items-center">
            <div className="bg-[#10101099] p-8 shadow-md w-full h-full flex items-center justify-center">
              <p className="text-xl leading-relaxed text-center max-w-md">
                The " LIDER " office offers mediation in the registration of
                vehicles both imported from abroad and purchased in Poland
                together with the necessary fees in all offices.
              </p>
            </div>
          </div>
        </section>

        <section
          className="relative bg-cover bg-center text-white text-center py-18 mt-30"
          style={{ backgroundImage: `url(${mercedes})` }}
        >
          {/* Black overlay (below text) */}
          <div className="absolute inset-0 bg-black/75 z-0" />

          {/* Text content (above overlay) */}
          <div className="relative z-10">
            <h4 className="uppercase tracking-widest text-xl">INSTANT</h4>
            <h1 className="text-5xl md:text-8xl font-normal mt-2">
              REGISTRATION
            </h1>
            <p className="mt-4 font-thin text-lg">
              You save time with us, health and money
            </p>
          </div>
        </section>

        <section className="bg-black text-white flex flex-col md:flex-row px-20 mt-30 gap-3">
          {/* Left Side */}
          <div className="flex-1 h-[300px] flex justify-center items-center">
            <div className="bg-[#10101099] p-8 shadow-md w-full h-full flex items-center justify-center">
              <p className="text-xl leading-relaxed text-center max-w-md">
                We register all types of vehicles, including passenger cars,
                trucks, specialized cars, agricultural tractors, mopeds,
                motorcycles, trailers, etc.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1 h-[300px] flex justify-center items-center">
            <div className="bg-[#10101099] p-8 shadow-md w-full h-full flex items-center justify-center">
              <p className="text-xl leading-relaxed text-center max-w-md">
                Comprehensive fees ( Customs Office, Tax Office, Department of
                Communication, document translations, recycling ) and complete
                re-registration of vehicles imported from abroad.
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
            <h4 className="uppercase tracking-widest text-xl">COMPREHENSIVE</h4>
            <h1 className="text-5xl md:text-8xl font-normal mt-2">FORMALISM</h1>
            <p className="mt-4 font-thin text-lg">
              We will arrange all formalities for you related to vehicle
              registration{" "}
            </p>
          </div>
        </section>

        <section
          className="relative bg-cover bg-center text-white text-center py-15 mt-30"
          style={{ backgroundImage: `url(${white})` }}
        >
          {/* Black overlay (below text) */}
          <div className="absolute inset-0 bg-black/75 z-0" />

          {/* Text content (above overlay) */}
          <div className="relative z-10">
            <h4 className="uppercase tracking-widest text-xl">TRUST</h4>
            <h1 className="text-5xl md:text-8xl font-normal mt-2">US</h1>
            <p className="mt-4 font-thin text-lg">
              We provide full professionalismcompleting formalities{" "}
            </p>
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

export default registration;
