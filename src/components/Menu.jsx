import { useState } from "react";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react"; 

const Menu = ({ onNavigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (page) => {
    onNavigate(page);
    setMenuOpen(false); 
  };

  return (
    <div className="relative">
     
      <ul className="hidden md:flex text-white text-2xl font-bold justify-end gap-12 mr-20 pt-10">
        <li>
          <button onClick={() => onNavigate("about")} className="transition transform hover:scale-110 hover:bg-gradient-to-r from-sky-400 to-blue-600 hover:bg-clip-text hover:text-transparent font-[Poppins]">
            about
          </button>
        </li>
        <li>
          <button onClick={() => onNavigate("services")} className="transition transform hover:scale-110 hover:bg-gradient-to-r from-sky-400 to-blue-600 hover:bg-clip-text hover:text-transparent font-[Poppins]">
            services
          </button>
        </li>
        <li>
          <button onClick={() => onNavigate("contact")} className="transition transform hover:scale-110 hover:bg-gradient-to-r from-sky-400 to-blue-600 hover:bg-clip-text hover:text-transparent font-[Poppins]">
            contact
          </button>
        </li>
      </ul>

     
      <div className="md:hidden flex items-center justify-end pr-6 pt-10">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <CloseIcon size={32} color="white" /> : <MenuIcon size={32} color="white" />}
        </button>
      </div>

      
      {menuOpen && (
        <ul className="absolute right-4 top-20 bg-[#1C1C1C] border border-gray-700 rounded-lg shadow-lg text-white w-48 p-4 space-y-4 z-50">
          <li>
            <button onClick={() => handleNavigate("about")} className="w-full text-left font-[Poppins] hover:text-blue-400">about</button>
          </li>
          <li>
            <button onClick={() => handleNavigate("services")} className="w-full text-left font-[Poppins] hover:text-blue-400">services</button>
          </li>
          <li>
            <button onClick={() => handleNavigate("contact")} className="w-full text-left font-[Poppins] hover:text-blue-400">contact</button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Menu;
