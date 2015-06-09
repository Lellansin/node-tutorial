/*
 * @author Lellansin
 * @website http://www.lellansin.com/node-js-tutorial
 *
 *	网络编程使用 net 模块
 *	API 参见 http://nodeapi.ucdok.com/#/api/net.html
 */
var net = require('net');
var io = require('../io');

var client = net.connect({
		port: 8000
	},
	function() {
		console.log('Start! 客户端已连接');
	}
);

// .on 监听 data 事件（接受数据事件）
client.on('data', function(data) {
	console.log('收到消息:' + data.toString());
	io.print("> ");
	var str = io.gets();
	if (str == "exit") {
		client.end();
		return;
	} else {
		client.write(str);
		console.log('等待消息返回---------------------');
	}
});

// .on 监听 end 事件（服务器关闭事件）
client.on('end', function() {
	console.log('Disconnet! 客户端断开连接');
});