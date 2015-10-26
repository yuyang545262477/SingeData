//本示例，用于展示通过 get(),set()方法来为对象增加属性。

var man = {
	name: 'bibi',
	get age() {
		return new Date().getFullYear() - 1991;
	},
	set age(val) {
		console.log('Age can\' be set to ' + val);
	}

};

console.log(man.age);
man.age = 25;