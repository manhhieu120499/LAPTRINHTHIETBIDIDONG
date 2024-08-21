const element = document.querySelector('.again');
const elementView = document.querySelector('.view');
const score = document.querySelector('.score');
const secretElement = document.querySelector('.secretNumber');

element.addEventListener('click', () => {
	score.innerHTML = `Score: 0`;
	secretElement.innerHTML = 'SecretNumber: 0';
	elementView.style.backgroundColor = '#222';
});
