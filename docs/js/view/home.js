export default class HomeView {
	static display(body, tasks) {
		body.innerHTML = `<div class="h-100 pt-5">
            <div class="list-group px-5 py-2">` +
              	(this.generateTasks(tasks.list))  
            + `</div>

        <div class="position-fixed bottom-0 end-0">
            <a role="button" class="btn btn-custom text-center" id="addTaskBtn">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                </svg>
            </a>
        </div>
        </div>`;
	}

	static generateTasks(tasks) {
		var tasksHTML = '';
		tasks.forEach(function(task) {
			const leftTime = task.getLeftTime();
			tasksHTML = tasksHTML.concat(`<li class="list-group-item list-group-item-action ` + ((task.done)? `list-group-item-disabled`: `list-group-item-enabled`) + `">
                    <div class="row"> 
                        <div class="col">
                            <h3>` + task.title + `</h3>
                        </div>
                        <div class="col-auto"> 
                            <a class="btn text-end px-1 pt-1" role="button" style="color: gray" id="doneTask` + task.id + `Btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                                </svg>
                            </a>
                            <a class="btn text-end px-1 pt-1" role="button" style="color: gray" id="editTask` + task.id + `Btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                </svg>
                            </a>
                            <a class="btn text-end px-1 pt-1" role="button" style="color: gray" id="deleteTask` + task.id + `Btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="row"> 
                        <div class="col">
                            <p style="margin-bottom: 0.5rem"> What to do: ` + task.description + `</p>
                        </div>
                    </div>
                    <div class="row fw-bold"> 
                        <div class="col-auto me-5">
                             <p style="margin-bottom: 0.5rem"> Deadline: ` + task.getFormattedDeadline() + `</p>
                        </div>
                        <div class="col-auto">
                             <p style="margin-bottom: 0.5rem"> Time left: ` + (leftTime.getMonth()) + ' months ' + (leftTime.getDate() - 1) + ` days ` + leftTime.getHours() + ` hours ` + leftTime.getMinutes() + ` minutes </p>
                        </div>
                    </div>
                </li>`);
		});
		return tasksHTML;
	}
}