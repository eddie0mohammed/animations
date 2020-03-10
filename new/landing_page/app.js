
//img
var slideshow = document.getElementById('slideshow');
var slides = document.getElementsByTagName('img');
var index = 0;

function nextSlide(){
    
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
    nextSlideText();
}

function prevSlide(){
    
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
    prevSlideText();
}

//text

var slideshowText = document.getElementById('slideshowText');
var slidesText = slideshowText.getElementsByTagName('div');
var indexText = 0;

function nextSlideText(){
    
    slidesText[indexText].classList.remove('active');
    indexText = (indexText + 1) % slides.length;
    slidesText[indexText].classList.add('active');
}

function prevSlideText(){
    
    slidesText[indexText].classList.remove('active');
    indexText = (indexText - 1 + slidesText.length) % slidesText.length;
    slidesText[indexText].classList.add('active');
}