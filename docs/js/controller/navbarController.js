import AboutView from "../view/about.js"
import ProfileController from "../controller/profileController.js"
import LoginController from "../controller/loginController.js"
import RegisterController from "../controller/registerController.js"
import HomeController from "../controller/homeController.js"

export default class NavbarController {
	constructor(users) {
		let body = document.getElementById('body');
		this.profileController = new ProfileController(body, users);
		this.loginController = new LoginController(body, users, this.profileController);
		this.registerController = new RegisterController(body, users, this.loginController);
		this.homeController = new HomeController(body, users);
		this.navigateToHome(this.homeController);
		document.getElementById('homeBtn').addEventListener('click', (event) => ((homeController) => 
																		 this.navigateToHome(homeController))
																		 (this.homeController));
		document.getElementById('aboutBtn').onclick = this.navigateToAbout;
		document.getElementById('profileBtn').addEventListener('click', (event) => ((profileController) => 
																		this.navigateToProfile(profileController))
																		(this.profileController));
		document.getElementById('profileCollapseBtn').addEventListener('click', (event) => ((profileController) => 
																				this.navigateToProfile(profileController))
																				(this.profileController));
		document.getElementById('loginBtn').addEventListener('click', (event) => ((loginController) => 
																	   this.navigateToProfile(loginController))
																	   (this.loginController));
		document.getElementById('loginCollapseBtn').addEventListener('click', (event) => ((loginController) => 
																	   		   this.navigateToProfile(loginController))
																	   		   (this.loginController));
		document.getElementById('registerBtn').addEventListener('click', (event) => ((registerController) => 
																		 this.navigateToProfile(registerController))
																		 (this.registerController));
		document.getElementById('registerCollapseBtn').addEventListener('click', (event) => ((registerController) => 
																				 this.navigateToProfile(registerController))
																				 (this.registerController));
	}

	navigateToHome(homeController) {
		homeController.display();
	}

	navigateToAbout() {
		AboutView.display(body);
	}

	navigateToProfile(profileController) {
		profileController.display();
	}

	navigateToLogIn(loginController) {
		loginController.display();
	}

	navigateToRegister(registerController) {
		registerController.display();
	}
}