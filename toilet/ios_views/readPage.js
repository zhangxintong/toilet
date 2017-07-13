import React, {
	Component
} from 'react';
import {
	StyleSheet,
	Text,
	View,
	ScrollView
} from 'react-native';

import Category from './read/category';
import List from './read/list';
import Recommend from './read/recommend';
import Search from './read/search';
import Topic from './read/topic';
import Util from './util';

class Hr extends Component {
	render() {
		return (
			<View>
				<View style={styles.hr}/>
			</View>
		)
	}
}

export default class readPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isShow: false
		}
	}
	componentDidMount() {
		//Util.get();
		this.setState({
			isShow: true
		})
	}
	render() {
		return (
			<View>
				<Search />
				<Hr />
				{
					this.state.isShow?
					<ScrollView>
						<Topic /> 
						< Recommend / >
						<Category />
						<Recommend />
					</ScrollView>
					:null				
				}
				
			</View>
		)
	}
}

var styles = StyleSheet.create({
	text: {
		fontSize: 20
	},
	hr: {
		marginTop: 10,
		borderColor: '#F0F0F0',
		borderWidth: Util.pixel,

	}
})