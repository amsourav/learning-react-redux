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

export default userInteraction;