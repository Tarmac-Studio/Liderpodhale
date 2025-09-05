import React from "react";
import doc from "../assets/Images/doc.jpg";
import logo from "../assets/Images/logo.png";
import real from "../assets/Images/real.jpg";
import Navbar from "../components/navbar.jsx";


function Documents() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <header
        className="relative bg-cover bg-center min-h-[250px] md:min-h-[300px] flex flex-col justify-center items-center text-center"
        style={{ backgroundImage: `url(${doc})` }}
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

        {/* Titles */}
        <h4 className="relative uppercase tracking-widest text-xs sm:text-sm mt-16 sm:mt-20">
          FOREIGN DESIGNS
        </h4>
        <h1 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4">
          DOCUMENTS
        </h1>
      </header>

      {/* Navbar Section */}
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center min-h-[300px] md:min-h-[400px] mt-10 flex flex-col justify-center items-center text-center px-4"
        style={{ backgroundImage: `url(${real})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 z-0" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl">
          <h4 className="uppercase text-xs sm:text-sm tracking-widest mb-2">
            Foreign
          </h4>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif">
            DOCUMENTS
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg">
            Select a country from the list to view the document templates that
            apply to it.
          </p>

          {/* Dropdown */}
          <div className="mt-8 sm:mt-10 relative">
            <select
              className="bg-[#162A5D] text-white pl-4 pr-8 py-2 sm:py-3 rounded-lg text-sm sm:text-base md:text-lg outline-none appearance-none w-full"
              defaultValue=""
            >
              <option value="" disabled>
                Select Country
              </option>
              <option value="poland">Poland</option>
              <option value="france">France</option>
              <option value="germany">Germany</option>
              <option value="italy">Italy</option>
            </select>

            {/* Custom Arrow */}
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm sm:text-lg pointer-events-none">
              ▼
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Documents;
