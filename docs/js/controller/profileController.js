import ProfileView from "../view/profile.js"
import EditProfileController from "../controller/editProfileController.js"

export default class ProfileController {
	constructor(body, users) {
		this.body = body;
		this.users = users;
		this.editProfileController = new EditProfileController(body, users, this);
	}

	display() {
		ProfileView.display(this.body, this.users.currentUser);
		this.addEditButtonListener();
	}

	addEditButtonListener() {
		document.getElementById('editProfileBtn').addEventListener('click', (event) => ((editProfileController) => 
																			this.navigateToEditProfile(editProfileController))
																			(this.editProfileController));
	}

	navigateToEditProfile(editProfileController) {
		editProfileController.display();
	}
}