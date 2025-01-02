// script.js

const users = {}; // Mock Database

// Register Function
function register() {
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;

  if (users[email]) {
    document.getElementById("auth-response").innerText = "ایمیل قبلاً ثبت شده است!";
  } else {
    users[email] = password;
    document.getElementById("auth-response").innerText = "ثبت‌نام با موفقیت انجام شد!";
  }
}

// Login Function
function login() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  if (users[email] && users[email] === password) {
    document.getElementById("auth-response").innerText = "ورود با موفقیت انجام شد!";
  } else {
    document.getElementById("auth-response").innerText = "ایمیل یا رمز عبور اشتباه است!";
  }
}

// Contact Form Handling
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email
