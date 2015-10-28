// 遍历二维数组
var arr = [[0, 1], [2, 3], [4, 5]];
var i = 0, j = 0;
var row;

for (; i < arr.length; i++){
	row = arr[i];
	console.log("row" + i);
	for (j=0; j < row.length; j++){
		console.log(row[j]);
	}
}

