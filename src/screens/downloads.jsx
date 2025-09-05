import React from "react";
import { FaDownload } from "react-icons/fa";
import write from "../assets/Images/write.jpg";
import logo from "../assets/Images/logo.png";
import Navbar from "../components/navbar.jsx";

function Downloads() {
  const documents = [
    "Polish–English agreement",
    "Polish–French agreement",
    "Polish–German agreement",
    "Polish–Italian agreement",
    "Polish–Dutch agreement",
    "Donation Agreement",
    "PCC–3 declaration",
    "Declaration under criminal liability",
    "Purchase and sale agreement",
    "ACC–US declaration",
    "Application for sale of area. Nowotarski",
    "Application for sale of area. Tatra",
    "GDPR consent",
    "Power of attorney and Declaration",
  ];

  return (
    <div className="bg-black text-white font-serif">
      {/* Header */}
      <header
        className="relative bg-cover bg-center h-[250px] sm:h-[300px] md:h-[400px] flex flex-col justify-center items-center text-center"
        style={{ backgroundImage: `url(${write})` }}
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
          Useful Design
        </h4>
        <h1 className="relative text-3xl sm:text-5xl md:text-6xl mt-4">
          DOCUMENTS
        </h1>
      </header>

      {/* Navbar */}
      <Navbar />

      {/* Document List */}
      <section className="p-6 sm:p-10 md:p-20 max-w-6xl mx-auto space-y-4 sm:space-y-6">
        {documents.map((doc, i) => (
          <div
            key={i}
            className="flex justify-between items-center border border-[#162A5D] rounded px-4 py-3 sm:py-4 text-sm sm:text-base hover:bg-[#162A5D] cursor-pointer transition"
          >
            <span className="truncate">{doc}</span>
            <FaDownload className="flex-shrink-0 ml-3" />
          </div>
        ))}
      </section>
    </div>
  );
}

export default Downloads;
