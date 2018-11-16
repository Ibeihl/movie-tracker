const MOVIES_BASE_URL = "http://www.omdbapi.com/?apikey=4bb16985&i=tt0114576&type=movie&r=json";

export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS';
export const getMoviesSuccess = movies => ({
    type: GET_MOVIES_SUCCESS,
    movies
});

export const GET_MOVIES_ERROR = 'GET_MOVIES_ERROR';
export const getMoviesError = error => ({
    type: GET_MOVIES_ERROR,
    error
});

export const GET_MOVIES_REQUEST = 'GET_MOVIES_REQUEST';
export const getMoviesRequest = () => ({
    type: GET_MOVIES_REQUEST,
});

//save movie
export const SAVE_MOVIE = 'SAVE_MOVIE';
export const saveMovie = movie => ({
    type: SAVE_MOVIE,
    movie
});

//unsave
export const UNSAVE_MOVIE = 'UNSAVE_MOVIE';
export const unsaveMovie = movie => ({
    type: UNSAVE_MOVIE,
    movie
});

//sortMovies
export const SORT_MOVIES = 'SORT_MOVIES';
export const sortMovies = sortParam => ({
    type: SORT_MOVIES,
    sortParam
});

//fetch movies
export const getMovies = (searchTerm) => (dispatch) => {
    dispatch(getMoviesRequest());
    fetch(`${MOVIES_BASE_URL}&s=${searchTerm}`, {})
      .then(res => res.json())
      .then(movies => dispatch(getMoviesSuccess(movies)))
      .catch(error => dispatch(getMoviesError(error)))                      
}