import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { LIKE_MOVIE, DISLIKE_MOVIE } from '../constants/actionTypes';

function userInteraction(state={}, action) {
	switch(action.type) {
		case LIKE_MOVIE:
			return {
				favMovie: [1],
				movieData: []
			};
		case DISLIKE_MOVIE:
			return {
				favMovie: [0],
				movieData: []
			};
		default:
			return {
				favMovie: [-1],
				movieData: []				
			};		
	}
}

const reducers = combineReducers({
	userInteraction,
	routing
});

export default reducers;