import React from 'react';

export const SearchResults = ({searchResults={}, limit=0}) => {
  console.log(searchResults);
  const {artists=[], count=0, offset=0} = searchResults;
  console.log(artists);
  return (
        <section>
          <h3>search results</h3>
          <h4>(total: {count} results)</h4>
          <ul className='ResultsList'>
            {artists.map(({name},i)=>{
              console.log(name);
              return <li className='ResultsListItem' key={`${name}--${limit * (offset + 1) + i}`}>{i+1}) {name}</li>
            })}
          </ul>
          <ul className='Pagination'>
            <li>Previous</li>
<li>page {(offset + 1)} of {(count / limit).toFixed(0)}</li>
            <li>Next</li>
          </ul>
        </section>
  )
};

export default SearchResults;