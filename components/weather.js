import React, {TextInput, useState} from 'react-native';

const api = {
	key: "c7dcb70972667c89f1e838d621c105f5",
	base: "https://api.weatherstack.com/current",
};

const Weather = () => {
	const [query, setQuery] = useState("");


	const search = (e) => {
		fetch(`${api.base}?access_key=${api.key}&query=${query})`)
		.then((res) => {
			return res.json();
		})
		.then((result) => {
			setQuery("");
			console.log(result, "query");
		})
	}

	return (
		<TextInput
			onChange={(e) => setQuery(e.target.value)}
			value={query}
			onKeyPress={search}
		/>
	);
}
export default Weather;