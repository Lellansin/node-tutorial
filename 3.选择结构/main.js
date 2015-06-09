/*
 * @author Lellansin
 * @website http://www.lellansin.com/node-js-tutorial
 * 
 * if else 的结构与 C语言、Java 等常见语言没有差别
 */

var a = 5, b = 6;

if (a > b) {
	console.log('a > b');
} else {
	console.log('a < b');
}

/*
	switch case 的结构也是很常见的 (不加 break 会 case 穿透)
*/
var x = 10;
switch (x / 10) {
	case 1:
		console.log('x / 10 = 1');
		break;
	case 2:
		console.log('x / 10 = 2');
		break;
	case 3:
		console.log('x / 10 = 3');
		break;
}