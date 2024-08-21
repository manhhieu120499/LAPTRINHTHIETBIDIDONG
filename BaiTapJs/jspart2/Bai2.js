function calcTip(bill) {
	let result = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
	return result;
}

const bills = [125, 555, 44];
const tips = [calcTip(125), calcTip(555), calcTip(44)];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log('Total: ', totals);
