import React, {useState, useEffect} from 'react';
import NB from 'nodebrainz';

import Expander from './Expander';

export const SearchResultsListItem = ({data}) => {
  const [releases, setReleases] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  function handleExpanderClick() {
    setIsOpen(!isOpen);
  }

  const {name, id} = data;

  useEffect(() => {

    const nb = new NB({userAgent: 'DiscogApp/0.0.1'})

    const getReleases = async () => {

      const options = {inc:'releases'};
      await nb.artist(id, options, (err, response) => {
        if (err) {
          console.log('err: ', err);
        }
        setReleases(response?.releases);
      });
    };
    if (isOpen) {
      getReleases();
    }
  }, [id, isOpen]);

  return (<li className='ResultsListItem' key={id}>
      <Expander label={name} content={releases} id={id} isOpen={isOpen} handler={handleExpanderClick} />
    </li>);

};
export const SearchResultsList = ({artists, limit, offset}) => {
  return (
    <ul className='ResultsList'>
      {artists.map((artist,i)=>{
        return <SearchResultsListItem key={i} data={artist} />
      })}
    </ul>
  );
};


export const SearchResults = ({searchResults=[], limit=0}) => {
  const {artists=[], count=0, offset=0} = searchResults;
  return (
        <section className='SearchResults'>
          <h2>search results</h2>
          <h4>(total: {count} results)</h4>
          <SearchResultsList artists={artists} limit={limit} offset={offset} />
        </section>
  )
};

export default SearchResults;