//作用域

// 全局作用域
var foo = 0;
console.log(foo);
// 局部作用域
var Myfunction = function () {
	var foo = 1;
	console.log(foo);

	var MyNestFunction = function () {
		// 也是局部作用域
		var foo = 2;
		console.log(foo);
	} ();

}();
// eval作用域
eval('var foo = 3 ; console.log(foo);');