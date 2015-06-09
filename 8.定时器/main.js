/*
 * @author Lellansin
 * @website http://www.lellansin.com/node-js-tutorial
 *
 * 定时器操作 API 
 * 地址：http://nodeapi.ucdok.com/#/api/timers.html
 */

var i = 1;

// 延迟执行
setTimeout(function() {
	console.log('现在已经是2秒以后了');
}, 2000);

// 定时执行
setInterval(function() {
	console.log('第' + i + 's');
	i++;
}, 1000);

// 第一个参数为到点触发的函数内容，第二个参数为时间（微妙）
// 更多函数参见 API 文档



