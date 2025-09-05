import React from "react";
import logo from "../assets/Images/logo.png";
import flag from "../assets/Images/flags.jpg";
import mercedes from "../assets/Images/mercedes car.jpg";
import mustang from "../assets/Images/mustang.jpg";
import car3 from "../assets/Images/car3.jpg";
import comm from "../assets/Images/comm.jpg";
import Navbar from "../components/navbar.jsx";

function Translations() {
  return (
    <div>
      <div className="bg-black text-white font-serif">
        {/* Header */}
        <header
          className="relative bg-cover bg-center h-[250px] sm:h-[300px] md:h-[400px] text-white flex flex-col justify-center items-center text-center"
          style={{ backgroundImage: `url(${flag})` }}
        >
          <div className="absolute inset-0 bg-black/70 z-0" />

          {/* Top bar */}
          <div className="absolute px-4 sm:px-10 md:px-20 top-2 sm:top-5 md:top-8 left-0 w-full flex justify-between text-[10px] sm:text-xs md:text-sm">
            <span>hotline: +48 511 245 533</span>
            <span>mail: new@liderpodhale.pl</span>
          </div>

          {/* Logo */}
          <div className="absolute top-2 sm:top-4 md:top-0 left-1/2 transform -translate-x-1/2">
            <img
              src={logo}
              alt="Lider Logo"
              className="w-12 sm:w-16 md:w-20 lg:w-28"
            />
          </div>

          {/* Page Title */}
          <h4 className="relative uppercase tracking-widest text-xs sm:text-sm md:text-base mt-12">
            TRANSLATIONS
          </h4>

          <h1 className="relative text-3xl sm:text-5xl md:text-6xl mt-4">
            DOCUMENTS
          </h1>
        </header>

        {/* Navbar Section */}
        <Navbar />

        {/* Section: Mercedes */}
        <section
          className="relative bg-cover bg-center text-white text-center py-16 sm:py-20 md:py-28 mt-10"
          style={{ backgroundImage: `url(${mercedes})` }}
        >
          <div className="absolute inset-0 bg-black/75 z-0" />

          <div className="relative z-10 px-4">
            <h4 className="uppercase tracking-widest text-sm sm:text-xl">
              PROFESSIONAL
            </h4>
            <h1 className="text-3xl sm:text-5xl md:text-7xl mt-2">
              TRANSLATIONS
            </h1>
            <p className="mt-4 font-thin text-sm sm:text-lg">
              Quality guarantee for translators documents
            </p>
          </div>
        </section>

        {/* Section: Experience */}
        <section className="bg-black min-h-[400px] md:h-[500px] text-white flex flex-col md:flex-row px-6 sm:px-10 md:px-20 mt-10 md:mt-30 gap-3">
          <div className="flex-1 flex justify-center items-center">
            <div className="bg-[#10101099] p-6 sm:p-8 shadow-md w-full h-full flex items-center justify-center">
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-center max-w-md">
                Years of experience have enabled us to provide you with the
                certainty of a perfect translation. By providing us with texts
                you receive their most faithful translation into any language
                you choose.
              </p>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="bg-[#10101099] p-6 sm:p-8 shadow-md w-full h-full flex items-center justify-center">
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-center max-w-md">
                Excellent knowledge of foreign languages, careful tracking of
                all linguistic changes is our passion. We guarantee accurate and
                reliable translation, regardless of language and subject!
              </p>
            </div>
          </div>
        </section>

        {/* Section: Mustang */}
        <section
          className="relative bg-cover bg-center text-white text-center py-16 sm:py-20 md:py-28 mt-10"
          style={{ backgroundImage: `url(${mustang})` }}
        >
          <div className="absolute inset-0 bg-black/75 z-0" />

          <div className="relative z-10 px-4">
            <h4 className="uppercase tracking-widest text-sm sm:text-xl">
              LOW
            </h4>
            <h1 className="text-3xl sm:text-5xl md:text-7xl mt-2">PRICES</h1>
            <p className="mt-4 font-thin text-sm sm:text-lg">
              The best prices on the market translations
            </p>
          </div>
        </section>

        {/* Vehicles */}
        <section className="bg-black min-h-[350px] sm:min-h-[400px] md:h-[500px] text-white flex flex-col md:flex-row px-4 sm:px-10 md:px-20 mt-16 md:mt-30 gap-3">
          <div className="relative flex-1">
            <img
              src={car3}
              alt="Why Us"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70 z-10" />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-4">
              <h2 className="text-xs sm:text-base md:text-lg font-thin">
                REGISTRATION
              </h2>
              <h2 className="text-2xl sm:text-4xl md:text-5xl mt-4 sm:mt-8">
                VEHICLES
              </h2>
            </div>
          </div>

          <div className="flex-1 flex justify-center items-center">
            <div className="bg-[#10101099] p-4 sm:p-6 md:p-8 shadow-md w-full h-full flex flex-col gap-3 items-center justify-center">
              <p className="text-sm sm:text-lg md:text-xl leading-relaxed text-center max-w-md">
                Check our registration price vehicle in its area
              </p>
              <button className="bg-[#162A5D] hover:bg-blue-700 px-4 sm:px-6 md:px-8 py-2 rounded-lg text-sm sm:text-base">
                See Registration Offer
              </button>
            </div>
          </div>
        </section>

        {/* Communication */}
        <section className="bg-black min-h-[350px] sm:min-h-[400px] md:h-[500px] text-white flex flex-col md:flex-row px-4 sm:px-10 md:px-20 mt-16 md:mt-30 gap-3">
          <div className="flex-1 flex justify-center items-center">
            <div className="bg-[#10101099] p-4 sm:p-6 md:p-8 shadow-md w-full h-full flex flex-col gap-3 items-center justify-center">
              <p className="text-sm sm:text-lg md:text-xl leading-relaxed text-center max-w-md">
                Cheap insurance OC and AC
              </p>
              <button className="bg-[#162A5D] hover:bg-blue-700 px-4 sm:px-6 md:px-8 py-2 rounded-lg text-sm sm:text-base">
                See Insurance Offer
              </button>
            </div>
          </div>
          <div className="relative flex-1">
            <img
              src={comm}
              alt="Why Us"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70 z-10" />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-4">
              <h2 className="text-xs sm:text-base md:text-lg font-thin">
                INSURANCE
              </h2>
              <h2 className="text-2xl sm:text-3xl md:text-4xl mt-4 sm:mt-8">
                COMMUNICATION
              </h2>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Translations;
