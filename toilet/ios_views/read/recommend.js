import React, {
	Component
} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image
} from 'react-native';
import Util from './../util'
class recommend extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: this.props.name,
			data: this.props.data
		}
	}
	render() {
			return (
					<View style={styles.container}>
						<View>
							<Text style={[styles.text1,styles.title_top]}>{this.state.name}</Text>
						</View>
						
							{
								this.state.data.map((item,index)=>{
									return(
											{(index/4)===0?true:false}
											<Text key={index} style={{color:"red"}}>{(index/4)===0?true:false} </Text>
										 )
								})
							}
						<View style={styles.img_view}>
							<View style={[styles.img_item]}>
								<Image style={[styles.img,styles.shadow]} source={{uri:'http://7xtp9h.com2.z0.glb.clouddn.com/1.png'}}/>
								<Text style={styles.title} numberOfLines={2}>标题</Text>
							</View>
							<View style={[styles.img_item]}>
								<Image style={[styles.img,styles.shadow]} source={{uri:'http://7xtp9h.com2.z0.glb.clouddn.com/1.png'}}/>
								<Text style={styles.title} numberOfLines={2}>标题</Text>
							</View>
							<View style={[styles.img_item]}>
								<Image style={[styles.img,styles.shadow]} source={{uri:'http://7xtp9h.com2.z0.glb.clouddn.com/1.png'}}/>
								<Text style={styles.title} numberOfLines={2}>标题</Text>
							</View>
							<View style={[styles.img_item]}>
								<Image style={[styles.img,styles.shadow]} source={{uri:'http://7xtp9h.com2.z0.glb.clouddn.com/1.png'}}/>
								<Text style={styles.title} numberOfLines={2}>标题</Text>
							</View>
						</View> 
			< /View>
)
}
}

var styles = StyleSheet.create({
	container: {
		marginLeft: 10,
		marginRight: 10
	},
	img_view: {
		flexDirection: 'row'
	},
	img_item: {
		height: 157,
		flex: 1
	},
	img: {
		height: 120,
		width: (Util.size.width - 40) / 4
	},
	shadow: {
		shadowOpacity: 1,
		shadowColor: '#ccc',
		shadowOffset: {
			width: 1 * Util.pixel,
			height: Util.pixel
		}
	},
	text1: {
		color: '#5E5E5E',
		marginBottom: 8,
		fontSize: 16
	},
	title_top: {
		marginTop: 10,
	},
	title: {
		fontSize: 14,
		marginTop: 4,
		color: '#818181'
	}
})

module.exports = recommend;