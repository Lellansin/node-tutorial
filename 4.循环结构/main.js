/*
 * @author Lellansin
 * @website http://www.lellansin.com/node-js-tutorial
 * 
 * while 循环
 */
var n = 5;
while (n > 0) {
	console.log('n = ' + n);
	n--;
}

/*
	for 循环
*/

var arr = [6, 8, 4, 3, 2, 1];
for (var i = 0; i < 5; i++) {
	console.log('arr[' + i + '] = ' + arr[i]);
}

/*
	for in 循环 (常用于遍历对象)
*/
var student = {
	"name": "Alan",
	"age": 18
};

for (var key in student) {
	console.log('key: ' + key + ' value:' + student[key]);
}