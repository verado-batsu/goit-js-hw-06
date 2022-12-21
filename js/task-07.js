const inputRangeEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

spanEl.style.fontSize = `${inputRangeEl.value}px`

inputRangeEl.addEventListener('input', onInputRange);

function onInputRange(event) {
	spanEl.style.fontSize = `${inputRangeEl.value}px`;
}