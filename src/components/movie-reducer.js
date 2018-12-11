import {
    GET_MOVIES_REQUEST,
    GET_MOVIES_ERROR,
    GET_MOVIES_SUCCESS,
    SAVE_MOVIE,
    UNSAVE_MOVIE,
    SORT_MOVIES
} from './get-movies';
import { movieSorter } from './sorters';

const initialState = {
    searchResults: null,
    loading: false,
    error: null,
    savedMovies: []
};

export function movieReducer(state = initialState, action) {
    if (action.type === GET_MOVIES_REQUEST) {
        return Object.assign({}, state, {
            loading: true
        });
    } else if (action.type === GET_MOVIES_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    } else if (action.type === GET_MOVIES_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            searchResults: action.movies.Search
        });
    } else if (action.type === SAVE_MOVIE) {
        return Object.assign({}, state, {
            savedMovies: [...state.savedMovies, action.movie]
        });
    } else if (action.type === UNSAVE_MOVIE) {
        let newSavedList = state.savedMovies.filter(movie => {
        return movie.imdbID !== action.movie.imdbID;
        })
        return Object.assign({}, state, {
            savedMovies: newSavedList
        });
    } else if (action.type === SORT_MOVIES) {
        const sortedMovies = movieSorter(state.savedMovies, action.sortParam);
        //used spread operator for sorted movies and that fixed it....
        return Object.assign({}, state, {
            savedMovies: [ ...sortedMovies ]
        });
    }
    return state;
};
