import React from "react";
import bgImage from "../assets/Images/hero-image.jpg";
import logo from "../assets/Images/logo.png";
import ukraineFlag from "../assets/Images/ukraine-flag.png";
import polandFlag from "../assets/Images/poland-flag.png";
import car from "../assets/Images/why-us car.jpg";
import real from "../assets/Images/real.jpg";
import house from "../assets/Images/house.jpg";
import house2 from "../assets/Images/house2.jpg";
import flags from "../assets/Images/flags.jpg";
import plane from "../assets/Images/plane.jpg";
import car3 from "../assets/Images/car3.jpg";
import comm from "../assets/Images/comm.jpg";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="w-full bg-black text-white">
      {/* Hero Section */}
      <section
        className="min-h-[90vh] w-full bg-cover bg-center bg-no-repeat overflow-x-hidden text-white relative"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/70 z-0" />

        {/* Top Bar */}
        <div className="absolute px-20 top-10 left-0 w-full flex justify-between p-4 text-sm md:text-base">
          <span>hotline: +48 511 245 533</span>

          <div className="flex flex-col items-end gap-y-2">
            <span>mail: newtarg@liderpodhale.pl</span>

            <div className="flex gap-2">
              <img src={ukraineFlag} alt="UA" className="w-6 h-5" />
              <img src={polandFlag} alt="PL" className="w-6 h-5" />
            </div>
          </div>
        </div>

        <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
          <img src={logo} alt="Lider Logo" className="w-20 md:w-30" />
        </div>

        <div className="absolute bottom-10 px-20 w-full text-right">
          <p className="tracking-widest text-sm md:text-base">MULTI-AGENCY</p>
          <h1 className="text-4xl md:text-6xl font-serif">LEADER</h1>
        </div>
      </section>

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
          <img src={car} alt="Why Us" className="w-full h-full object-cover" />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/70 z-10" />

          {/* Text Overlay */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6">
            <div className="h-[3px] w-50 bg-[#36B5EB] mt-4" />
            <h2 className="text-8xl font-serif mt-8">Why Us?</h2>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 h-[300px] flex justify-center items-center">
          <div className="bg-[#10101099] p-8 shadow-md w-full h-full flex items-center justify-center">
            <p className="text-xl leading-relaxed text-center max-w-md">
              Lider has been on the market since 2006 and is the first such
              office in this region. In our business, we offer a wide selection
              of motor, property, life and agricultural insurance.
            </p>
          </div>
        </div>
      </section>

      {/* Realization */}
      <section
        className="relative bg-cover bg-center text-white text-center py-18 mt-30"
        style={{ backgroundImage: `url(${real})` }}
      >
        {/* Black overlay (below text) */}
        <div className="absolute inset-0 bg-black/75 z-0" />

        {/* Text content (above overlay) */}
        <div className="relative z-10">
          <h4 className="uppercase tracking-widest text-xl">Super Fast</h4>
          <h1 className="text-5xl md:text-8xl font-normal mt-2">REALIZATION</h1>
          <p className="mt-4 font-thin text-lg">
            You save time with us, health and money
          </p>
        </div>
      </section>

      {/* Trust Us */}
      <section className="bg-black text-white flex flex-col md:flex-row px-20 mt-30 gap-3">
        <div className="flex-1 h-[300px] flex justify-center items-center">
          <div className="bg-[#10101099] p-8 shadow-md w-full h-full flex items-center justify-center">
            <p className="text-xl leading-relaxed text-center max-w-md">
              The "LIDER" office offers mediation in the registration of
              vehicles both imported from abroad and purchased in Poland
              together with the necessary fees in all offices.
            </p>
          </div>
        </div>
        <div className="relative flex-1 h-[300px]">
          <img
            src={house}
            alt="Why Us"
            className="w-full h-full object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/70 z-10" />

          {/* Text Overlay */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6">
            <div className="h-[3px] w-50 bg-[#36B5EB] mt-4" />
            <h2 className="text-7xl font-serif mt-8">Trust Us</h2>
          </div>
        </div>
      </section>

      {/* Offers */}
      <section
        className="relative bg-cover bg-center text-white text-center py-18 mt-30"
        style={{ backgroundImage: `url(${house2})` }}
      >
        {/* Black overlay (below text) */}
        <div className="absolute inset-0 bg-black/75 z-0" />

        {/* Text content (above overlay) */}
        <div className="relative z-10">
          <h4 className="uppercase tracking-widest text-xl">ATTRACTIVE</h4>
          <h1 className="text-5xl md:text-8xl font-normal mt-2">OFFERS</h1>
          <p className="mt-4 font-thin text-lg">
            Explore A wide office formalities{" "}
          </p>
        </div>
      </section>

      {/* Our Offers */}
      <section className="bg-black text-white flex flex-col md:flex-row px-20 mt-30 gap-3">
        {/* Left Side */}
        <div className="relative flex-1 h-[300px]">
          <img
            src={flags}
            alt="Why Us"
            className="w-full h-full object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/70 z-10" />

          {/* Text Overlay */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6">
            <div className="h-[3px] w-50 bg-[#36B5EB] mt-4" />
            <h2 className="text-7xl font-serif mt-8">Our Offers</h2>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 h-[300px] flex justify-center items-center">
          <div className="bg-[#10101099] p-8 shadow-md w-full h-full flex items-center justify-center">
            <p className="text-xl leading-relaxed text-center max-w-md">
              Excellent knowledge of foreign languages, careful tracking of all
              linguistic changes is our passion. We guarantee accurate and
              reliable translation, regardless of language and subject!
            </p>
          </div>
        </div>
      </section>

      {/* Formalities */}
      <section
        className="relative bg-cover bg-center text-white text-center py-18 mt-30"
        style={{ backgroundImage: `url(${plane})` }}
      >
        {/* Black overlay (below text) */}
        <div className="absolute inset-0 bg-black/75 z-0" />

        {/* Text content (above overlay) */}
        <div className="relative z-10">
          <h4 className="uppercase tracking-widest text-xl">COMPREHENSIVE</h4>
          <h1 className="text-5xl md:text-8xl font-normal mt-2">FORMALITIES</h1>
          <p className="mt-4 font-thin text-lg">
            We'll do all of them for you formalities and more{" "}
          </p>
        </div>
      </section>

      {/* Vehicles */}
      <section className="bg-black text-white flex flex-col md:flex-row px-20 mt-30 gap-3">
        {/* Left Side */}
        <div className="relative flex-1 h-[300px]">
          <img src={car3} alt="Why Us" className="w-full h-full object-cover" />

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
          <img src={comm} alt="Why Us" className="w-full h-full object-cover" />

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
  );
}

export default Home;
