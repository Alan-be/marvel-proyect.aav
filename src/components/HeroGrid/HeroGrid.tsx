import React, { useState } from 'react';
import HeroCard from '../HeroCard/HeroCard.tsx';

interface Hero {
  name: string;
  description?: string;
}

interface HeroGridProps {
  heroes: Hero[];
}

const HeroGrid: React.FC<HeroGridProps> = ({ heroes }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const heroesPerPage = 3;


  const indexOfLastHero = currentPage * heroesPerPage;
  const indexOfFirstHero = indexOfLastHero - heroesPerPage;
  const currentHeroes = heroes.slice(indexOfFirstHero, indexOfLastHero);

  const totalPages = Math.ceil(heroes.length / heroesPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8">
        {currentHeroes.map((hero, i) => (
          <HeroCard key={i} hero={hero} />
        ))}
      </div>
      <nav className="flex justify-center items-center space-x-2">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="bg-white hover:bg-gray-100 dark:hover:bg-gray-700 dark:bg-gray-800 px-3 py-1 rounded-md text-gray-800 dark:text-white transition-colors duration-200"
        >
          Previous
        </button>
        <span className="bg-white dark:bg-gray-800 px-3 py-1 rounded-md text-gray-800 dark:text-white">
          {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="bg-white hover:bg-gray-100 dark:hover:bg-gray-700 dark:bg-gray-800 px-3 py-1 rounded-md text-gray-800 dark:text-white transition-colors duration-200"
        >
          Next
        </button>
      </nav>
    </div>
  );
};

export default HeroGrid;
