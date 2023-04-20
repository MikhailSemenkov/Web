class Navbar extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `<nav class="navbar fixed-top navbar-expand-sm bg-black" data-bs-theme="dark">
        <div class="container-fluid">
            <button class="navbar-dark navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="navbar-nav d-flex flex-fill text-center d-block d-sm-none">
                <span class="navbar-brand h1">Task Manager</span> 
                </div>

            <div class="collapse navbar-collapse" id="navbarNav">
                <div class="navbar-nav container-fluid">
                    <a class="nav-link" role="button" id="homeBtn" aria-current="page">Home</a>
                    <a class="nav-link" role="button" id="aboutBtn">About</a>
                    <div class="navbar-nav dropdown  d-block d-sm-none">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="true">
                            Profile
                        </a>
                        <div class="dropdown-menu" style="background-color: gray-dark; right: auto; left: auto">
                            <a class="dropdown-item" role="button" id="profileCollapseBtn">Profile</a>
                            <a class="dropdown-item" role="button" id="loginCollapseBtn">Log in</a>
                            <a class="dropdown-item" role="button" id="registerCollapseBtn">Register</a>
                        </div>
                    </div>
                </div>
            </div>        
            
            <div class="navbar-nav container-fluid d-none d-sm-block text-center">
                <span class="navbar-brand h1">Task Manager</span> 
            </div>

            <div class="navbar-nav dropdown d-none d-sm-block">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="true">
                        Profile
                    </a>
                    <div class="container-auto">
                        <div class="dropdown-menu dropdown-menu-start" style="">
                            <a class="dropdown-item" role="button" id="profileBtn">Profile</a>
                            <a class="dropdown-item" role="button" id="loginBtn">Log in</a>
                            <a class="dropdown-item" role="button" id="registerBtn">Register</a>
                        </div>
                    </div>
            </div>
        </div>
        </nav>`;
	}
}

customElements.define('navbar-component', Navbar);
