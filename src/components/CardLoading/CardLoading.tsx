import React from 'react';

const CardLoading: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg transition-all animate-pulse overflow-hidden">
      <div className="relative">
        <div className="bg-gray-300 dark:bg-gray-700 w-full h-48 animate-pulse"></div> 
      </div>
      <div className="p-4">
        <div className="bg-gray-300 dark:bg-gray-700 mb-2 rounded h-6 animate-pulse"></div>
        <div className="bg-gray-300 dark:bg-gray-700 rounded h-4 animate-pulse"></div>
      </div>
      <div className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 p-4">
        <div className="bg-gray-300 dark:bg-gray-700 rounded w-24 h-6"></div> 
        <div className="bg-gray-300 dark:bg-gray-700 rounded w-16 h-6"></div>
      </div>
    </div>
  );
};

export default CardLoading;
