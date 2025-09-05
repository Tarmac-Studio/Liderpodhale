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
import Navbar from "../components/navbar";

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
        <div className="absolute px-4 sm:px-10 md:px-20 top-2 sm:top-5 md:top-8 left-0 w-full flex justify-between text-[10px] sm:text-xs md:text-sm">
          <span>hotline: +48 511 245 533</span>

          <div className="flex flex-col items-end gap-y-1 sm:gap-y-2 text-right">
            <span className="text-xs sm:text-sm">
              mail: new@liderpodhale.pl
            </span>
            <div className="flex gap-2">
              <img
                src={ukraineFlag}
                alt="UA"
                className="w-5 h-4 sm:w-6 sm:h-5"
              />
              <img
                src={polandFlag}
                alt="PL"
                className="w-5 h-4 sm:w-6 sm:h-5"
              />
            </div>
          </div>
        </div>

        {/* Logo */}
        <div className="absolute top-2 sm:top-4 md:top-0 left-1/2 transform -translate-x-1/2">
          <img
            src={logo}
            alt="Lider Logo"
            className="w-12 sm:w-16 md:w-20 lg:w-28"
          />
        </div>

        <div className="absolute bottom-6 sm:bottom-10 px-4 sm:px-10 md:px-20 w-full text-right">
          <p className="tracking-widest text-xs sm:text-sm md:text-base">
            MULTI-AGENCY
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif">
            LEADER
          </h1>
        </div>
      </section>

      {/* Navbar Section */}
      <Navbar />

      {/* Why Us Section */}
      <section className="bg-black min-h-[350px] sm:min-h-[400px] md:h-[500px] text-white flex flex-col md:flex-row px-4 sm:px-10 md:px-20 mt-10 md:mt-15 gap-3">
        {/* Left Side */}
        <div className="relative flex-1">
          <img src={car} alt="Why Us" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70 z-10" />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-4">
            <div className="h-[3px] w-24 sm:w-40 bg-[#36B5EB] mt-2" />
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-serif mt-4 sm:mt-8">
              Why Us?
            </h2>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex justify-center items-center">
          <div className="bg-[#10101099] p-4 sm:p-6 md:p-8 shadow-md w-full h-full flex items-center justify-center">
            <p className="text-sm sm:text-lg md:text-xl leading-relaxed text-center max-w-md">
              Lider has been on the market since 2006 and is the first such
              office in this region. In our business, we offer a wide selection
              of motor, property, life and agricultural insurance.
            </p>
          </div>
        </div>
      </section>

      {/* Realization */}
      <section
        className="relative bg-cover bg-center text-white text-center py-12 sm:py-16 md:py-18 mt-16 md:mt-30"
        style={{ backgroundImage: `url(${real})` }}
      >
        <div className="absolute inset-0 bg-black/75 z-0" />
        <div className="relative z-10 px-4 sm:px-6">
          <h4 className="uppercase tracking-widest text-base sm:text-lg md:text-xl">
            Super Fast
          </h4>
          <h1 className="text-3xl sm:text-5xl md:text-8xl font-normal mt-2">
            REALIZATION
          </h1>
          <p className="mt-4 font-thin text-sm sm:text-base md:text-lg">
            You save time with us, health and money
          </p>
        </div>
      </section>

      {/* Trust Us */}
      <section className="bg-black min-h-[350px] sm:min-h-[400px] md:h-[500px] text-white flex flex-col md:flex-row px-4 sm:px-10 md:px-20 mt-16 md:mt-30 gap-3">
        <div className="flex-1 flex justify-center items-center">
          <div className="bg-[#10101099] p-4 sm:p-6 md:p-8 shadow-md w-full h-full flex items-center justify-center">
            <p className="text-sm sm:text-lg md:text-xl leading-relaxed text-center max-w-md">
              The "LIDER" office offers mediation in the registration of
              vehicles both imported from abroad and purchased in Poland
              together with the necessary fees in all offices.
            </p>
          </div>
        </div>
        <div className="relative flex-1">
          <img
            src={house}
            alt="Why Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70 z-10" />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-4">
            <div className="h-[3px] w-24 sm:w-40 bg-[#36B5EB] mt-2" />
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-serif mt-4 sm:mt-8">
              Trust Us
            </h2>
          </div>
        </div>
      </section>

      {/* Offers */}
      <section
        className="relative bg-cover bg-center text-white text-center py-12 sm:py-16 md:py-18 mt-16 md:mt-30"
        style={{ backgroundImage: `url(${house2})` }}
      >
        <div className="absolute inset-0 bg-black/75 z-0" />
        <div className="relative z-10 px-4 sm:px-6">
          <h4 className="uppercase tracking-widest text-base sm:text-lg md:text-xl">
            ATTRACTIVE
          </h4>
          <h1 className="text-3xl sm:text-5xl md:text-8xl font-normal mt-2">
            OFFERS
          </h1>
          <p className="mt-4 font-thin text-sm sm:text-base md:text-lg">
            Explore a wide office formalities
          </p>
        </div>
      </section>

      {/* Our Offers */}
      <section className="bg-black min-h-[350px] sm:min-h-[400px] md:h-[500px] text-white flex flex-col md:flex-row px-4 sm:px-10 md:px-20 mt-16 md:mt-30 gap-3">
        {/* Left Side */}
        <div className="relative flex-1">
          <img
            src={flags}
            alt="Why Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70 z-10" />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-4">
            <div className="h-[3px] w-24 sm:w-40 bg-[#36B5EB] mt-2" />
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-serif mt-4 sm:mt-8">
              Our Offers
            </h2>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex justify-center items-center">
          <div className="bg-[#10101099] p-4 sm:p-6 md:p-8 shadow-md w-full h-full flex items-center justify-center">
            <p className="text-sm sm:text-lg md:text-xl leading-relaxed text-center max-w-md">
              Excellent knowledge of foreign languages, careful tracking of all
              linguistic changes is our passion. We guarantee accurate and
              reliable translation, regardless of language and subject!
            </p>
          </div>
        </div>
      </section>

      {/* Formalities */}
      <section
        className="relative bg-cover bg-center text-white text-center py-12 sm:py-16 md:py-18 mt-16 md:mt-30"
        style={{ backgroundImage: `url(${plane})` }}
      >
        <div className="absolute inset-0 bg-black/75 z-0" />
        <div className="relative z-10 px-4 sm:px-6">
          <h4 className="uppercase tracking-widest text-base sm:text-lg md:text-xl">
            COMPREHENSIVE
          </h4>
          <h1 className="text-3xl sm:text-5xl md:text-8xl font-normal mt-2">
            FORMALITIES
          </h1>
          <p className="mt-4 font-thin text-sm sm:text-base md:text-lg">
            We'll do all of them for you formalities and more
          </p>
        </div>
      </section>

      {/* Vehicles */}
      <section className="bg-black min-h-[350px] sm:min-h-[400px] md:h-[500px] text-white flex flex-col md:flex-row px-4 sm:px-10 md:px-20 mt-16 md:mt-30 gap-3">
        <div className="relative flex-1">
          <img src={car3} alt="Why Us" className="w-full h-full object-cover" />
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
          <img src={comm} alt="Why Us" className="w-full h-full object-cover" />
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
  );
}

export default Home;
