// 循环语句以及逻辑语句无法创建作用域，因此变量会相互覆盖。
var foo = 1;

if (true) {
	foo = 2;
	for (var i = 3; i < 5; i++){
		foo = i;
		console.log(foo);
	}
}