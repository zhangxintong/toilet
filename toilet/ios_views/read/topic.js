import React, {
	Component
} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image
} from 'react-native';
import Util from './../util';

class topic extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: props.data
		}
	}
	render() {
		return (
			<View style={styles.container}>
				<View>
					<Text style={styles.text1}>推荐专题</Text>
				</View>
				<View style={styles.img_view}>
					{
						this.state.data.map((item,index)=>{
							return(
									<View key={index} style={styles.img_item}>
										<Image resizeMode="cover" style={styles.img} source={{uri:item.img}}/>
									</View>
								)
						})
					}
				</View>
				<View>
					<Text style={styles.text2}>查看更多同期专题&gt;</Text>
				</View>
			</View>
		)
	}
}

var styles = StyleSheet.create({
	container: {
		marginLeft: 10,
		marginRight: 10
	},
	img: {
		width: (Util.size.width - 30) / 2, //（屏幕宽度-左边10-右边10-中间10）／2
		height: 80,
		borderRadius: 5
	},
	img_item: {
		flex: 1,
	},
	img_view: {
		flexDirection: 'row'
	},
	text1: {
		color: '#5E5E5E',
		marginBottom: 8,
		fontSize: 16
	},
	text2: {
		color: '#ccc',
		marginTop: 10,
		fontSize: 13,
		fontWeight: "300",
		marginBottom: 10
	}
});

module.exports = topic;