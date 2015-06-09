/* 
 * @author Lellansin
 * @website http://www.lellansin.com/node-js-tutorial
 *
 * 网络编程使用 net 模块
 * API 参见 http://nodeapi.ucdok.com/#/api/net.html
 */
var util = require('util');
var net = require('net');

// 创建服务器(Server)
var server = net.createServer(function(conn) {
	console.log('Connect! 有链接接入\n');

	// .on 监听 end 事件（服务器关闭事件）
	conn.on('end', function() {
		console.log('Disconnect! 连接断开!');
	});

	// .on 监听 data 事件（接受数据事件）
	conn.on('data', function(data) {
		console.log('收到消息:' + data.toString());
	});

	// 初次链接, 向对方发送字符串
	conn.write('hello 欢迎链接到服务器\r\n');

	// 调用内置的 readline 模块
	var readline = require('readline');
	// 根据输入流和输出流来创建一个 readline 交互
	var rl = readline.createInterface({input: process.stdin, output: process.stdout});
	// 当用户输入一行数据时（按下回车）
	rl.on('line', function(str) {
		conn.write(str);
	});
});

// 监听 8000 端口
server.listen(8000, function() { // 'listening' 监听器
	console.log('Listen! 服务器已绑定');
});