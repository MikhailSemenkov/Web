export default class EditProfileView {
	static display(body, user) {
		body.innerHTML = ` <div class="h-100 d-flex align-items-center justify-content-center">
            <div class="container py-4 px-4" style="background-color: #fdfdfd; border-radius: 0.75rem; max-width: 450px;">
                <h3 class="text-center"> Edit Profile </h3>
                <br>
                <form>
                    <div class="mb-3">
                        <label for="inputUsername" class="form-label"> Username </label>
                        <input type="text" class="form-control" id="inputUsername" value="` + user.username + `">
                        <div class="invalid-feedback">
                            Incorrect Username!
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="inputEmail" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="inputEmail" value="` + user.email + `" aria-describedby="emailHelp" disabled>
                        <div id="emailHelp" class="form-text">You can not change email address</div>
                    </div>

                    <div class="mb-3">
                        <label for="chooseGender" class="form-label"> Gender </label>
                        <select class="form-select" aria-label="Choose your gender" id="chooseGender">
                            <option value="0"` + ((user.gender == '')? `selected`: ``) + `> </option>
                            <option value="1"` + ((user.gender == 'Male')? `selected`: ``) + `>Male</option>
                            <option value="2"` + ((user.gender == 'Female')? `selected`: ``) + `>Female</option>
                        </select>
                    </div>

                    <div class="mb-3">
                        <label for="inputBirthdate" class="form-label"> Birthdate </label>
                        <input type="date" class="form-control" id="inputBirthdate" value="` + user.getFormattedBirthdate() + `">
                        <div class="invalid-feedback">
                            Choose correct birthdate!
                        </div>
                    </div>
                    
                    <div class="mb-3">
                        <label for="inputOldPassword" class="form-label"> Old password </label>
                        <input type="password" class="form-control" id="inputOldPassword">
                        <div class="invalid-feedback">
                            Wrong password!
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="inputNewPassword" class="form-label"> New password </label>
                        <input type="password" class="form-control" id="inputNewPassword">
                        <div class="invalid-feedback">
                            Enter password at least 8 characters!
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="confirmPassword" class="form-label"> Confirm new password </label>
                        <input type="password" class="form-control" id="confirmPassword">
                        <div class="invalid-feedback">
                            Password mismatch!
                        </div>
                    </div>
                    
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="check">
                        <label class="form-check-label" for="check"> Confirm all changes </label>
                        <div class="invalid-feedback">
                            Confirm changes!
                        </div>
                    </div>
                    
                    <button type="button" class="btn btn-primary" id="saveBtn"> Save </button>
                </form>
            </div>
        </div>`;
	}
}