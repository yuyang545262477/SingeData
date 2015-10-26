//新建function person
var person = {};
//使用defineProperties 增加原型链，并增加相应的属性
Object.defineProperties(
	person, {
		title: { value: 'fe', enumerable: true },
		corp: { value: 'BABA', enumerable: true },
		salary: { value: 50000, enumerable: true, writable: true }
	});
//显示function person，原型链salary，对应的属性 
console.log(Object.getOwnPropertyDescriptor(person, 'salary'));


