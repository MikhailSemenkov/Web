export default class RegisterView {
	static display(body) {
		body.innerHTML = `<div class="h-100 d-flex align-items-center justify-content-center">
            <div class="container py-4 px-4" style="background-color: #fdfdfd; border-radius: 0.75rem; max-width: 450px;">
                <h3 class="text-center"> Register </h3>
                <br>
                <form class="needs-validation" novalidate>
                    <div class="mb-3">
                        <label for="inputUsername" class="form-label"> Username </label>
                        <input type="text" class="form-control" id="inputUsername" placeholder="Username" required>
                        <div class="invalid-feedback">
                            Incorrect Username!
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="inputEmail" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="inputEmail" placeholder="email@example.com" aria-describedby="emailHelp" required>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        <div class="invalid-feedback">
                            Enter correct email!
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="chooseGender" class="form-label"> Gender </label>
                        <select class="form-select" aria-label="Choose your gender" id="chooseGender">
                            <option value="0"> </option>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                        </select>
                    </div>

                    <div class="mb-3">
                        <label for="inputBirthdate" class="form-label"> Birthdate </label>
                        <input type="date" class="form-control" id="inputBirthdate" required>
                        <div class="invalid-feedback">
                            Choose correct birthdate!
                        </div>
                    </div>
                    
                    <div class="mb-3">
                        <label for="inputPassword" class="form-label"> Password </label>
                        <input type="password" class="form-control" id="inputPassword" minlength="8" required>
                        <div class="invalid-feedback">
                            Enter password at least 8 characters!
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="confirmPassword" class="form-label"> Confirm password </label>
                        <input type="password" class="form-control" id="confirmPassword" minlength="8" required>
                        <div class="invalid-feedback">
                            Password mismatch!
                        </div>
                    </div>
                    
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="check" required>
                        <label class="form-check-label" for="check"> Allow storage of personal data </label>
                        <div class="invalid-feedback">
                            Agree to all terms!
                        </div>
                    </div>
                    
                    <button type="button" class="btn btn-primary" id="registerProfileBtn"> Register </button>
                </form>
            </div>
        </div>`;
	}
}