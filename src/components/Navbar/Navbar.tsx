import React from 'react';
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";


interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="flex justify-between items-center bg-white dark:bg-gray-800 shadow-lg mb-8 p-4 rounded-lg">
      <div className="flex items-center">
        <svg className="mr-4 w-10 h-10" viewBox="0 0 36 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        </svg>
        <h1 className="font-bold text-3xl text-gray-800 dark:text-white">Marvel Heroes</h1>
      </div>
      <button
        onClick={toggleDarkMode}
        className="border-gray-300 dark:border-gray-600 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 p-2 border rounded-full transition-colors duration-200"
        aria-label={darkMode ? 'Activate light mode' : 'Activate dark mode'}
      >
        {darkMode ? <MdOutlineWbSunny className="w-5 h-5 text-yellow-500" /> : <IoMdMoon className="w-5 h-5 text-gray-600" />}
      </button>
    </header>
  );
};

export default Navbar;
