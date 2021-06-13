import {GET_WEATHER, SET_ERROR} from "../../types";

const api = {
	key: "c7dcb70972667c89f1e838d621c105f5",
	base: "http://api.weatherstack.com/current",
};

export const getWeather = (city, onSuccess = () => {}, onError = () => {}) => {
	return async dispatch => {
		try {
			const res = await fetch(`${api.base}?access_key=${api.key}&query=${query})`);

			if (!res.ok) {
				const resData = await res.json();
				throw new Error(resData.message);
			}

			const resData = await res.json();
			dispatch({
				type: GET_WEATHER,
				payload: resData,
			});
			onSuccess();
		} catch (err) {
			dispatch(setError(err.message));
			onError();
		}
	};
};

const setError = (err) => {
	return {
		type: SET_ERROR,
		payload: err,
	};
};