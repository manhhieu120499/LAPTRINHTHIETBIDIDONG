class CarCl {
	constructor(make, speed) {
		this.make = make;
		this.speed = speed;
	}
	accelerate() {
		this.speed += 10;
		console.log(`${this.make} is going at ${this.speed} km/h`);
	}
	brake() {
		this.speed -= 5;
		console.log(`${this.make} is going at ${this.speed} km/h`);
	}
}

class ElectricCar extends CarCl {
	constructor(make, speed, charge) {
		super(make, speed);
		this.charge = charge;
	}

	accelerate() {
		this.speed += 20;
		this.charge = this.charge - 1;
		console.log(
			`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
		);
	}

	chargeBattery(chargeTo) {
		this.charge = chargeTo;
		console.log(`${this.make} charged to ${this.charge}%`);
	}
}

const EV = new ElectricCar('Tesla', 120, 23);
EV.accelerate(); // tăng tốc
EV.brake(); // giảm tốc
EV.chargeBattery(90);
console.log(EV);
