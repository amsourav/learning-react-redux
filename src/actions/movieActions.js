import { LIKE_MOVIE, DISLIKE_MOVIE } from '../constants/actionTypes';
function likeMovie(id) {
	return {
		type: LIKE_MOVIE,
		id
	}
}

function dislikeMovie(id) {
	return {
		type: DISLIKE_MOVIE,
		id
	}	
}