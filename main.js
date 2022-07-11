<script>
let testiIndex = 1;
showTesti(testiIndex);

function plusTesti(n) {
    showTesti(testiIndex += n);
}

function currentTesti(n) {
    showTesti(testiIndex = n);
}

function showTesti(n) {
    let i;
    let testis = document.getElementsByClassName("myTestis");
    let dots = document.getElementsByClassName("demoTesti");
    let captionText = document.getElementById("captionTesti");
    if (n > testis.length) { testiIndex = 1 }
    if (n < 1) { testiIndex = testis.length }
    for (i = 0; i < testis.length; i++) {
        testis[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    testis[testiIndex - 1].style.display = "block";
    dots[testiIndex - 1].className += " active";
    captionTestiText.innerHTML = dots[testiIndex - 1].alt;
}
</script>