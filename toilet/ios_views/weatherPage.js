import React, {
	Component
} from 'react';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';

export default class weatherPage extends Component {
	render() {
		return (
			<View>
				<Text style={styles.text}>天气</Text>
			</View>
		)
	}
}

var styles = StyleSheet.create({
	text: {
		fontSize: 60
	}
})