function login() {
    console.log("Login function called");
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var messageElement = document.getElementById("message");

    console.log("Username:", username);
    console.log("Password:", password);

    // Clear previous messages and classes
    messageElement.innerHTML = "";
    messageElement.className = "";

    // Perform basic validation
    if (username === "" || password === "") {
        messageElement.innerHTML = "Please enter both username and password.";
        messageElement.className = "failure";
        return;
    }

    // Your authentication logic goes here
    // For a simple example, let's just check if the username is "admin" and password is "password"
    if (username === "admin" && password === "password") {
        messageElement.innerHTML = "Login successful!";
        messageElement.className = "success";
        // You can navigate to another page or perform other actions here
    } else {
        messageElement.innerHTML = "Invalid username or password. Please try again.";
        messageElement.className = "failure";
    }

    console.log("End of login function");
}
