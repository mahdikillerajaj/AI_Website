// scripts.js

// Mock Data
const users = {};

// Register Function
function register() {
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;

  if (users[email]) {
    document.getElementById("auth-response").innerText = "Email is already registered!";
  } else {
    users[email] = password;
    document.getElementById("auth-response").innerText = "Registration successful!";
  }
}

// Login Function
function login() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  if (users[email] && users[email] === password) {
    document.getElementById("auth-response").innerText = "Login successful!";
  } else {
    document.getElementById("auth-response").innerText = "Invalid email or password!";
  }
}

// Contact Form Function
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
    document.getElementById("response").innerText = "Message sent successfully!";
  } else {
    document.getElementById("response").innerText = "Please fill all fields.";
  }
});
