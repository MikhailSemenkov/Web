import AddTaskView from "../view/add_task.js"

export default class AddTaskController {
	constructor(body, users, homeController) {
		this.body = body;
		this.users = users;
		this.homeController = homeController;
	}

	display() {
		AddTaskView.display(this.body);
		document.getElementById('addTaskBtn').addEventListener('click', (event) => ((body, tasks, homeController) => 
																		this.buttonOnClick(body, tasks, homeController))
																		(this.body, this.users.currentUser.tasks, this.homeController));
	}

	validateTitle() {
		let title = document.getElementById('inputTitle');
		if (title.value.length > 0) {
			title.classList.remove('is-invalid');
			return true;
		} else {
			title.classList.add('is-invalid');
			return false;
		}
	}

	validateDescription() {
		let description = document.getElementById('inputDescription');
		if (description.value.length > 0) {
			description.classList.remove('is-invalid');
			return true;
		} else {
			description.classList.add('is-invalid');
			return false;
		}
	}

	validateDeadline() {
		let date = document.getElementById('inputDeadlineDate');
		if (date.value !== "") {
			date.classList.remove('is-invalid');
			return true;
		} else {
			date.classList.add('is-invalid');
			return false;
		}
	}

	buttonOnClick(body, tasks, homeController) {
		if (this.validateTitle() & this.validateDescription() & this.validateDeadline()) {
			tasks.add(document.getElementById('inputTitle').value, 
						document.getElementById('inputDescription').value, 
						document.getElementById('inputDeadlineDate').value);
			homeController.display();
		}
	}
}