const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onBlurInput);

function onBlurInput(event) {
	const maxLength = +event.currentTarget.dataset.length;
	const currentNumberOfSymbol = inputEl.value.trim().split('').length;

	if (currentNumberOfSymbol <= maxLength && currentNumberOfSymbol > 0) {
		inputEl.classList.add("valid");
		inputEl.classList.remove("invalid");
		return;
	} 

	inputEl.classList.add("invalid");
	inputEl.classList.remove("valid");

	console.log(currentNumberOfSymbol);
}


