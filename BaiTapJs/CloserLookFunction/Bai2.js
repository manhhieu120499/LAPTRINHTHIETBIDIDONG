(function () {
	const header = document.querySelector('h1');
	header.style.color = 'red';
	// handle click events
	const mBody = document.querySelector('body');
	mBody.addEventListener('click', function () {
		header.style.color = 'blue';
	});
})();
