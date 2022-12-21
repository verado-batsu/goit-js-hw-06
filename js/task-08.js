const formEl = document.querySelector('.login-form');
const arrayOfInputEl = document.querySelectorAll('.login-form input');


const btnFormEl = document.querySelector('.login-form button');


formEl.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
	event.preventDefault();
	const { elements: { email, password } } = event.currentTarget;

	const userData = {
		[email.name]: email.value.trim(),
		[password.name]: password.value.trim(),
	};

	if (email.value.trim() === '' || password.value.trim() === '') {
		alert("Всі поля повинні бути заповнені!");
		return;
	};

	console.log(userData);
	event.currentTarget.reset();
}
