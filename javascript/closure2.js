var countUpFromZero = function () {
	var count = 0;
	return function () {
		return ++count;
	};
}();

console.log(countUpFromZero());
console.log(countUpFromZero());
console.log(countUpFromZero());
console.log(countUpFromZero());
