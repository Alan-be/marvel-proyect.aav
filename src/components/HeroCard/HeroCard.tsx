import React from 'react';
import { CiCircleInfo } from "react-icons/ci";

interface Hero {
  name: string;
  description?: string;
}

interface HeroCardProps {
  hero: Hero;
}

const HeroCard: React.FC<HeroCardProps> = ({ hero }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl rounded-lg transition-all hover:-translate-y-1 duration-300 overflow-hidden">
      <div className="relative">
        <img
          src={`/placeholder.svg?height=200&width=400&text=${hero.name}`}
          alt={`Marvel Hero ${hero.name}`}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="mb-2 font-semibold text-gray-800 text-xl dark:text-white">{hero.name}</h2>
        <p className="text-gray-600 text-sm dark:text-gray-300">
          {hero.description || 'A legendary Marvel hero with extraordinary abilities and a compelling backstory.'}
        </p>
      </div>
      <div className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 p-4">
        <button className="border-[#EC1D24] hover:bg-[#EC1D24] px-3 py-1 border rounded text-[#EC1D24] text-sm hover:text-white transition-colors duration-200">
          Learn More
        </button>
        <button className="flex items-center px-3 py-1 text-gray-600 text-sm hover:text-[#EC1D24] dark:hover:text-[#EC1D24] dark:text-gray-300 transition-colors duration-200">
          <CiCircleInfo className="mr-1 w-4 h-4" />
          Details
        </button>
      </div>
    </div>
  );
};

export default HeroCard;
