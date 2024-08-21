const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

function calcTip(bill) {
	let result = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
	return result;
}

for (let i = 0; i < bills.length; i++) {
	let tip = calcTip(bills[i]);
	let total = bills[i] + tip;
	tips.push(tip);
	totals.push(total);
}

function calcAverage(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum / arr.length;
}

console.log('Tips:', tips);
console.log('Total:', totals);
console.log('Average of totals: ', calcAverage(totals));
