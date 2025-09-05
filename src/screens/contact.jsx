import React from "react";
import logo from "../assets/Images/logo.png";
import phone from "../assets/Images/phone.jpg";
import map from "../assets/Images/map.png";
import Navbar from "../components/navbar.jsx";

function contact() {
  return (
    <div>
      <div className="bg-black text-white">
        {/* Header */}
        <header
          className="relative bg-cover bg-center h-[300px] text-white flex flex-col justify-center items-center text-center"
          style={{ backgroundImage: `url(${phone})` }}
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

          <h1 className="absolute text-5xl md:text-6xl mt-30">CONTACT US</h1>
        </header>

        {/* Navbar Section */}
        <Navbar />

        <section
          className="relative bg-cover bg-center h-[400px] flex flex-col justify-center items-center text-center px-4"
          style={{ backgroundImage: `url(${map})` }}
        >
          <div className="absolute inset-0 bg-black/70 z-0" />
        </section>

        <section className="bg-black py-37"></section>
      </div>
    </div>
  );
}

export default contact;
