/* 
 * @author Lellansin
 * @website http://www.lellansin.com/node-js-tutorial
 *
 * 上一节我们看到函数可以赋值给变量, 同样的函数也可以作为参数传递
 */

function add(a, b, cb) {
	// 不直接 return 而是把结果传递给传入的函数执行
	cb(a + b);
}

add(10, 5, function(result) { // 参数名随便取
	console.log('result:' + result); // 在回调函数中获取结果
});

/*

如果你已经看懂了这个调用的过程，那么接下来开始科普。

在 js 中通常的函数式不会使用以上回调函数的方式来处理，只有当操作比较耗时的时候才会把处理的回调函数传入。
通过传入回调函数，主线程会继续往下执行，当耗时的操作结束开始调用传入的函数时才执行，常见于文件操作等。

例如：
*/

var fs = require('fs');
var data = "Hello 文件操作!";

console.log('准备写入文件');

fs.writeFile('./message.txt', data, function(err) {
	// 耗时操作结束才调用该回调
	if (err) {
		// 如果有错误
		console.log('err:' + err);
	}
	console.log('文件写入完毕');
});

console.log('调用结束');

/*
输出：
准备写入文件
调用结束
文件写入完毕

注：
默认约定回调函数第一个参数为 err
*/