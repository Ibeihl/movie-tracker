import React, { Component } from 'react';
import SavedMovies from '../components/saved-movies';

class Saved extends Component {
  render() {
    return (
      <div>
        <h2>Your Saved Movies</h2>
        <SavedMovies/>
      </div>
    );
  }
}

export default Saved;
