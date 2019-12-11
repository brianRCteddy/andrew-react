import React from 'react';
import './SearchBar.css';

const SearchBar = ({ placeholder, handleChange }) => {
	return (
		<div className="searchBar">
			<input type="search" placeholder={placeholder} onChange={handleChange} />
		</div>
	);
};

export default SearchBar;
