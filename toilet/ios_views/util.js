import React, {
	Component
} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	PixelRatio
} from 'react-native';
//1)封装fetch
//2）获取屏幕的宽度和高度
//3)获取最小线宽
module.exports = {
	size: {
		height: Dimensions.get('window').height,
		width: Dimensions.get('window').width
	},
	pixel: 1 / PixelRatio.get(),
	get: function(url, successCallback, failCallback) {
		return fetch(url)
			.then((response) => response.json())
			.then((responseJson) => {
				return successCallback(responseJson);
			})
			.catch((error) => {
				failCallback(error);
			});
	}
}