import React from 'react';

import Expander from './Expander';

export const SearchResults = ({searchResults=[], limit=0}) => {
  // console.log('searchResults: ',searchResults);
  const {artists=[], count=0, offset=0} = searchResults;
  return (
        <section className='SearchResults'>
          <h2>search results</h2>
          <h4>(total: {count} results)</h4>
          <ul className='ResultsList'>
            {artists.map((artist,i)=>{
              console.log('artist: ', artist);
              const {name, id} = artist;
              return <li className='ResultsListItem' key={`${name}--${limit * (offset + 1) + i}`}>
                <Expander label={name} content={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus molestiae excepturi consequatur similique cupiditate. Temporibus placeat numquam excepturi animi nobis eaque officia possimus, ad earum, obcaecati cum ipsum a rerum.'} id={id} />
                </li>
            })}
          </ul>
          <ul className='Pagination'>
            <li><button>Previous</button></li>
            <li>page {(offset + 1)} of {(count / limit).toFixed(0)}</li>
            <li><button>Next</button></li>
          </ul>
        </section>
  )
};

export default SearchResults;