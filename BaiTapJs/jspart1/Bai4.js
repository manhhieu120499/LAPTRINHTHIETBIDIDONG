function calculateTip(bill) {
	let result = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
	return result;
}

console.log(
	`The bill was 275, the tip was ${calculateTip(275)}, and the total value ${
		275 + calculateTip(275)
	}`
);
console.log(
	`The bill was 40, the tip was ${calculateTip(40)}, and the total value ${
		40 + calculateTip(40)
	}`
);
console.log(
	`The bill was 430, the tip was ${calculateTip(430)}, and the total value ${
		430 + calculateTip(430)
	}`
);
