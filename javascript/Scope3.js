// 却少var的变量声明，此变量在全局作用域中
var foo = function () {
	var boo = function () {
		bar = 2;
	} ();
} ();

console.log(bar);
// 相反
var foo = function () {
	var boo = function () {
		var ba = 2;
	} ();
} ();

console.log(ba);