/*
 * @author Lellansin
 * @website http://www.lellansin.com/node-js-tutorial
 *
 * fs 文件操作 API 
 * 地址：http://nodeapi.ucdok.com/#/api/fs.html
 */
var fs = require("fs");

// 读文件
var file = fs.readFileSync("./test.txt", 'utf8');
console.log(file);

// 写文件
var data = "Hello 文件操作!\r\n文件第二行";
fs.writeFileSync('./message.txt', data);

// 判断文件是否存在
if (fs.existsSync('./message.txt')) {
	console.log('./message.txt 文件存在');
}

// 重命名
fs.writeFileSync('./message2.txt', data); // 再写一个文件
fs.renameSync('./message2.txt', './rename.txt'); // 重命名这个新的文件


// 更多函数参见 API 文档

/*
注：node默认使用 utf8 编码，不支持 gbk中文编码，直接右键新建的文本文件是默认是 gbk 编码读出来时乱码
*/