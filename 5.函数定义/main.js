/*
 * @author Lellansin
 * @website http://www.lellansin.com/node-js-tutorial
 *
 * js 函数定义
 * 在 js 中所有变量都用 var 定义，函数的参数自然也不用指定类型
 * 
 * 形如：
 * function关键字 + 函数名 + (参数列表) {
 *  	函数内容
 * }
*/
function add(a, b) {
	return a + b; // 返回 a + b 的结果
}

console.log('result:' + add(12, 6)); // 18

/*
	在 js 中所有的变量都可以自由赋值, 所以函数也可以直接赋值给变量
	这里定义一个数组求和的函数作为示例
*/
var sum = function(arr) {
	var result = 0;
	// js 中无指针，在函数内操作数组与在外操作无区别
	for (var i = 0; i < arr.length; i++) {
		result += arr[i];
	}
	return result;
};

var array = [1, 2, 3, 4];
console.log('sum:' + sum(array)); // 10