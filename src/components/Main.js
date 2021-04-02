import React from 'react';

import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

export const Main = () => {
  return (
      <main className="Main">
        <SearchForm />
        <SearchResults />
      </main>
  )
};

export default Main;