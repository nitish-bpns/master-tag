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

