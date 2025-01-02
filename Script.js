// Handle Register Form Submission
document.getElementById("register").addEventListener("submit", function(event) {
  event.preventDefault();
  
  var email = document.getElementById("register-email").value;
  var password = document.getElementById("register-password").value;

  // Simulate registration logic
  if (email && password) {
    document.getElementById("register-message").innerHTML = "Registration successful!";
    document.getElementById("register-message").classList.add("success");
    document.getElementById("register-form").style.display = "none";  // Hide register form
  } else {
    document.getElementById("register-message").innerHTML = "Registration failed. Please try again.";
    document.getElementById("register-message").classList.add("error");
  }
});

// Handle Login Form Submission
document.getElementById("login").addEventListener("submit", function(event) {
  event.preventDefault();

  var email = document.getElementById("login-email").value;
  var password = document.getElementById("login-password").value;

  // Simulate login logic
  if (email && password) {
    document.getElementById("login-message").innerHTML = "Login successful!";
    document.getElementById("login-message").classList.add("success");
    document.getElementById("login-form").style.display = "none";  // Hide login form
  } else {
    document.getElementById("login-message").innerHTML = "Login failed. Please try again.";
    document.getElementById("login-message").classList.add("error");
  }
});
