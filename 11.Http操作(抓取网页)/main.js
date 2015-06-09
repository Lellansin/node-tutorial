/*
 * @author Lellansin
 * @website http://www.lellansin.com/node-js-tutorial
 * 
 * Http 模块调用
 * API 参见 http://nodeapi.ucdok.com/#/api/http.html
 */
var http = require('http');

var url = 'http://www.lellansin.com/';

http.get(url, function(res) {
	// console.log("statusCode: ", res.statusCode); // http请求相应状态
	// console.log("headers: ", res.headers); // 响应http协议头

	res.on('data', function(data) {
		// data 就是网页数据, 你可以用 fs 的将其保存到本地文件
		console.log('data: ' + data);
	});

}).on('error', function(e) {
	console.error(e);
});
