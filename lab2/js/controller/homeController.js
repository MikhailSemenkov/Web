import HomeView from "../view/home.js"
import EditTaskController from "../controller/editTaskController.js"
import AddTaskController from "../controller/addTaskController.js"

export default class HomeController {
	constructor(body, users) {
		this.body = body;
		this.users = users;
		this.editTaskController = new EditTaskController(body, users, this);
		this.addTaskController = new AddTaskController(body, users, this);
	}

	display() {
		let tasks = this.users.currentUser.tasks;
		HomeView.display(this.body, tasks);
		for (var task of tasks.list) {
			document.getElementById('doneTask' + task.id + 'Btn').addEventListener(
				'click', this.doneBtnClick(task.id, tasks, this.closureDisplay(this))
			);
			document.getElementById('deleteTask' + task.id + 'Btn').addEventListener(
				'click', this.deleteBtnClick(task.id, tasks, this.closureDisplay(this))
			);
			document.getElementById('editTask' + task.id + 'Btn').addEventListener(
				'click', this.editBtnClick(task.id, this.editTaskController)
			);
		}
		document.getElementById('addTaskBtn').addEventListener(
				'click', this.addBtnClick(this.addTaskController)
			);
	}

	closureDisplay(controller) {
		return function() {
			controller.display();
		}
	}

	doneBtnClick(id, tasks, display) {
		return function() {
			tasks.changeDone(id);
			display();
		}
	}

	deleteBtnClick(id, tasks, display) {
		return function() {
			tasks.delete(id);
			display();
		}
	}

	editBtnClick(id, editTaskController) {
		return function() {
			editTaskController.display(id);
		}
	}

	addBtnClick(addTaskController) {
		return function() {
			addTaskController.display();
		}
	}
}