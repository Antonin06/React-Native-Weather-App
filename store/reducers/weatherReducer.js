import {GET_WEATHER, SET_ERROR, GET_LOCATION, SET_ERROR_LOCATION} from "../types";

const initialState = {
	data: null,
	error: '',
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_WEATHER:
			return {
				data: action.payload,
				error: '',
			};
		case SET_ERROR:
			return {
				...state,
				error: action.payload,
			};
		case GET_LOCATION:
			return {
				geolocation: action.payload,
				error: '',
			}
		case SET_ERROR_LOCATION:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};
