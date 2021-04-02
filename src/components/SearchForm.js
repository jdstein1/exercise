import React from 'react';

export const SearchForm = ({getArtist}) => {
  function handleSearchChange(e) {
    console.log('e.target.value: ',e.target.value);
    getArtist(e.target.value);
  }
  function handleSubmit(form) {
    console.log('form: ',form);
  }
  return (
      <form onSubmit={handleSubmit}>
        <input onChange={handleSearchChange} className="Search" type="text" id="music" placeholder="search music artists..."/>
        <input type="submit"/>
      </form>
  )
};

export default SearchForm;