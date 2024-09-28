import {  Link, useLocation } from "react-router-dom";
import { FaArrowLeft, FaBookOpen, FaRegUser } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";
import { useDarkMode } from "./hooks/useDarkMode";

interface ComicItem {
  resourceURI: string;
  name: string;
}

interface Comics {
  available: number;
  collectionURI: string;
  items: ComicItem[];
  returned: number;
}

interface ThumbnailPrototype {
  path: string;
  extension: string;
}

interface HeroData {
  id: string;
  name: string;
  thumbnail: ThumbnailPrototype;
  image: string;
  description: string;
  comics: Comics;
}

export default function HeroDetail() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const location = useLocation();
  const hero: HeroData = location.state?.hero;


  if (!hero) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "dark" : ""
      } bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900`}
    >
      <div className="mx-auto p-4 container">
        <header className="flex justify-between items-center bg-white dark:bg-gray-800 shadow-lg mb-8 p-4 rounded-lg">
          <div className="flex items-center">
            <Link to="/" className="mr-4">
              <FaArrowLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </Link>
          
            <h1 className="font-bold text-3xl text-gray-800 dark:text-white">Hero Detail</h1>
          </div>
          <button
            onClick={toggleDarkMode}
            className="border-gray-300 dark:border-gray-600 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 p-2 border rounded-full transition-colors duration-200"
            aria-label={darkMode ? "Activate light mode" : "Activate dark mode"}
          >
            {darkMode ? (
              <MdOutlineWbSunny className="w-5 h-5 text-yellow-500" />
            ) : (
              <IoMdMoon className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </header>

        <div className="bg-white dark:bg-gray-800 shadow-lg mb-8 rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="flex md:flex-row flex-col items-center md:items-start mb-6">
              <img
                src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                alt={hero.name}
                className="shadow-md md:mr-6 mb-4 md:mb-0 rounded-lg w-full md:w-1/3 max-w-sm"
              />
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <FaRegUser className="mr-3 w-8 h-8 text-[#EC1D24]" />
                  <h2 className="font-bold text-3xl text-gray-800 dark:text-white">{hero.name}</h2>
                </div>
                <div className="flex items-start mb-6">
                  <FaRegUser className="mt-1 mr-3 w-8 h-8 text-[#EC1D24]" />
                  <p className="text-gray-600 dark:text-gray-300">
                    {hero.description || "No description available for this character."}
                  </p>
                </div>
              </div>
            </div>
            <div className="border-gray-200 dark:border-gray-700 pt-6 border-t">
              <div className="flex items-start">
                <FaBookOpen className="mt-1 mr-3 w-8 h-8 text-[#EC1D24]" />
                <div>
                  <h3 className="mb-2 font-semibold text-gray-800 text-xl dark:text-white">Comics</h3>
                  <ul className="gap-2 grid grid-cols-1 md:grid-cols-2 text-gray-600 dark:text-gray-300 list-disc list-inside">
                    {hero.comics.items.length > 0 &&
                      hero.comics.items.map((comic: ComicItem, index) => (
                        <li key={index}>{comic.name}</li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/"
            className="inline-block bg-[#EC1D24] hover:bg-[#D42026] px-6 py-3 rounded-md text-white transition-colors duration-200"
          >
            Back to Heroes
          </Link>
        </div>
      </div>
    </div>
  );
}
