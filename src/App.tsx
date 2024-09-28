import Navbar from "../src/components/Navbar/Navbar.tsx";
import SearchBar from "./components/Searchbar/Searchbar.tsx";
import "./App.css";
import HeroGrid from "./components/HeroGrid/HeroGrid.tsx";
import { useDarkMode } from "./hooks/useDarkMode.ts";
import { useState } from "react";

function App() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [searchTerm, setSearchTerm] = useState<string>(""); 
  const [offset, setOffset] = useState<number>(0);

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
    setOffset(0); 
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "dark" : "white"
      } bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900`}
    >
      <div className="mx-auto p-4 container">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <SearchBar onSearch={handleSearch} />
        <HeroGrid searchTerm={searchTerm} offset={offset} setOffset={setOffset} />
      </div>
    </div>
  );
}

export default App;
