import React, {
	Component
} from 'react';
import {
	StyleSheet,
	Text,
	View,
	WebView
} from 'react-native';
import TWebView from './twebview';
const nearByURL = './../html/nearby.html';
export default class toiletPage extends Component {
	render() {
		return (
			<View style={styles.container}>
				<TWebView url={nearByURL}/>
			</View>
		)
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1
	}
})