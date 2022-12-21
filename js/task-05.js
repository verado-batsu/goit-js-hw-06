const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener('input', (event) => {
	const inputValue = event.currentTarget.value.trim();
	if (inputValue !== '') {
		spanEl.textContent = inputValue;
		return;
	}
	spanEl.textContent = "Anonymous";
})