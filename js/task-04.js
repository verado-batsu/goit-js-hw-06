const arrayOfBtnEl = document.querySelectorAll("#counter button");
const valueEl = document.querySelector("#value");

let counterValue = 0;

arrayOfBtnEl.forEach(btn => {
	const action = btn.dataset.action;

	btn.addEventListener("click", () => {
		if (action === 'increment') {
			counterIncrement();
		}
		if (action === 'decrement') {
			counterDecrement();
		}
		valueEl.textContent = counterValue;
	});
});

function counterIncrement() {
	counterValue += 1;
}

function counterDecrement() {
	counterValue -= 1;
}

