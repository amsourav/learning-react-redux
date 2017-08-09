import { LIKE_MOVIE, DISLIKE_MOVIE } from '../constants/actionTypes';
import _ from 'lodash';

function userInteraction(initialState = {
	favMovie: [],
}, action) {
	switch(action.type) {
		case LIKE_MOVIE:
			return {
				...initialState,
				favMovie: [...initialState.favMovie, action.id]
			};
		case DISLIKE_MOVIE:
			return {
				favMovie: [0],
			};
		default:
			return initialState;	
	}
}

export default userInteraction;