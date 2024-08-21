function printForecast(arr) {
	let string = '';
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		string += `... ${arr[0]}ºC in ${++count} days`;
	}
	return string;
}

console.log(printForecast([17, 21, 23]));
