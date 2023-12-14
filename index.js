let aSvg = document.querySelector('.SVG');
let modal1 = document.querySelector('.modal1');
aSvg.addEventListener('click', function() {
    if (modal1.className === 'modal1') {
        modal1.classList.add('dop')
    }
    else {
        modal1.classList.remove('dop')
    }
})
let aSvg2 = document.querySelector('.SVG2');
let modal2 = document.querySelector('.modal2');
aSvg2.addEventListener('click', function() {
    if (modal2.className === 'modal2') {
        modal2.classList.add('dop')
    }
    else {
        modal2.classList.remove('dop')
    }
})
let aSvg3 = document.querySelector('.SVG3');
let modal3 = document.querySelector('.modal3');
aSvg3.addEventListener('click', function() {
    if (modal3.className === 'modal3') {
        modal3.classList.add('dop')
    }
    else {
        modal3.classList.remove('dop')
    }
})