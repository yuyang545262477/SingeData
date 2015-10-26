//Function 标签
//1._proto_ 原型标签
//2.class标签，显示对象属于的类型
//3.extensible标签,显示是否可扩展


//新建一个方法
var obj = { x: 1, y: 2 };
//检测这个方法，是否可以扩展
console.log(Object.isExtensible(obj));
//修改其可扩展性
Object.preventExtensions(obj);
//再次检测
console.log(Object.isExtensible(obj));


//想方法的标签变了，属性的标签也一同改变，就需要使用关键字seal
//先输出之前的属性标签
console.log(Object.getOwnPropertyDescriptor(obj, 'x'));
//密封obj
Object.seal(obj);
//查看变化
// console.log(Object.getOwnPropertyDescriptor(obj, 'x'));
//坚持是否密封了.
Object.isSealed(obj);


//上一个，只是修改了标签configurable
//现在，不仅修改configurable，连同writeable一同修改了。
//方法的不可扩展，严格来说 ＝＝＝ unconfigurable && unwriteable

//冻结方法obj
Object.freeze(obj);
//查看变化
console.log(Object.getOwnPropertyDescriptor(obj, 'x'));
//检查是否冻结
console.log(Object.isFrozen(obj));