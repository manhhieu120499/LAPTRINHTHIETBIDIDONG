// javascript fundamental part 1
// coding challenge 1
// data 1
const mark = {
    mass: 78,
    height: 1.69
}

const john = {
    mass: 92,
    height: 1.95
}

//data 2
const mark_1 = {
    mass: 95,
    height: 1.88
}

const john_1 = {
    mass: 85,
    height: 1.76
}

function caculateBMI(mass, height) {
    return mass / (height * height);
}

// result data 1
const markHigherBMI = caculateBMI(mark.mass, mark.height) >
    caculateBMI(john.mass, john.height) ? true : false;

// result data 2
const markHigherBMI_1 = caculateBMI(mark_1.mass, mark_1.height) >
    caculateBMI(john_1.mass, john_1.height) ? true : false;

console.log('Mark have BMI higher than John: ', markHigherBMI);
console.log('Mark have BMI higher than John: ', markHigherBMI_1);