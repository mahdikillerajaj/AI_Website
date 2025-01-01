
function showSlide(slideId) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
    document.getElementById(slideId).style.display = 'block';
}
