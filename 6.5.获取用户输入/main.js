/*
 * @author Lellansin
 * @website http://www.lellansin.com/node-js-tutorial
 *
 * 如果有学 C/C++ 基础就会很好理解这个
 * 
 * 默认的程序有三个流分别是：输入流、输出流、错误流
 * 用户的输出（console.log）就是把数据写入到输出流中
 * 而要获取用户输入则是读取输入流中的数据
 * 所以用 fs 读取文件的接口去读取用户的输入就可以实现 C/C++ 中的 gets 了
 * 
 * 顺便说下，这个是同步的获取输入，异步的方式参见同文件夹下的test.js
 */

var fs = require('fs');
console.log('请输入:');
var response = fs.readSync(process.stdin.fd, 100, 0);
var result = response[0]; // respnse 是一个数组形如 ['数据', 长度]
console.log('- result: [' + result + ']');

/*

输入：hello world
输出：
- result: [hello world
]

注：
1. 上面的结果有带换行
2. 回头会吧这个操作封装一下使用
*/