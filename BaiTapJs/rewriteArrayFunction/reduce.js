const arr = [9, 8, 7, 6, 5];
Array.prototype.myReduce = function (callbackFn, initialValue) {
	let result = 0;
	let startIndex = -1;
	if (initialValue != undefined) {
		result = initialValue;
		startIndex = 0;
	} else {
		result = this[0];
		startIndex = 1;
	}
	for (let i = startIndex; i < this.length; i++) {
		result = callbackFn(result, this[i], i, this);
	}
	return result;
};

const sum = arr.myReduce((acc, cur, index, array) => {
	console.log(acc, cur, index, array);
	return acc + cur;
}, 10);
console.log(sum);
