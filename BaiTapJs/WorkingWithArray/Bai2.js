function calcAverageHumanAge(ages) {
	let newAges = ages
		.map((age) => {
			if (age > 2) {
				return 16 + age * 4;
			} else {
				return 2 * age;
			}
		})
		.filter((age) => age >= 18);
	return newAges.reduce((sum, age) => sum + age, 0) / newAges.length;
}

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]).toFixed(2));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]).toFixed(2));
