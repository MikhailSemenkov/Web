export default class EditTaskView {
	static display(body, task) {
		body.innerHTML = `<div class="h-100 d-flex align-items-center justify-content-center">
            <div class="container py-4 px-4" style="background-color: #fdfdfd; border-radius: 0.75rem; max-width: 450px;">
                <h3 class="text-center"> Edit task </h3>
                <br>
                <form>
                    <div class="mb-3">
                        <label for="inputTitle" class="form-label"> Task title </label>
                        <input type="text" class="form-control" id="inputTitle" value="` + task.title + `">
                        <div class="invalid-feedback">
                            Enter title!
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="inputDescription" class="form-label"> Description </label>
                        <input type="email" class="form-control" id="inputDescription" aria-describedby="descriptionHelp"  value="` + task.description + `">
                        <div id="descriptionHelp" class="form-text"> Describe what you need to do.</div>
                        <div class="invalid-feedback">
                            enter description!
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="inputDeadlineDate" class="form-label"> Deadline date </label>
                        <input type="date" class="form-control" id="inputDeadlineDate" value="` + (task.getDatePickerFormattedDeadline()) + `">
                        <div class="invalid-feedback">
                            Enter deadline!
                        </div>
                    </div>
                    
                    <a role="button" class="btn btn-primary" id="saveTaskBtn"> Save </a>
                </form>
            </div>
        </div>`;
	}
}