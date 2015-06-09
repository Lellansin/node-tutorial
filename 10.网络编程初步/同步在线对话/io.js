var fs = require('fs');

exports.print = function(str) {
	process.stdout.write(str); // 不带回车（console.log 有带回车）
}

exports.gets = function() {
	// 同步从输入流中读取用户的输入
	var response = fs.readSync(process.stdin.fd, 100, 0);
	// respnse 是一个数组形如 ['数据', 长度]
	var result = response[0];
	// 去掉结尾的 \r\n, 仅用于 windows
	return String(result).substr(0, result.length - 2);
}