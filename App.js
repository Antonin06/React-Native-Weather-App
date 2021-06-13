import React, {useEffect, useState} from 'react';
import {
    Button,
    Image,
    StyleSheet,
    Text,
    TextInput,
    View,
    Alert,
    Keyboard,
    TouchableWithoutFeedback,
    ImageBackground, SafeAreaView
} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {getLocation, getWeather} from "./store/actions/weatherActions";

import Form from "./components/form";
import Weather from "./components/weather";


const App = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const { data, error } = useSelector(state => state.weather);

    // useEffect(() => {
    //     dispatch(getWeather(''))
    //     // dispatch(getLocation(''))
    // }, [dispatch])
    const searchSubmitHandler = () => {
        if (search === '') {
            return Alert.alert('Validation', 'City name is required!', [{ text: 'OK' }]);
        }

        setLoading(true);
        dispatch(getWeather(search, () => setLoading(false), () => setLoading(false)));
        setSearch('');
        Keyboard.dismiss();
    };
    const image = { uri: "https://reactjs.org/logo-og.png" };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={styles.container}>
                <ImageBackground style={styles.image} source={image}>
                    <View style={styles.containerView} >
                        <Weather loading={loading} data={data} error={error} />
                        <Form search={search} onSetSearch={setSearch} onSubmit={searchSubmitHandler}/>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        </TouchableWithoutFeedback>
);
}



// https://app.nuclino.com/CDA2-React/React/MtoForecast-8ec14f27-08b1-40f2-a053-67e3913d088c


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    containerView: {
        flex: 1,
        padding: 30
    }

});

export default App;
