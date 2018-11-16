import React, { Component } from 'react';
import { getMovies } from './get-movies';
import { connect } from 'react-redux';
import '../css/search-form.css'

class SearchForm extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const searchTerm = e.target.search.value;
    this.props.dispatch(getMovies(searchTerm));
    e.target.search.value = '';
  }

  render() {
    return (
      <div className="search-container">
        <form className="search-form" onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="search">Search:</label>
          <input type="search" id="search" placeholder="scarface..."></input>
          <button type="submit">Find</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.error,
  loading: state.loading,
  searchResults: state.searchResults
})

export default connect(mapStateToProps)(SearchForm);