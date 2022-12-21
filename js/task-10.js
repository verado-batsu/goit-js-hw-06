function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsInputEl = document.querySelector("#controls > input");

const createBtnEl = document.querySelector("[data-create]");
const destroyBtnEl = document.querySelector("[data-destroy]");

const boxesEl = document.querySelector("#boxes");


createBtnEl.addEventListener('click', onClickCreate);
destroyBtnEl.addEventListener('click', destroyBoxes);

function onClickCreate() {
	destroyBoxes();
	let amount = 0;
	amount = controlsInputEl.value;
	createBoxes(amount);
}


function createBoxes(amount) {
	let div = '';
	let size = 30;

	for (let i = 1; i <= amount; i += 1){
		div += `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>`;
		size += 10;
	}

	boxesEl.insertAdjacentHTML("beforeend", div);
}

function destroyBoxes() {
	boxesEl.innerHTML = '';
}



