
// Feedback Message Display Function
function showFeedbackMessage(message, type) {
  const feedbackMessage = document.getElementById("feedback-message");
  feedbackMessage.textContent = message;
  feedbackMessage.className = type === "success" ? "success-message" : "error-message";
}

// Save Data to LocalStorage
function saveToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Load Data from LocalStorage
function loadFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key)) || {};
}

// Register Function
function register() {
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;
  const users = loadFromLocalStorage("users");

  if (users[email]) {
    showFeedbackMessage("This email is already registered!", "error");
  } else {
    users[email] = password;
    saveToLocalStorage("users", users);
    showFeedbackMessage("Registration successful!", "success");
    setTimeout(() => {
      document.getElementById("register-email").value = "";
      document.getElementById("register-password").value = "";
    }, 1000);
  }
}

// Login Function
function login() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  const users = loadFromLocalStorage("users");

  if (users[email] && users[email] === password) {
    showFeedbackMessage("Login successful!", "success");
  } else {
    showFeedbackMessage("Invalid email or password!", "error");
  }
}
