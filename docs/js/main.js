import UsersList from "../js/model/usersList.js"
import TasksList from "../js/model/tasksList.js"
import NavbarController from "../js/controller/navbarController.js"

let body = document.getElementById('body');
let users = new UsersList();
let navbarController = new NavbarController(users);
