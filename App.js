import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';

// https://app.nuclino.com/CDA2-React/React/MtoForecast-8ec14f27-08b1-40f2-a053-67e3913d088c
const api = {
  key: "c7dcb70972667c89f1e838d621c105f5",
  base: "http://api.weatherstack.com/current",
};

export default function App() {

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState([]);

    console.log(query, "query");
    console.log(weather, "weather")

  const search = () => {

    fetch(`${api.base}?access_key=${api.key}&query=${query})`)
        .then((res) => {
            return res.json();
        })
        .then((result) => {
            setWeather(result);
            setQuery("");
            console.log(result);
        })
        .catch(error => console.log(error));
  }

  const GeoLoc = () => {

  }
    // console.log(weather.current.weather_icons[0]);

  return (
      <View style={styles.container}>
          {weather == "" ?
            <View>
                <Text>{'toto'}</Text>
                <TextInput
                    onChangeText={text => setQuery(text)}
                    value={query}
                    onSubmitEditing={search}
                    placeholder="useless placeholder"
                />
            </View>
              :
            <View style={styles.container}>
              <Text>Open up App.js to start working on your app!toto</Text>
              <TextInput
                  onChangeText={e => setQuery(e)}
                  value={query}
                  onSubmitEditing={search}
                  placeholder="useless placeholder"
              />
                    <Image source={{uri: `${weather.current.weather_icons[0]}`}} style={{width: 100, height: 100}}/>
                    <Text>{weather.location.name}</Text>
                    <Text>{weather.current.temperature}</Text>
                    <StatusBar style="auto" />
            </View>
        }
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
