import React from "react";
import logo from "../assets/Images/logo.png";
import insurCar from "../assets/Images/reg-car.jpg";
import car from "../assets/Images/why-us car.jpg";
import mercedes from "../assets/Images/mercedes car.jpg";
import mustang from "../assets/Images/mustang.jpg";
import white from "../assets/Images/white.jpeg";
import Navbar from "../components/navbar";

function Registration() {
  return (
    <div className="bg-black text-white">
      {/* Header */}
      <header
        className="relative bg-cover bg-center min-h-[250px] md:min-h-[300px] flex flex-col justify-center items-center text-center"
        style={{ backgroundImage: `url(${insurCar})` }}
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

        {/* Centered Text */}
        <div className="relative z-10 flex flex-col items-center mt-16 sm:mt-20">
          <h4 className="uppercase tracking-widest text-xs sm:text-sm md:text-base">
            REGISTER YOUR
          </h4>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2">
            VEHICLE
          </h1>
        </div>
      </header>

      {/* Navbar Section */}
      <Navbar />

      {/* Why Us Section */}
      <section className="bg-black min-h-[400px] md:h-[500px] text-white flex flex-col md:flex-row px-6 sm:px-10 md:px-20 mt-10 md:mt-15 gap-3">
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
              The "LIDER" office offers mediation in the registration of
              vehicles both imported from abroad and purchased in Poland
              together with the necessary fees in all offices.
            </p>
          </div>
        </div>
      </section>

      {/* Instant Registration */}
      <section
        className="relative bg-cover bg-center text-white text-center py-16 md:py-20 mt-10 md:mt-30"
        style={{ backgroundImage: `url(${mercedes})` }}
      >
        <div className="absolute inset-0 bg-black/75 z-0" />
        <div className="relative z-10">
          <h4 className="uppercase tracking-widest text-base sm:text-lg md:text-xl">
            INSTANT
          </h4>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-normal mt-2">
            REGISTRATION
          </h1>
          <p className="mt-4 text-xs sm:text-sm md:text-lg font-thin">
            You save time with us, health and money
          </p>
        </div>
      </section>

      {/* Vehicle Types Section */}
      <section className="bg-black min-h-[400px] md:h-[500px] text-white flex flex-col md:flex-row px-6 sm:px-10 md:px-20 mt-10 md:mt-30 gap-3">
        <div className="flex-1 flex justify-center items-center">
          <div className="bg-[#10101099] p-6 sm:p-8 shadow-md w-full h-full flex items-center justify-center">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-center max-w-md">
              We register all types of vehicles, including passenger cars,
              trucks, specialized cars, agricultural tractors, mopeds,
              motorcycles, trailers, etc.
            </p>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="bg-[#10101099] p-6 sm:p-8 shadow-md w-full h-full flex items-center justify-center">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-center max-w-md">
              Comprehensive fees (Customs Office, Tax Office, Department of
              Communication, document translations, recycling) and complete
              re-registration of vehicles imported from abroad.
            </p>
          </div>
        </div>
      </section>

      {/* Formalism */}
      <section
        className="relative bg-cover bg-center text-white text-center py-16 md:py-20 mt-10 md:mt-30"
        style={{ backgroundImage: `url(${mustang})` }}
      >
        <div className="absolute inset-0 bg-black/75 z-0" />
        <div className="relative z-10">
          <h4 className="uppercase tracking-widest text-base sm:text-lg md:text-xl">
            COMPREHENSIVE
          </h4>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-normal mt-2">
            FORMALISM
          </h1>
          <p className="mt-4 text-xs sm:text-sm md:text-lg font-thin">
            We will arrange all formalities for you related to vehicle
            registration
          </p>
        </div>
      </section>

      {/* Trust */}
      <section
        className="relative bg-cover bg-center text-white text-center py-16 md:py-20 mt-10 md:mt-30"
        style={{ backgroundImage: `url(${white})` }}
      >
        <div className="absolute inset-0 bg-black/75 z-0" />
        <div className="relative z-10">
          <h4 className="uppercase tracking-widest text-base sm:text-lg md:text-xl">
            TRUST
          </h4>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-normal mt-2">
            US
          </h1>
          <p className="mt-4 text-xs sm:text-sm md:text-lg font-thin">
            We provide full professionalism completing formalities
          </p>
        </div>
      </section>
    </div>
  );
}

export default Registration;
