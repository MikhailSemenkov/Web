import RegisterView from '../view/register.js'

export default class RegisterController {
	constructor(body, users, loginController) {
		this.body = body;
		this.users = users;
		this.loginController = loginController;
	}

	display() {
		RegisterView.display(this.body);
		this.addValidationListeners();
	}

	addValidationListeners() {
		document.querySelector('#inputUsername')?.addEventListener('input', this.validateUsername);
		document.querySelector('#inputEmail')?.addEventListener('input', this.validateEmail);
		document.querySelector('#inputBirthdate').addEventListener('input', this.validateBirthdate);
		document.querySelector('#inputPassword').addEventListener('input', this.validatePassword);
		document.querySelector('#confirmPassword').addEventListener('input', this.validatePassword);
		document.querySelector('#check').addEventListener('input', this.validateCheck);
		document.getElementById('registerProfileBtn').addEventListener('click', (event) => ((body, users, loginController) =>
																					this.buttonOnClick(body, users, loginController))
																					(this.body, this.users, this.loginController));
	}

	validateUsername() {
		let username = document.getElementById('inputUsername');
		const regular = /([A-Z])\w+/;
		if (regular.test(username.value)) {
			username.classList.remove('is-invalid');
			return true;
		} else {
			username.classList.add('is-invalid');
			return false;
		}
	}


	validateEmail() {
		let email = document.getElementById('inputEmail');
		const regular = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (regular.test(email.value)) {
			email.classList.remove('is-invalid');
			return true;
		} else {
			email.classList.add('is-invalid');
			return false;
		}
	}

	validateBirthdate() {
		let date = document.getElementById('inputBirthdate');
		let now = new Date();
		if (date.value !== "" && Date.parse(date.value) < now) {
			date.classList.remove('is-invalid');
			return true;
		} else {
			date.classList.add('is-invalid');
			return false;
		}
	}

	validatePassword() {
		let password1 = document.getElementById('inputPassword');
		let password2 = document.getElementById('confirmPassword');
		if (password1.value.length >= 8) {
			password1.classList.remove('is-invalid');
		} else {
			password1.classList.add('is-invalid');
		}

		if (password2.value.length >= 8 && password1.value === password2.value) {
			password2.classList.remove('is-invalid');
			return true;
		} else {
			password2.classList.add('is-invalid');
			return false;
		}
	}

	validateCheck() {
		let check = document.getElementById('check');
		if (check.checked) {
			check.classList.remove('is-invalid');
			return true;
		} else {
			check.classList.add('is-invalid');
			return false;
		}
	}

	buttonOnClick(body, users, loginController) {
		if (this.validateUsername() & this.validateEmail() &
			this.validateBirthdate() & this.validatePassword() &
			this.validateCheck()) {
			let email = document.getElementById('inputEmail').value;
			if (!users.contains(email)) {
				let username = document.getElementById('inputUsername').value;
				let gender = document.getElementById('chooseGender').value;
				let date = document.getElementById('inputBirthdate').value;
				let password = document.getElementById('inputPassword').value;
				users.add(username, email, gender, date, password);
				loginController.display(body, users.currentUser);
			} else {
				window.alert('User with this email alredy registered');
			}
		}
	}
}
