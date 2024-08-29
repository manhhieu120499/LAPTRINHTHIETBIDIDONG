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

class EVCl extends CarCl {
	#charge;
	constructor(make, speed, charge) {
		super(make, speed);
		this.#charge = charge;
	}

	accelerate() {
		this.speed += 20;
		this.#charge -= 1;
		console.log(
			`${this.make} is going at ${this.speed} km/h with charge of ${
				this.#charge
			}%`
		);
	}

	brake() {
		this.speed -= 5;
		console.log(`${this.make} is going at ${this.speed} km/h`);
	}

	chargeBattery() {
		if (chargeTo >= 0 && chargeTo <= 100) {
			this.#charge = chargeTo;
			console.log(`${this.make} charged to ${this.#charge}%`);
		} else {
			console.log('Charge must be between 0 and 100%');
		}
		return this;
	}
}

const EVCl1 = new EVCl('Rivian', 120, 23);
EVCl1.accelerate();
EVCl1.accelerate();
EVCl1.accelerate();
EVCl1.brake();
EVCl1.brake();
