let slideIndex = 1;
showSlides(slideIndex);
setInterval(() => {
    showSlides((slideIndex += 1));
}, 3000); // Change the interval time here to adjust the speed

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("carousel-container")[0].children;
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";

}
// https://byshep.com/ru/articles/svoya-karusel-bez-podklyuchenij-bibliotek/