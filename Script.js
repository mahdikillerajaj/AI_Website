document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("registerForm");
    const loginForm = document.getElementById("loginForm");
    const message = document.getElementById("message");
    const users = {};

    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("registerEmail").value;
        const password = document.getElementById("registerPassword").value;

        if (users[email]) {
            message.style.color = "red";
            message.textContent = "این ایمیل قبلاً ثبت شده است.";
        } else {
            users[email] = password;
            message.style.color = "green";
            message.textContent = "ثبت نام موفقیت آمیز بود!";
            registerForm.reset();
        }
    });

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        if (users[email] && users[email] === password) {
            message.style.color = "green";
            message.textContent = "ورود موفقیت آمیز بود!";
            loginForm.reset();
        } else {
            message.style.color = "red";
            message.textContent = "ورود ناموفق! اطلاعات نادرست است.";
        }
    });
});
