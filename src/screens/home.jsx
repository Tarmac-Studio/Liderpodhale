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
    <div className="w-full">
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

      <section className="bg-black text-white flex px-20 flex-col md:flex-row py-10 gap-15">
        {/* Left Image with overlay and text */}
        <div className="relative w-full md:w-1/2 h-[300px]">
          {/* Image */}
          <img src={car} alt="Why Us" className="w-full h-full object-cover" />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60 z-10" />

          {/* Text Overlay */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6">
            {/* Blue line */}
            <div className="h-[3px] w-50 bg-blue-500 mt-4" />
            <h2 className="text-8xl font-serif mt-8">Why Us?</h2>
          </div>
        </div>

        {/* Optional Right Side — leave empty or add more content */}
        <div className="w-full md:w-1/2 hidden md:block justify-center items-center">
          <div className="bg-[#10101099] p-8 shadow-md max-w-md">
            <p className="text-lg leading-relaxed text-center">
              Lider has been on the market since 2006 and is the first such
              office in this region. In our business, we offer a wide selection
              of motor, property, life and agricultural insurance.
            </p>
          </div>
        </div>
      </section>
      
      <section
        className="relative bg-cover bg-center text-white text-center py-32"
        style={{ backgroundImage: `url(${real})` }}
      >
        <h4 className="uppercase tracking-widest text-sm">Super Fast</h4>
        <h1 className="text-5xl md:text-6xl font-serif mt-2">REALIZATION</h1>
        <p className="mt-4 text-lg">You save time with us, health and money</p>
      </section>
      {/* Trust Us */}
      <section className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <div className="max-w-md text-center md:text-left">
            <p>
              The LIDER office offers mediation in the registration of vehicles
              both imported from abroad and purchased in Poland together with
              the necessary fees in all offices.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src={house}
            alt="Trust Us"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      {/* Offers */}
      <section
        className="relative bg-cover bg-center text-center py-32"
        style={{ backgroundImage: `url(${house2})` }}
      >
        <h4 className="uppercase tracking-widest text-sm">Attractive</h4>
        <h1 className="text-5xl md:text-6xl mt-2">OFFERS</h1>
        <p className="mt-4 text-lg">Explore a wide office formalities</p>
      </section>
      {/* Our Offers */}
      <section className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <img src={flags} alt="Flags" className="w-full h-full object-cover" />
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <div className="max-w-md text-center md:text-left">
            <h2 className="text-4xl mb-4">Our Offers</h2>
            <p>
              Excellent knowledge of foreign languages, careful tracking of all
              linguistic changes is our passion. We guarantee accurate and
              reliable translation, regardless of language and subject!
            </p>
          </div>
        </div>
      </section>
      {/* Formalities */}
      <section
        className="relative bg-cover bg-center text-center py-32"
        style={{ backgroundImage: `url(${plane})` }}
      >
        <h4 className="uppercase tracking-widest text-sm">Comprehensive</h4>
        <h1 className="text-5xl md:text-6xl mt-2">FORMALITIES</h1>
        <p className="mt-4 text-lg">
          We’ll do all of them for you formalities and more
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
  );
}

export default Home;
