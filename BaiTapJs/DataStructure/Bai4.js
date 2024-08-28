document.body.appendChild(document.createElement('textarea'));
document.body.appendChild(document.createElement('br'));
document.body.appendChild(document.createElement('button'));

const btn = document.querySelector('button');
const textarea = document.querySelector('textarea');
textarea.innerText =
	'underscore_case ' +
	'\n' +
	'first_name ' +
	'\n' +
	'Some_Variable ' +
	'\n' +
	'calculate_AGE ' +
	'\n' +
	'delayed_departure';
btn.innerText = 'Convert to camelCase';
function convertToCamelCase(str) {
	let newStr = str.toLowerCase();
	let result = '';

	for (let i = 0; i < newStr.length; i++) {
		if (newStr[i] === '_') {
			result += newStr[i + 1].toUpperCase();
			i++;
		} else {
			result += newStr[i];
		}
	}

	return result;
}

btn.addEventListener('click', function () {
	let arrString = textarea.value.split(' ');
	let camelCaseArr = arrString.map((str) => convertToCamelCase(str));
	textarea.innerText = camelCaseArr.join(' ');
});
