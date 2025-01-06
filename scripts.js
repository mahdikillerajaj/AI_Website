document.addEventListener("DOMContentLoaded", function () {
    // انیمیشن برای بخش هدر
    gsap.from(".main-header", { opacity: 0, duration: 1, y: -50 });

    // انیمیشن برای بخش هرو
    gsap.from(".hero-content h1", { opacity: 0, duration: 2, y: -100, delay: 1 });
    gsap.from(".hero-content p", { opacity: 0, duration: 2, y: -50, delay: 1.5 });
    gsap.from(".btn", { opacity: 0, duration: 2, y: 50, delay: 2 });

    // انیمیشن‌ها برای کارت‌های محصول
    const productCards = document.querySelectorAll(".product-card");
    productCards.forEach((card, index) => {
        gsap.from(card, {
            opacity: 0,
            duration: 1,
            y: 100,
            delay: 0.5 * index,
            ease: "power2.out"
        });
    });

    // افکت پارالاکس برای پس‌زمینه
    window.addEventListener("scroll", function () {
        const scrolled = window.scrollY;
        document.querySelector(".hero").style.backgroundPosition = `center ${scrolled * 0.5}px`;
    });

    // اسلاید شو برای محصولات ویژه
    let currentIndex = 0;
    const products = document.querySelectorAll(".product-card");
    setInterval(function () {
        products[currentIndex].style.display = "none";
        currentIndex = (currentIndex + 1) % products.length;
        products[currentIndex].style.display = "block";
    }, 3000); // تغییر هر 3 ثانیه
});
