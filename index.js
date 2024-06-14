
let currentSlideIndex = 0;
let slides = document.querySelectorAll('.carousel-item');
let dots = document.querySelectorAll('.dot');

function showSlide(index) {
    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }

    let offset = -currentSlideIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlideIndex].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlideIndex + 1);
}

function prevSlide() {
    showSlide(currentSlideIndex - 1);
}

function currentSlide(index) {
    showSlide(index);
}

setInterval(nextSlide, 5000);

// Initial display
showSlide(currentSlideIndex);