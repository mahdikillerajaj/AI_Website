
document.addEventListener("DOMContentLoaded", function () {
    // Header Animation
    gsap.from(".main-header", { opacity: 0, duration: 1, y: -50 });

    // Hero Section Animation
    gsap.from(".hero-content h1", { opacity: 0, duration: 2, y: -100, delay: 1 });
    gsap.from(".hero-content p", { opacity: 0, duration: 2, y: -50, delay: 1.5 });
    gsap.from(".btn", { opacity: 0, duration: 2, y: 50, delay: 2 });

    // Product Cards Animation
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

    // Background Scroll Effect
    window.addEventListener("scroll", function () {
        const scrolled = window.scrollY;
        document.querySelector(".hero").style.backgroundPosition = `center ${scrolled * 0.5}px`;
    });
});
