// 作用域查找，由里到外，查找到第一个即停止。

var x = 10;
var Foo = function () {
	var x = 20;
	var boo = function () {
		var x = 30;
		console.log(x);
	} ();
};

Foo();//查找到最近的x即停止了。
 

