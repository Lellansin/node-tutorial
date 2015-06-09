/*
 * @author Lellansin
 * @website http://www.lellansin.com/node-js-tutorial
 *
 * require 用于引用其他模块中的代码
 */

// os 为 node 内置模块, 通过 require直接调用
var os = require("os");

console.log("当前CPU架构:" + os.arch());
console.log("操作系统平台:" + os.platform());
console.log("当前机器名称:" + os.hostname());

/*
	自定义模块调用

	. 是当前路径
	./myModule 是当前文件夹中的 myModule 文件
*/
var my_module = require("./myModule");

my_module.test(); // 调用自定义的模块方法

console.log("my_module.list:" + my_module.list); // [1, 2, 3]

/*
注：
1. 更多 os 的函数请参见模块文档 http://nodeapi.ucdok.com/#/api/os.html
2. 6 以后的内容为 Node API 提供
*/