import EditTaskView from "../view/edit_task.js"

export default class EditTaskController {
	constructor(body, users, homeController) {
		this.body = body;
		this.users = users;
		this.homeController = homeController;
	}

	display(id) {
		let tasks = this.users.currentUser.tasks;
		EditTaskView.display(this.body, tasks.getTask(id));
		document.getElementById('saveTaskBtn').addEventListener('click', (event) => ((id, tasks, homeController) => 
																		this.buttonOnClick(id, tasks, homeController))
																		(id, tasks, this.homeController));
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

	buttonOnClick(id, tasks, homeController) {
		if (this.validateTitle() & this.validateDescription() & this.validateDeadline()) {
			tasks.update(id,
						document.getElementById('inputTitle').value, 
						document.getElementById('inputDescription').value, 
						document.getElementById('inputDeadlineDate').value);
			homeController.display();
		}
	}
}