import React, {useState, useEffect} from 'react';
import axios from 'axios';

import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

export const Main = () => {
  const [artist, setArtist] = useState('');
  console.log('artist: ', artist);
  const [searchResults, setSearchResults] = useState({});
  console.dir(searchResults);

  
  const limit = 10;
  const offset = 0;
  const searchString = new URLSearchParams(`query=${artist}&limit=${limit}&offset=${offset}`)

  const url = `https://musicbrainz.org/ws/2/artist?${searchString}`;
  // search:   /<ENTITY_TYPE>?query=<QUERY>&limit=<LIMIT>&offset=<OFFSET>


  useEffect(() => {
  async function fetchData() {
    // You can await here
    const response = await axios.get(url);
    const {data={}} = response;
    setSearchResults(data);
  }
  if (artist!=='') {
    fetchData();
  } else {
    console.log('no data');
  }
  }, [artist,url]);

  return (
      <main className="Main">
        <SearchForm getArtist={setArtist} />
        <p>artist: {JSON.stringify(artist)}</p>
        <SearchResults searchResults={searchResults} limit={limit} />
        {/* <p>searchResults: {JSON.stringify(searchResults)}</p> */}
      </main>
  )
};

export default Main;