//新建一个Function
//defineProperty方式
//原型链层面增加属性

var o = {};
Object.defineProperty(o, 'x', { value: 1 });//1.默认情况writeable =false,configurable=false
											//2.defineProperty(Function名称，"属性名称",{value:你想要赋予的值}};
var obj = Object.create(o);
console.log(obj.x);
obj.x = 200;
console.log(obj.x); 

//修改obj的原型链
Object.defineProperty(obj, 'x', { writable: true, configurable: true, value: 100 });
console.log(obj.x);
obj.x = 200;
console.log(obj.x);
