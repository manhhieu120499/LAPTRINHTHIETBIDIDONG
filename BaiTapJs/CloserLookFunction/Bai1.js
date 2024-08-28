const poll = {
	question: 'What is your favourite programming language?',
	options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
	// This generates [0, 0, 0, 0]. More in the next section!
	answers: new Array(4).fill(0),
};

const app = document.querySelector('#app');
poll.registerNewAnswer = () => {
	let html = `<p>${poll.question}</p>`;
	poll.options.map((option) => {
		html += `<p>${option}</p>`;
	});
	html += '<p>(Write option number)</p>';
	html += '<input placeholder="Enter your option..." id="input-option"/>';
	html += '<button id="btn-submit">' + 'Send' + '</button>';
	app.innerHTML = html;
};

poll.displayResult = (type = []) => {
	if (typeof type === 'string') {
		console.log(`Poll results are ${type}`);
	}
	if (typeof type === 'object') {
		console.log(type);
	}
};

poll.registerNewAnswer();

const inputOption = document.querySelector('#input-option');
const btn = document.querySelector('#btn-submit');

btn.addEventListener('click', function () {
	if (inputOption.value.match(/[0-9]+$/)) {
		let value = parseInt(inputOption.value);
		if (value >= 0 && value <= 3) {
			poll.answers[value]++;
			inputOption.value = '';
		} else {
			alert('Please enter a value between 0 and 3');
		}
	} else {
		alert('Please enter a valid number');
	}
	poll.displayResult(poll.answers);
});

const testData1 = [5, 2, 3];
const testData2 = [1, 5, 3, 9, 6, 1];

poll.displayResult(testData1);
poll.displayResult(testData2);
