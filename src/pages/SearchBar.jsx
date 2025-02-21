import React, { useState } from 'react';
import '../style/SearchBar.css'

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState(''); // State to hold the search input value

  const handleSearch = () => {
    onSearch(query); // Call the onSearch function passed as prop with the query value
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') { // Trigger search if Enter key is pressed
      handleSearch();
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query} // Bind the input field to the query state
        onChange={(e) => setQuery(e.target.value)} // Update query state on input change
        placeholder="Buscar Artistas..."
        onKeyPress={handleKeyPress} // Listen for key press events
      />
      <button onClick={handleSearch}>Buscar</button> {/* Trigger search on button click */}
    </div>
  );
};

export default SearchBar;
