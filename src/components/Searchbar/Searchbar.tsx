import React from 'react';
import { IoIosSearch } from "react-icons/io";

const SearchBar: React.FC = () => {
  return (
    <div className="flex mb-6">
      <input
        type="text"
        placeholder="Search Marvel characters..."
        className="flex-grow border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 mr-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#EC1D24]"
      />
      <button className="flex items-center bg-[#EC1D24] hover:bg-[#D42026] px-4 py-2 rounded-md text-white transition-colors duration-200">
        <IoIosSearch className="mr-2 w-4 h-4" />
        Search
      </button>
    </div>
  );
};

export default SearchBar;
