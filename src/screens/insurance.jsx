import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Images/logo.png";
import insur from "../assets/Images/insurance.jpg";
import insuranceCar from "../assets/Images/car-insurance.jpg";
import car from "../assets/Images/why-us car.jpg";
import house2 from "../assets/Images/house2.jpg";
import trusted from "../assets/Images/trusted.png";

function insurance() {
  return (
    <div>
      <div className="bg-black text-white font-serif">
        {/* Header */}
        <header
          className="relative bg-cover bg-center h-[300px] text-white flex flex-col justify-center items-center text-center"
          style={{ backgroundImage: `url(${insur})` }}
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
            EXPLORE OUR
          </h4>

          <h1 className="absolute text-5xl md:text-6xl mt-30">INSURANCE</h1>
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
          className="relative bg-cover bg-center text-white text-center py-32"
          style={{
            backgroundImage: `url(${insuranceCar})`,
            width: "100%",
            height: "400px",
          }}
        >
          <h4 className="uppercase tracking-widest text-sm">LOW PRICE</h4>
          <h1 className="text-5xl md:text-6xl font-serif mt-2">INSURANCE</h1>
        </section>

        <section className="bg-black text-white flex px-20 flex-col md:flex-row py-10 gap-15">
          {/* Left Image with overlay and text */}
          <div className="relative w-full md:w-1/2 h-[300px]">
            {/* Image */}
            <img
              src={car}
              alt="Why Us"
              className="w-full h-full object-cover"
            />

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
                office in this region. In our business, we offer a wide
                selection of motor, property, life and agricultural insurance.
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row h-100">
          <div className="w-full md:w-1/2 flex items-center justify-center p-8">
            <div className="max-w-md text-center md:text-left">
              <p>
                The subject of insurance is the civil liability of any person
                who, while driving a motor vehicle during the duration of the
                insurance contract, caused damage in connection with the
                movement of that vehicle.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center p-8">
            <div className="max-w-md text-center md:text-left">
              <p>
                “ Lider "offers you the best offers on the market of known
                insurance companies. We guarantee the greatest professionalism
                and advice regarding vehicle insurance.
              </p>
            </div>
          </div>
        </section>

        {/* Offers */}
        <section
          className="relative bg-cover bg-center text-center py-32"
          style={{ backgroundImage: `url(${house2})` }}
        >
          <h4 className="uppercase tracking-widest text-sm">BEST</h4>
          <h1 className="text-5xl md:text-6xl mt-2">OFFERS</h1>
          <p className="mt-4 text-lg">
            Cooperation with the best societies Insurance
          </p>
        </section>

        <section className="bg-black text-white flex px-20 flex-col md:flex-row py-20 gap-15">
          {/* Left Image with overlay and text */}
          <div className="relative w-full h-100%">
            {/* Image */}
            <img
              src={trusted}
              alt="Why Us"
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

export default insurance;
