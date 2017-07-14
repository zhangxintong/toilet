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
import Util from './util';

const nearByURL = 'http://localhost:4000/nearby.html';

// Util.get("https://api.douban.com/v2/movie/in_theaters", function(data) {
// 	console.log(data)
// }, function(error) {
// 	console.log(error)
// })
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