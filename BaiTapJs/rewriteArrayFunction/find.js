const arr = [5, 12, 8, 130, 44];

Array.prototype.myFind = function (callbackFn) {
	for (let i = 0; i < this.length; i++) {
		if (callbackFn(this[i], i, this)) return this[i];
	}
	return undefined;
};

const result = arr.myFind((item, index, array) => item > 7);
console.log(result);
