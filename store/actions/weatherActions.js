import Constants from 'expo-constants';
import * as Location from 'expo-location';

import {GET_WEATHER, SET_ERROR, GET_LOCATION, SET_ERROR_LOCATION} from "../types";

const api = {
	key: "730cd7ec72a9ceeab2acacb617363ac8",
	base: "https://api.openweathermap.org/data/2.5/",
};
// const getPosition = async() => {
// 	let { status } = await Location.requestForegroundPermissionsAsync();
// 	if (status !== 'granted') {
// 		setErrorMsg('Permission to access location was denied');
// 		return;
// 	}
//
// }
// export const getLocation = () => {
// 	return async dispatch => {
//
// 			if(getPosition) {
// 				const loc = await Location.getCurrentPositionAsync({})
// 				const Lat = `${loc.coords.latitude}`
// 				const Long = `${loc.coords.longitude}`
// 					.then(async() => {
// 						const geo_loc = await fetch(`${api.base}onecall?lat=${Lat}&lon=${Long}&exclude=hourly,minutely,current&units=metric&appid=${api.key}`)
// 						if (!geo_loc.ok) {
// 							const resData = await geo_loc.json();
// 							throw new Error(resData.message);
// 						}
//
// 						const resData = await geo_loc.json();
// 						console.log(resData);
// 						dispatch({
// 							type: GET_LOCATION,
// 							payload: resData,
// 						});
// 					})
// 			}
// 	}
// };
export const getWeather = (city, onSuccess = () => {}, onError = () => {}) => {
	return async dispatch => {
		try {
			const res = await fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)

			if (!res.ok) {
				const resData = await res.json();
				throw new Error(resData.message);
			}

			const resData = await res.json();
			console.log(resData);
			dispatch({
				type: GET_WEATHER,
				payload: resData,
			});

			onSuccess();

		} catch (errWeather) {
			dispatch(setError(errWeather.message));
			onError();
		}
	};
};

const setError = (errWeather) => {
	return {
		type: SET_ERROR,
		payload: errWeather,
	};
};
const setErrorLoc = (errLoc) => {
	return {
		type: SET_ERROR_LOCATION,
		payload: errLoc,
	};
};
