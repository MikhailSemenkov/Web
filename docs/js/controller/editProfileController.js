import EditProfileView from "../view/edit_profile.js"

export default class EditProfileController {
	constructor(body, users, profileController) {
		this.body = body;
		this.users = users;
		this.profileController = profileController;
	}

	display() {
		EditProfileView.display(this.body, this.users.currentUser);
		this.addValidationListeners();
	}

	addValidationListeners() {
		document.querySelector('#inputUsername')?.addEventListener('input', this.validateUsername);
		document.querySelector('#inputBirthdate').addEventListener('input', this.validateBirthdate);
		document.querySelector('#inputOldPassword').addEventListener('input', (event) => ((users) => this.validatePassword(users))(this.users));
		document.querySelector('#inputNewPassword').addEventListener('input', (event) => ((users) => this.validatePassword(users))(this.users));
		document.querySelector('#confirmPassword').addEventListener('input', (event) => ((users) => this.validatePassword(users))(this.users));
		document.querySelector('#check').addEventListener('input', this.validateCheck);
		document.getElementById('saveBtn').addEventListener('click', (event) => ((users, profileController) => 
																				this.buttonOnClick(users, profileController))
																				(this.users, this.profileController));
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

	validatePassword(users) {
		let oldPassword = document.getElementById('inputOldPassword');
		let newPassword = document.getElementById('inputNewPassword');
		let confirmPassword = document.getElementById('confirmPassword');
		if (oldPassword.value.length >= 0 && newPassword.value.length >= 0 && confirmPassword.value.length >= 8) {
			if (oldPassword.value.length >= 8 && oldPassword.value === users.currentUser.password) {
				oldPassword.classList.remove('is-invalid');
			} else {
				oldPassword.classList.add('is-invalid');
			}

			if (newPassword.value.length >= 8 && newPassword.value !== users.currentUser.password) {
				newPassword.classList.remove('is-invalid');
			} else {
				newPassword.classList.add('is-invalid');
			}

			if (confirmPassword.value.length >= 8 && confirmPassword.value === newPassword.value) {
				confirmPassword.classList.remove('is-invalid');
				return true;
			} else {
				confirmPassword.classList.add('is-invalid');
				return false;
			}
		}
		return true;
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

	buttonOnClick(users, profileController) {
		if (this.validateUsername() & this.validateBirthdate() & 
			this.validatePassword(users) & this.validateCheck()) {
			var password = document.getElementById('inputNewPassword').value;
			if (password === '') {
				password = users.currentUser.password;
			}
			let email = document.getElementById('inputEmail').value;
			users.currentUser.update(document.getElementById('inputUsername').value, 
									 document.getElementById('inputEmail').value, 
									 document.getElementById('chooseGender').value, 
									 document.getElementById('inputBirthdate').value, 
									 document.getElementById('inputNewPassword').value);
			profileController.display();
		}
	}
}