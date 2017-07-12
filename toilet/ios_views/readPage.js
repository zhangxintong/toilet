import React, {
	Component
} from 'react';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';

export default class readPage extends Component {
	render() {
		return (
			<View>
				<Text style={styles.text}>阅读</Text>
			</View>
		)
	}
}

var styles = StyleSheet.create({
	text: {
		fontSize: 60
	}
})