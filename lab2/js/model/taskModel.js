export default class Task {
	constructor(id, title, description, deadline) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.deadline = new Date(deadline);
		this.done = false;
	}

	update(title, description, deadline) {
		this.title = title;
		this.description = description;
		this.deadline = new Date(deadline);
	}	

	changeDone() {
		this.done = !this.done;
	}

	getLeftTime() {
		let now = new Date();
		return new Date(this.deadline - now);
	}

	getFormattedDeadline() {
		const yyyy = this.deadline.getFullYear();
		let mm = this.deadline.getMonth() + 1;
		let dd = this.deadline.getDate();

		if (dd < 10) dd = '0' + dd;
		if (mm < 10) mm = '0' + mm;

		return dd + '.' + mm + '.' + yyyy;
	}

	getDatePickerFormattedDeadline() {
		const yyyy = this.deadline.getFullYear();
		let mm = this.deadline.getMonth() + 1;
		let dd = this.deadline.getDate();

		if (dd < 10) dd = '0' + dd;
		if (mm < 10) mm = '0' + mm;

		return yyyy + '-' + mm + '-' + dd;
	}
}