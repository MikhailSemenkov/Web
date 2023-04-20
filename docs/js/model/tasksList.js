import Task from '../model/taskModel.js'

export default class TasksList {
	constructor() {
		this.lastTaskId = -1;
		this.list = [];
	}

	add(title, description, deadline) {
		this.lastTaskId++;
		this.list.push(new Task(this.lastTaskId, title, description, deadline));
		this.list.sort(this.compareFn);
	}

	compareFn(a, b) {
		const aLeft = a.getLeftTime();
		const bLeft = b.getLeftTime();
		if (aLeft < bLeft) {
			return -1;
		}
		if (aLeft > bLeft) {
			return 1;
		}
		return 0;
	}

	changeDone(id) {
		const index = this.list.findIndex((task) => task.id === id);
		if (index != -1) {
			this.list[index].changeDone();
		}
	}

	update(id, title, description, deadline) {
		const index = this.list.findIndex((task) => task.id === id);
		if (index != -1) {
			this.list[index].update(title, description, deadline);
			this.list.sort(this.compareFn);
		}
	}

	delete(id) {
		const index = this.list.findIndex((task) => task.id === id);
		if (index != -1) {
			this.list.splice(index, 1);
		}
	}

	getTask(id) { 
		const index = this.list.findIndex((task) => task.id === id);
		if (index != -1) {
			return this.list[index];
		}
		return null;
	}
}