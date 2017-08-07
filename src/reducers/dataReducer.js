import { DATA_FETCH_REQUEST, DATA_FETCH_FALIURE } from '../constants/actionTypes';

export function data(state = {
	isFetching: false,
	lastUpdated: undefined,
	payload: [],
	error: false
}, action) {
	const { payload } = action;
	switch(action.type) {
		case DATA_FETCH_REQUEST:
			let transformedData = payload.map(data => ({
				[data.id]: data
			}));
			return {
				...state,
				isFetching: true,
				data: payload
			};
		case DATA_FETCH_FALIURE:
			return {
				...state,
				isFetching: false,
				error: true
			};
		default:
			return state;
	}
}

