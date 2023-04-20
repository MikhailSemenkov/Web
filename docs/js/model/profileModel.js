import TasksList from "../model/tasksList.js"

export default class Profile {
	constructor(username, email, gender, birthdate, password) {
		this.username = username;
		this.email = email;
		this.gender = gender;
		this.birthdate = birthdate;
		this.password = password;
		this.tasks = new TasksList();
		this.tasks.add('Sample task 1', 'do this task', "05.01.2023");
		this.tasks.add('Sample task 2', 'do this task', "06.11.2023");
		this.tasks.changeDone(1);
	}

	update(username, email, gender, birthdate, password) {
		this.username = username;
		this.email = email;
		this.gender = gender;
		this.birthdate = birthdate;
		this.password = password;
	}

	getFormattedBirthdate() {
		var date = new Date(this.birthdate);
		const yyyy = date.getFullYear();
		let mm = date.getMonth() + 1;
		let dd = date.getDate();

		if (dd < 10) dd = '0' + dd;
		if (mm < 10) mm = '0' + mm;

		return yyyy + '-' + mm + '-' + dd;
	}
}