import React, {
	Component
} from 'react';
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	NavigatorIOS
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
			isShow: false,
			recommendTopic: null,
			hotTopic: null,
			category: null,
			other: null
		}
	}
	componentDidMount() {
		var that = this;
		Util.get('http://123.57.39.116:3000/data/read?type=config', function(data) {
			if (data.status === 1) {
				let obj = data.data;

				that.setState({
					isShow: true,
					recommendTopic: obj.recommendTopic,
					hotTopic: obj.hotTopic,
					category: obj.category,
					other: obj.other
				})
			} else {
				console.log("----data.status---", data.status)
			}
		}, function(error) {
			console.log("---error---", error)
		});

	}
	render() {
		return (
			<View style={styles.container}>
				<Search />
				<Hr />
				{
					this.state.isShow?
					<ScrollView style={[styles.container,{paddingTop:4}]}> 
						<Topic data={this.state.recommendTopic}/> 
						<Hr/>
						< Recommend name="热门推荐" data={this.state.hotTopic}/ >
						<Hr/>
						<Category data={this.state.category} />
						<Hr/>
						<Recommend name="清新一刻" data={this.state.other} />
					</ScrollView>
					:null				
				}
				
			</View>
		)
	}
}
class read extends Component {
	render() {
		return (
			<NavigatorIOS initialRoute = {{component: readPage,title: '阅读',navigationBarHidden:true}} style = {{flex: 1}}/>
		);
	}
}
var styles = StyleSheet.create({
	container: {
		flex: 1
	},
	hr: {
		marginTop: 10,
		borderColor: '#F0F0F0',
		borderWidth: Util.pixel,

	}
})