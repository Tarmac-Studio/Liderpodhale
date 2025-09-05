import React from "react";
import logo from "../assets/Images/logo.png";
import insur from "../assets/Images/insurance.jpg";
import insuranceCar from "../assets/Images/car-insurance.jpg";
import car from "../assets/Images/why-us car.jpg";
import house2 from "../assets/Images/house2.jpg";
import trusted from "../assets/Images/trusted.png";
import Navbar from "../components/navbar.jsx";

function Insurance() {
  return (
    <div className="bg-black text-white">
      {/* Header */}
      <header
        className="relative bg-cover bg-center min-h-[250px] md:min-h-[300px] flex flex-col justify-center items-center text-center"
        style={{ backgroundImage: `url(${insur})` }}
      >
        <div className="absolute inset-0 bg-black/70 z-0" />

        {/* Top Bar */}
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

        {/* Centered Text */}
        <div className="relative z-10 flex flex-col items-center mt-16 sm:mt-20">
          <h4 className="uppercase tracking-widest text-xs sm:text-sm md:text-base">
            EXPLORE OUR
          </h4>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2">
            INSURANCE
          </h1>
        </div>
      </header>

      {/* Navbar Section */}
      <Navbar />

      {/* Section: Insurance Car */}
      <section
        className="relative bg-cover bg-center text-white text-center py-16 md:py-20 mt-10 md:mt-15"
        style={{ backgroundImage: `url(${insuranceCar})` }}
      >
        <div className="absolute inset-0 bg-black/75 z-0" />

        <div className="relative z-10">
          <h4 className="uppercase tracking-widest text-base sm:text-lg md:text-xl">
            LOW PRICE
          </h4>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-normal mt-2">
            INSURANCE
          </h1>
        </div>
      </section>

      {/* Section: Why Us */}
      <section className="bg-black min-h-[400px] md:h-[500px] text-white flex flex-col md:flex-row px-6 sm:px-10 md:px-20 mt-10 md:mt-30 gap-3">
        {/* Left Side */}
        <div className="relative flex-1">
          <img src={car} alt="Why Us" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70 z-10" />

          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6">
            <div className="h-[3px] w-20 sm:w-32 bg-[#36B5EB] mt-4" />
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl mt-6">
              Why Us?
            </h2>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex justify-center items-center">
          <div className="bg-[#10101099] p-6 sm:p-8 shadow-md w-full h-full flex items-center justify-center">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-center max-w-md">
              All risks, i.e. insurance against all risks - AC insurance covers
              damage to the vehicle, its destruction or loss due to all events.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Liability */}
      <section className="bg-black min-h-[400px] md:h-[500px] text-white flex flex-col md:flex-row px-6 sm:px-10 md:px-20 mt-10 md:mt-30 gap-3">
        <div className="flex-1 flex justify-center items-center">
          <div className="bg-[#10101099] p-6 sm:p-8 shadow-md w-full h-full flex items-center justify-center">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-center max-w-md">
              The subject of insurance is the civil liability of any person who,
              while driving a motor vehicle during the duration of the insurance
              contract, caused damage in connection with the movement of that
              vehicle.
            </p>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <div className="bg-[#10101099] p-6 sm:p-8 shadow-md w-full h-full flex items-center justify-center">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-center max-w-md">
              “Lider" offers you the best offers on the market of known
              insurance companies. We guarantee the greatest professionalism and
              advice regarding vehicle insurance.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Best Offers */}
      <section
        className="relative bg-cover bg-center text-white text-center py-16 md:py-20 mt-10 md:mt-30"
        style={{ backgroundImage: `url(${house2})` }}
      >
        <div className="absolute inset-0 bg-black/75 z-0" />

        <div className="relative z-10">
          <h4 className="uppercase tracking-widest text-base sm:text-lg md:text-xl">
            BEST
          </h4>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-normal mt-2">
            OFFERS
          </h1>
          <p className="mt-4 text-xs sm:text-sm md:text-lg font-thin">
            Cooperation with the best societies Insurance
          </p>
        </div>
      </section>

      {/* Section: Trusted */}
      <section className="bg-black text-white flex px-6 sm:px-10 md:px-20 flex-col md:flex-row mt-10 md:mt-30">
        <div className="relative w-full">
          <img
            src={trusted}
            alt="Trusted"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </div>
  );
}

export default Insurance;
