// 作用域链在定义时，即被调用。
var parentFunction = function () {
	var foo = 'foo';
	return function () {
		console.log(foo);
	};
};

var nestedFunction = parentFunction();

nestedFunction();