function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.body
const btnEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");


btnEl.addEventListener('click', onClickBtn);

function onClickBtn(event) {
	bodyEl.style.background = getRandomHexColor();
	spanEl.textContent = bodyEl.style.background;
	
}