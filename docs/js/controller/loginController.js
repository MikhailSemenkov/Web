import LogInView from "../view/login.js"

export default class LoginController {
	constructor(body, users, profileController) {
		this.body = body;
		this.users = users;
		this.profileController = profileController;
	}

	display() {
		LogInView.display(this.body, this.users.currentUser);
		this.addValidationListeners();
	}

	addValidationListeners() {
		document.querySelector('#inputEmail')?.addEventListener('input', this.validateEmail);
		document.querySelector('#inputPassword').addEventListener('input', this.validatePassword);
		document.getElementById('loginProfileBtn').addEventListener('click', (event) => ((body, users, profileController) =>
																			  this.buttonOnClick(body, users, profileController))
																			  (this.body, this.users, this.profileController));
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

	validatePassword() {
		let password = document.getElementById('inputPassword');
		if (password.value.length > 0) {
			password.classList.remove('is-invalid');
			return true;
		} else {
			password.classList.add('is-invalid');
			return false;
		}
	}

	buttonOnClick(body, users, profileController) {
		if (this.validateEmail() & this.validatePassword()) {
			let email = document.getElementById('inputEmail').value;
			let password = document.getElementById('inputPassword').value;
			if (users.changeUser(email, password)) {
				profileController.display(body, users.currentUser);
			} else {
				window.alert('Wrong authentification values');
			}
		}
	}
}