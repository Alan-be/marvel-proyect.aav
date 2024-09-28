import React, { useState } from 'react';
import { IoIosSearch } from "react-icons/io";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState<string>("");


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };


  const handleSearch = () => {

    onSearch(inputValue.trim());
  };


  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex mb-6">
      <input
        type="text"
        placeholder="Search marvel characters"
        value={inputValue} 
        onChange={handleInputChange} 
        onKeyPress={handleKeyPress} 
        className="flex-grow border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 mr-2 px-4 py-2 border rounded-md focus:ring-[#EC1D24] text-white focus:outline-none focus:ring-2"
      />
      <button
        onClick={handleSearch} 
        className="flex items-center bg-[#EC1D24] hover:bg-[#D42026] px-4 py-2 rounded-md text-white transition-colors duration-200"
      >
        <IoIosSearch className="mr-2 w-4 h-4" />
        Search
      </button>
    </div>
  );
};

export default SearchBar;
