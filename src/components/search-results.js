import React, { Component } from 'react';
import { saveMovie } from './get-movies';
import { connect } from 'react-redux';
import '../css/search-results.css'

class SearchResults extends Component {
    handleSave(e) {
        let savedMovie = this.props.searchResults.find(movie => movie.imdbID === e.target.value);
        this.props.dispatch(saveMovie(savedMovie));
    }
    
    renderResults() {
        let results;
        let errorMessage;
        let loadingMessage;
        if (this.props.loading) {
            loadingMessage = <h3>Loading....</h3>
        } else if (this.props.searchResults) {
            let movieList = this.props.searchResults
            results = movieList.map((movie, index) => (
                    <li key={index}>
                        <img src={movie.Poster} alt={movie.Title} />
                        <h3>{movie.Title}</h3>
                        <h3>{movie.Year}</h3>
                        <button value={movie.imdbID} type="button" onClick={(e) => this.handleSave(e)}>SAVE MOVIE</button>
                    </li>
            ));
        } else if (this.props.error) {
            errorMessage = <h3>THERE WAS AN ERROR</h3>
        }
        return (
            <div>
                {loadingMessage}
                {errorMessage}
                <ul>
                    {results}
                </ul>
            </div>
        )
    }

    render() {
        return (
            <div className="results-container">
                {this.renderResults()}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    error: state.error,
    loading: state.loading,
    searchResults: state.searchResults
})

export default connect(mapStateToProps)(SearchResults);