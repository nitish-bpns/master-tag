let slideIndex2 = 0;
showSlides2();

function showSlides2() {
    let i;
    let slides = document.getElementsByClassName("mySlides2");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex2++;
    if (slideIndex2 > slides.length) { slideIndex2 = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex2 - 1].style.display = "block";
    dots[slideIndex2 - 1].className += " active";
    setTimeout(showSlides2, 2000); // Change image every 2 seconds
}




let nitish = document.querySelector('.img1');

let main2 = 0

function changeMain1() {

    if (main2 === 0) {
        nitish.src = './images/main2.png';
        main2 = 1;
    } else if (main2 === 1) {
        nitish.src = './images/main3.png';
        main2 = 2;
    } else if (main2 === 2) {
        nitish.src = './images/main1.png';
        main2 = 0;
    }

};

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};



let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}


// For landing page automatic slide show


