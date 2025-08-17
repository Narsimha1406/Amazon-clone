var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}

function login() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
}

function handleLogin(event) {
    event.preventDefault(); // Prevent form from submitting

    // You can add a basic validation check here if needed
    // For now, we simply redirect after clicking "Sign In"
    
    window.location.href = "home.html"; // Redirect to home page
}
