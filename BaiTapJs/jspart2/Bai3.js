const Mark = {
	name: 'Mark Miller',
	mass: 78,
	height: 1.69,
	calcBMI: function () {
		return this.mass / (this.height * this.height);
	},
};

const John = {
	name: 'John Smith',
	mass: 92,
	height: 1.95,
	calcBMI: function () {
		return this.mass / (this.height * this.height);
	},
};

if (Mark.calcBMI() > John.calcBMI()) {
	console.log(
		`Mark's BMI (${Mark.calcBMI()}) has a higher than ${John.calcBMI()}`
	);
} else if (Mark.calcBMI() < John.calcBMI()) {
	console.log(
		`Mark's BMI (${Mark.calcBMI()}) has a lower than ${John.calcBMI()}`
	);
} else {
	console.log(`Mark's BMI (${Mark.calcBMI()}) is equal to ${John.calcBMI()}`);
}
