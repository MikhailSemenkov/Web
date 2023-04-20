import Profile from '../model/profileModel.js';

export default class UsersList {
	constructor() {
		this.currentUser = new Profile("Jhon Doe", "jhondoe@example.com", "Male", "01/01/1990", "12345678");
		this.list = new Map([[this.currentUser.email, this.currentUser]]);
	}	

	add(username, email, gender, date, password) {
		let profile = new Profile(username, email, gender, date, password);
		this.list.set(email, profile);
	}

	delete(email) {
		this.list.delete(email);
	}

	contains(email) {
		return this.list.has(email);
	}

	changeUser(email, password) {
		let user = this.list.get(email);
		if (user === undefined) {
			return false;
		}
		if (user.password !== password) {
			return false;
		}
		this.currentUser = user;
		return true;
	}

	isLogedIn() {
		return this.currentUser != null;
	}
}