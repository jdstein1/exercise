import React from 'react';

export const SearchForm = ({getArtist}) => {
  function handleSearchChange(e) {
    console.log('e.target.value: ',e.target.value);
    e.preventDefault();

    getArtist(e.target.value);
    return null;
  }
  return (
      <div className='SearchForm'>
        <input onChange={handleSearchChange} className="SearchInput" type="text" id="music" placeholder="search music artists..."/>
      </div>
  )
};

export default SearchForm;