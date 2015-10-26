 //序列化

//新建function
var obj  = {
	x: 1,
	y: true,
	z: [1, 2, 3],
	nullVal: null
};
//对其进行序列化
JSON.stringify(obj);
//来查看一下
console.log(JSON.stringify(obj));



//讲一讲“坑”，也就是值的注意的地方
var obj1 = {
	var: undefined,//序列化后，该属性是不显示的
	a: NaN,//结果:null
	b: Infinity,//同上
	c:new Date()//会显示具体的时间
};
//验证一下
console.log(JSON.stringify(obj1));


//将json数据，解析成javascript，并且附着对象的属性
var obj2 = {};
obj = JSON.parse('{"x":1}');
console.log(obj.x);

//更为复杂的情况
var obj3 = {
	x: 1,
	y: 2,
	o: {
		o1: 3,
		o2: 4,
		toJSON: function () {
			return this.o1 + this.o2;
		}
	}
};

JSON.stringify(obj3);
console.log(JSON.stringify(obj3));