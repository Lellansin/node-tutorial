/* 
 * @author Lellansin
 * @website http://www.lellansin.com/node-js-tutorial
 *
 * 网络编程使用 net 模块
 * API 参见 http://nodeapi.ucdok.com/#/api/net.html
 */
var util = require('util');
var net = require('net');
var io = require('../io');

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
		io.print("> ");
		var str = io.gets();
		if (str == "exit") {
			conn.end();
			return;
		} else {
			conn.write(str);
			console.log('等待消息返回---------------------');
		}
	});

	// 初次链接, 向对方发送字符串
	conn.write('hello 欢迎链接到服务器\r\n');
});

// 监听 8000 端口
server.listen(8000, function() { // 'listening' 监听器
	console.log('Listen! 服务器已绑定');
});