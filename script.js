
// Content Display Logic
function showContent(sectionId) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(sec => sec.classList.add('hidden'));
    document.getElementById(sectionId).classList.remove('hidden');
}

// Registration Logic
function register() {
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    const message = document.getElementById('reg-message');

    if (!name || !email || !password) {
        message.style.color = 'red';
        message.textContent = 'لطفا تمامی فیلدها را پر کنید.';
        return;
    }

    if (localStorage.getItem(email)) {
        message.style.color = 'red';
        message.textContent = 'این ایمیل قبلا ثبت شده است.';
    } else {
        localStorage.setItem(email, JSON.stringify({ name, password }));
        message.style.color = 'green';
        message.textContent = 'ثبت نام موفقیت آمیز بود!';
        document.getElementById('register-form').style.display = 'none';
    }
}

// Login Logic
function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const message = document.getElementById('login-message');

    const user = JSON.parse(localStorage.getItem(email));
    if (user && user.password === password) {
        message.style.color = 'green';
        message.textContent = 'ورود موفقیت آمیز بود!';
        document.getElementById('login-form').style.display = 'none';
    } else {
        message.style.color = 'red';
        message.textContent = 'ایمیل یا رمز عبور اشتباه است.';
    }
}
