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
	get speedUS() {
		return this.speed / 1.6;
	}
	set speedUS(speed) {
		this.speed = speed * 1.6;
	}
}

const myCar = new CarCl('Ford', 120);
myCar.accelerate();
myCar.brake();
console.log(`Speed in mi/h: ${myCar.speedUS}`);
myCar.speedUS = 50;
console.log(`Speed in km/h: ${myCar.speed}`);
