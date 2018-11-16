import React, { Component } from 'react';
import SearchFrom from '../components/search-form';
import SearchResults from '../components/search-results';

class Search extends Component {
  render() {
    return (
      <div>
        <h2>Search for Your Favorite Movies!</h2>
        <SearchFrom/>
        <SearchResults/>
      </div>
    );
  }
}

export default Search;


