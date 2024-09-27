import { useEffect, useState } from "react";
import Navbar from "../src/components/Navbar/Navbar.tsx";
import SearchBar from "./components/Searchbar/Searchbar.tsx";
import "./App.css";
import HeroGrid from "./components/HeroGrid/HeroGrid.tsx";


interface Hero {
  name: string;
  description: string;
}
function App() {

  //funciones para darkmode con tailwind
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);


  // info dummy
  const heroes: Hero[] = [
    { name: 'Hero 1', description: 'Description of hero 1' },
    { name: 'Hero 2', description: 'Description of hero 2' },
    { name: 'Hero 3', description: 'Description of hero 3' },
    { name: 'Hero 4', description: 'Description of hero 3' },
    { name: 'Hero 5', description: 'Description of hero 3' },
    { name: 'Hero 6', description: 'Description of hero 3' },
  ];

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "dark" : "white"
      } bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900`}
    >
      <div className="mx-auto p-4 container">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <SearchBar />
        <HeroGrid heroes={heroes}/>

      </div>
    </div>
  );
}

export default App;
