/* 
 * @author Lellansin
 * @website http://www.lellansin.com/node-js-tutorial
 *
 * 网络编程使用 net 模块
 * API 参见 http://nodeapi.ucdok.com/#/api/net.html
 */
var net = require('net');

var client = net.connect({
		port: 8000
	},
	function() {
		console.log('Start! 客户端已连接');

		var readline = require('readline');
		var rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout
		});
		rl.on('line', function(str) {
			client.write(str);
		});
	}
);

// .on 监听 data 事件（接受数据事件）
client.on('data', function(data) {
	console.log('收到消息:' + data.toString());
});

// .on 监听 end 事件（服务器关闭事件）
client.on('end', function() {
	console.log('Disconnet! 客户端断开连接');
});