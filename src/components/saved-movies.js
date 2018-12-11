import React, { Component } from 'react';
import { unsaveMovie, sortMovies } from './get-movies';
import { connect } from 'react-redux';
import '../css/search-results.css'

class SavedMovies extends Component {
    handleSort(e) {
        let sortParam = e.target.id;
        this.props.dispatch(sortMovies(sortParam));
    }

    handleUnsave(e) {
        let unsavedMovie = this.props.savedMovies.find(movie => {
            return movie.imdbID === e.target.value;
        })
        this.props.dispatch(unsaveMovie(unsavedMovie));
    }

    renderResults() {
        let movieElements;
        let noMovies;
        if (this.props.savedMovies) {
            let movieList = this.props.savedMovies;
            movieElements = movieList.map((movie) => (
                <li key={movie.imdbID}>
                    <img src={movie.Poster} alt={movie.Title} />
                    <h3>{movie.Title}</h3>
                    <h3>{movie.Year}</h3>
                    <button value={movie.imdbID} type="button" onClick={(e) => this.handleUnsave(e)}>Remove Movie</button>
                </li>
            ));
        } 
        if(!this.props.savedMovies) {
            noMovies = <h3>You don't have any saved movies</h3>
        } 

        return (
            <div>
                  {noMovies}
                <ul>
                    {movieElements}
                </ul>
            </div>
        )
    }
    renderSortBtns() {
        const btnNames = [ 
            {name: "A to Z", id: "alpha"}, 
            {name: "Z to A", id: "reverse-alpha"},
            {name: "Oldest First", id: "oldest"},
            {name: "Newest First", id: "newest"},
        ];
        let sortBtns = btnNames.map((btn, index) => {
            return <button key={index} onClick={(e) => this.handleSort(e)} type="button" id={btn.id}>{btn.id}</button>
        })
        return sortBtns;
    }

    render() {
        return (
            <div className="results-container">
                <h3>Sort:</h3>
                {this.renderSortBtns()}
                {this.renderResults()}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    savedMovies: state.savedMovies
})

export default connect(mapStateToProps)(SavedMovies);