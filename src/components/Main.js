import React, {useState, useEffect} from 'react';
import NB from 'nodebrainz';

import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

export const Main = () => {
  const [artist, setArtist] = useState('');
  const [searchResults, setSearchResults] = useState({});
  
  const limit = 10;

  useEffect(() => {

    const nb = new NB({userAgent: 'DiscogApp/0.0.1'})

    const getArtists = async () => {

      const payload = { artist, limit };
      await nb.search('artist', payload, (err, response) => {
        if (err) {
          console.log('err: ', err);
          // return err;
        }
        setSearchResults(response);
      });
    };
    setTimeout(()=>{
      getArtists();
    }, 500)
    
  }, [artist]);

  return (
      <main className="Main">
        <SearchForm getArtist={setArtist} />
        <SearchResults searchResults={searchResults} limit={limit} />
      </main>
  )
};

export default Main;