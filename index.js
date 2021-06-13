import { registerRootComponent } from 'expo';
import React from 'react';
import { View } from 'react-native';
import App from "./App";
import {Provider} from "react-redux";
import store from "./store";

class ReduxApp extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<App/>
			</Provider>
		);
	}
}

registerRootComponent(ReduxApp);
