function calcAverage(arr) {
	return arr.reduce((total, accNumber) => total + accNumber, 0) / arr.length;
}

function checkWinner(avgDolphins, avgKoalas) {
	if (avgDolphins > avgKoalas && avgDolphins >= 2 * avgKoalas) {
		return `Dolphins win ${avgDolphins} vs ${avgKoalas}`;
	} else if (avgKoalas > avgDolphins && avgKoalas >= 2 * avgDolphins) {
		return `Koalas win ${avgKoalas} vs ${avgDolphins}`;
	} else {
		return 'no team wins';
	}
}

console.log(
	'DATA 1-> ',
	checkWinner(calcAverage[(44, 23, 71)], calcAverage[(65, 54, 49)])
);
console.log(
	'DATA 2-> ',
	checkWinner(calcAverage[(85, 54, 41)], calcAverage[(23, 34, 27)])
);
