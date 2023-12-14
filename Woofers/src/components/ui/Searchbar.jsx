import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    // You can perform search-related actions here, such as filtering data based on the search term
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="flex items-center border-b-2 border-blue-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <button
          className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 text-sm text-white py-1 px-2 rounded"
          type="button"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
