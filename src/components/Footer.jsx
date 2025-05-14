import React from "react";
import LoadTime from "./LoadTime";
import RickRoll from "./RickRoll";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1C1C1C] border-t border-gray-700 text-gray-400 text-sm py-6 px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
      
  
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
        <a
          href="https://www.linkedin.com/in/adrien-wahl-27b107160/"
          rel="noopener noreferrer"
          target="_blank"
          className="hover:text-white transition font-[Poppins]"
        >
          Linkedin
        </a>
        <a
          href="https://www.instagram.com/adrienw_pics/"
          rel="noopener noreferrer"
          target="_blank"
          className="hover:text-white transition font-[Poppins]"
        >
          Instagram
        </a>
        <a
          href="https://artemspectral.com/"
          rel="noopener noreferrer"
          target="_blank"
          className="hover:text-white transition font-[Poppins]"
        >
          My shop
        </a>
        <RickRoll />
      </div>

      
      <div>
        <LoadTime />
      </div>

      <div className="text-center md:text-right">
        <p className="text-xs font-[Poppins]">&copy; Adrien Wahl 2025.</p>
      </div>
    </footer>
  );
};

export default Footer;
