import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {movieReducer} from './components/movie-reducer.js';

export default createStore(movieReducer, applyMiddleware(thunk));
