// 数组转化为字符串
//通过数组，创建重复方法。
function repeat(str,n) {
	console.log( new Array(n + 1).join(str));
}

repeat("a", 3);
repeat("b", 5);
