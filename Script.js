
// Feedback Message Display Function
function showFeedbackMessage(message, type) {
  const feedbackMessage = document.getElementById("feedback-message");
  feedbackMessage.textContent = message;
  feedbackMessage.className = type === "success" ? "success-message" : "error-message";
}

// Mock Data Storage
const users = {};

// Register Function
function register() {
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;

  if (users[email]) {
    showFeedbackMessage("This email is already registered!", "error");
  } else {
    users[email] = password;
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

  if (users[email] && users[email] === password) {
    showFeedbackMessage("Login successful!", "success");
    setTimeout(() => {
      document.getElementById("login-email").value = "";
      document.getElementById("login-password").value = "";
    }, 1000);
  } else {
    showFeedbackMessage("Invalid email or password!", "error");
  }
}
