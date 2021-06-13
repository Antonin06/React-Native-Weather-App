import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';

const WeatherData = ({ data }) => {
	const fahrenheit = (data.main.temp).toFixed(2);
	const celsius = (data.main.temp).toFixed(2);

	return (
		<View style={styles.container} onStartShouldSetResponder={() => true}>
			<ScrollView style={styles.containerInner}>
				<Text style={styles.title}>{data.name} - {data.sys.country}</Text>
				<View style={styles.box}>
					<Text style={styles.boxLabel}>{data.weather[0].description}</Text>
					<Image style={styles.image} source={{ uri: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png` }} />
				</View>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 100,
		flex: 1
	},
	containerInner: {
		width: "100%",
		paddingHorizontal: 0,
	},
	title: {
		fontSize: 40,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 20,
	},
	box: {
		borderWidth: 1,
		borderColor: '#ddd',
		padding: 15,
		marginBottom: 10,
		alignItems: 'center',
	},
	boxLabel: {
		textTransform: 'uppercase',
		fontSize: 12,
		letterSpacing: 1,
		marginBottom: 5,
	},
	boxText: {
		fontSize: 16,
		fontWeight: 'bold',
	},
	image: {
		width: 80,
		height: 80,
		alignContent: 'center',
	},
	tempContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignSelf: 'stretch',
	},
});

export default WeatherData;
