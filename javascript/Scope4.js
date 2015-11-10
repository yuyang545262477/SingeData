// // javascript  查找变量遵循查找链，由内向外
// var sayHiText = "hello";

// var func1 = function () {
// 	var func2 = function () {
// 		console.log(sayHiText);
// 	} ();
// } ();



var x = 10;
var Foo = function () {
	var y = 20;
	var boo = function () {
		var z = 30;
		console.log(x + y + z);
	} ();
};

Foo();

