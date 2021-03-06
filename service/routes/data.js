var express = require('express');
var router = express.Router();
var fs = require('fs');
var PATH = 'public/data/';
/* 读取数据模块*/
// data/read?type=it.json
router.get('/read', function(req, res, next) {
	var type = req.param('type') || '';
	fs.readFile(PATH + type + '.json', function(error, data) {
		if (error) {
			return res.send({
				status: 0,
				info: "读取文件出现异常"
			})
		}
		var COUNT = 50;
		var obj = [];
		try {
			obj = JSON.parse(data.toString());
		} catch (e) {
			obj = [];
		}
		if (obj.length > COUNT) {
			obj = obj.slice(0, COUNT);
		}
		return res.send({
			status: 1,
			data: obj
		})
	});
});
//数据存储模块
router.post('/write', function(req, res, next) {
		//文件名
		var type = req.param('type') || '';
		//关键字段
		var url = req.param('url') || '';
		var title = req.param('title') || '';
		var img = req.param('img') || '';
		if (!type || !url || !title || !img) {
			return res.send({
				status: 0,
				info: "提交的字段不全"
			});
		}
		console.log("****" + url + title + img)
		var filePath = PATH + type + '.json';
		//1)需要拿到文件的信息
		fs.readFile(filePath, function(error, data) {
			if (error) {
				return res.send({
					status: 0,
					info: "读取数据失败"
				});
			}
			var arr = JSON.parse(data.toString());
			//代表每一条记录
			var obj = {
				url: url,
				img: img,
				title: title,
				id: guidGenerate(),
				time: new Date()
			};
			//放到数组最前面
			arr.splice(0, 0, obj);
			//2)写入文件
			var newData = JSON.stringify(arr); //数组转成字符串
			fs.writeFile(filePath, newData, function(err) {
				if (err) {
					return res.send({
						status: 0,
						info: "写入失败"
					})
				}
				return res.send({
					status: 1,
					info: obj
				})
			})
		});

	})
	//阅读模块写入接口
router.post('/write_config', function(req, res, next) {
		//TODO 后期进行提交数据的验证
		var data = req.body.data;
		var obj = JSON.parse(data);
		var newData = JSON.stringify(obj);
		fs.writeFile(PATH + "config.json", newData, function(err) {
			if (err) {
				return res.send({
					status: 0,
					info: "写入失败"
				})
			}
			return res.send({
				status: 1,
				info: obj
			})
		})

	})
	//登录接口
router.post('/login', function(req, res, next) {
		//用户名、密码、验证码
		var username = req.body.username;
		var password = req.body.password;
		//TODO 对用户名、密码校验
		if (username === "admin" && password === "123456") {
			req.session.user = {
				username: username
			};
			return res.send({
				status: 1
			})
		}

		return res.send({
			status: 0,
			info: "登录失败"
		})
	})
	//guid
function guidGenerate() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = Math.random() * 16 | 0,
			v = c == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	}).toUpperCase();
}
module.exports = router;