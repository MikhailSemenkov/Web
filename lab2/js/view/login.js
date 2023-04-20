export default class LogInView {
	static display(body) {
		body.innerHTML = `<div class="h-100 d-flex align-items-center justify-content-center">
            <div class="container py-4 px-4" style="background-color: white; border-radius: 0.75rem; max-width: 450px;">
                <h3 class="text-center"> Log In </h3>
                <br>
                <form class="needs-validation" novalidate>
                    <div class="mb-3">
                        <label for="inputEmail" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="inputEmail" placeholder="email@example.com" aria-describedby="emailHelp" required>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        <div class="invalid-feedback">
                            Enter correct email!
                        </div>
                        <div class="mb-3">
                            <label for="inputPassword" class="form-label">Password</label>
                            <input type="password" class="form-control" id="inputPassword" required>
                        </div>
                    </div>
                    <button class="btn btn-primary" type="button" id="loginProfileBtn"> Log In </button>
                </form>
            </div>
        </div>`;
	}
}