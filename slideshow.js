let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slides");
    for (let i = 0; i < slides.length; i++)
        slides[i].style.display = "none";
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3500); // Change slide every 3.5s
}
function plusSlides(n) {
    showManual(slideIndex += n);
}
function showManual(n){
    const slides = document.getElementsByClassName("slides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++)
        slides[i].style.display = "none";
    slides[slideIndex-1].style.display = "block";
}
