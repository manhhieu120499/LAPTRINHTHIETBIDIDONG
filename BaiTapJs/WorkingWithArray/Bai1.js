const Julia1 = [3, 5, 2, 12, 7];
const Kate1 = [4, 1, 15, 8, 3];
const Julia2 = [9, 16, 6, 8, 3];
const Kate2 = [10, 5, 6, 1, 4];

function checkDog(arr1, arr2) {
	let newJulia = [];
	for (let i = 0; i < arr1.length; i++) {
		if (i == 0 || i == arr1.length - 2 || i == arr1.length - 1) {
			continue;
		}
		newJulia.push(arr1[i]);
	}
	const arrCorrect = [...newJulia, ...arr2];
	for (let i = 0; i < arrCorrect.length; i++) {
		if (arrCorrect[i] >= 3) {
			console.log(
				`Dog number ${i + 1} is an adult ,and is ${
					arrCorrect[i]
				} years old`
			);
		} else {
			console.log(`Dog number ${i + 1} is still a puppy`);
		}
	}
}

checkDog(Julia1, Kate1);
checkDog(Julia2, Kate2);
