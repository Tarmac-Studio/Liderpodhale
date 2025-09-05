// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-30 md:px-2 grid grid-cols-1 md:grid-cols-3 gap-2 items-stretch">
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
  );
};

export default Footer;
