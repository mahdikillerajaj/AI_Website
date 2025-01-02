// script.js

const users = {}; // Mock Database

// Register Function
function register() {
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;

  if (users[email]) {
    document.getElementById("auth-response").innerText = "ایمیل قبلاً ثبت‌نام شده است.";
  } else {
    users[email] = { password };
    document.getElementById("auth-response").innerText = "ثبت‌نام موفقیت‌آمیز بود.";
  }
}

// Login Function
function login() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  if (users[email] && users[email].password === password) {
    document.getElementById("auth-response").innerText = "ورود موفقیت‌آمیز بود.";
  } else {
    document.getElementById("auth-response").innerText = "ایمیل یا رمز عبور اشتباه است.";
  }
}

// Contact Form Submit Function
document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  document.getElementById("response").innerText = `پیام شما از ${name} با ایمیل ${email} ارسال شد: ${message}`;
});
