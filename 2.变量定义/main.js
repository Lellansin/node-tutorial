/*
 * @author Lellansin
 * @website http://www.lellansin.com/node-js-tutorial
 * 
 * js 的变量定义不区分类型一律使用 var 关键字
 */

var test; 				// 如果没有定义的话默认是 undefined
var i = 10, j = 12; 	// 数字
var str = "hello"; 		// 字符串
var flag = true; 		// 布尔类型
var arr = [1, 2, 3]; 	// 数组类型
var json = { 			// Json对象
	"name": "Alan",
	"age": 18
}

// 字符串可以直接拼接
console.log("数字 " + i + " 字符串 " + flag);

// 数组的第一个元素，通过下标访问与 C 无区别
console.log('arr[0]:'  + arr[0]);

// json 对象由键值对组成，通过键名可以直接访问其值
console.log('json["name"]:'  + json["name"]);

// 与 json["name"] 相同，在知道键名的情况下才可以调用
console.log('json.name:'  + json.name);