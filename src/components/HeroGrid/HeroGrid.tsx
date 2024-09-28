import React, { useEffect, useState } from 'react';
import HeroCard from '../HeroCard/HeroCard.tsx';
import CardLoading from '../CardLoading/CardLoading.tsx';
import { fetchHeroes } from '../../services/api.ts';

interface thumbnailPrototype {
  path: string;
  extension: string;
}

interface Hero {
  name: string;
  description?: string;
  thumbnail: thumbnailPrototype;
}

interface HeroGridProps {
  searchTerm: string;
  offset: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
}

const HeroGrid: React.FC<HeroGridProps> = ({ searchTerm, offset, setOffset }) => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMoreHeroes, setHasMoreHeroes] = useState(true); 

  const loadHeroes = async () => {
    setLoading(true);
    const fetchedHeroes = await fetchHeroes({ offset, name: searchTerm });
    
    if (fetchedHeroes.length < 6) {
      setHasMoreHeroes(false); 
    } else {
      setHasMoreHeroes(true); 
    }

    setHeroes(fetchedHeroes);
    setLoading(false);
  };

  useEffect(() => {
    loadHeroes();
  }, [offset, searchTerm]);

  const handleNextPage = () => {
    if (hasMoreHeroes) {
      setOffset(prevOffset => prevOffset + 6); 
    }
  };

  const handlePreviousPage = () => {
    if (offset > 0) {
      setOffset(prevOffset => prevOffset - 6); 
    }
  };

  return (
    <div>
      {loading ? (
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <CardLoading key={i} />
            ))}
        </div>
      ) : (
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8">
          {heroes.map((hero, i) => (
            <HeroCard key={i} hero={hero} />
          ))}
        </div>
      )}

      <nav className="flex justify-center items-center space-x-2">
        <button
          onClick={handlePreviousPage}
          disabled={offset === 0} 
          className={`bg-white hover:bg-gray-100 dark:hover:bg-gray-700 dark:bg-gray-800 px-3 py-1 rounded-md text-gray-800 dark:text-white transition-colors duration-200 ${
            offset === 0 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={!hasMoreHeroes} 
          className={`bg-white hover:bg-gray-100 dark:hover:bg-gray-700 dark:bg-gray-800 px-3 py-1 rounded-md text-gray-800 dark:text-white transition-colors duration-200 ${
            !hasMoreHeroes ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Next
        </button>
      </nav>
    </div>
  );
};

export default HeroGrid;
