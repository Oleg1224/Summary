let aSvg = document.querySelector('.SVG');
let modal1 = document.querySelector('.modal1');
aSvg.addEventListener('click', function() {
    if (modal1.className === 'modal1') {
        modal1.classList.add('dop')
        modal2.classList.remove('dop')
        modal3.classList.remove('dop')
        modal4.classList.remove('dop')
        modal5.classList.remove('dop')
        modal6.classList.remove('dop')
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
        modal1.classList.remove('dop')
        modal3.classList.remove('dop')
        modal4.classList.remove('dop')
        modal5.classList.remove('dop')
        modal6.classList.remove('dop')
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
        modal1.classList.remove('dop')
        modal2.classList.remove('dop')
        modal4.classList.remove('dop')
        modal5.classList.remove('dop')
        modal6.classList.remove('dop')
    }
    else {
        modal3.classList.remove('dop')
    }
})
let aSvg4 = document.querySelector('.SVG4');
let modal4 = document.querySelector('.modal4');
aSvg4.addEventListener('click', function() {
    if (modal4.className === 'modal4') {
        modal4.classList.add('dop')
        modal1.classList.remove('dop')
        modal2.classList.remove('dop')
        modal3.classList.remove('dop')
        modal5.classList.remove('dop')
        modal6.classList.remove('dop')
    }
    else {
        modal4.classList.remove('dop')
    }
})
let aSvg5 = document.querySelector('.SVG5');
let modal5 = document.querySelector('.modal5');
aSvg5.addEventListener('click', function() {
    if (modal5.className === 'modal5') {
        modal5.classList.add('dop')
        modal1.classList.remove('dop')
        modal2.classList.remove('dop')
        modal3.classList.remove('dop')
        modal4.classList.remove('dop')
        modal6.classList.remove('dop')
    }
    else {
        modal5.classList.remove('dop')
    }
})
let aSvg6 = document.querySelector('.SVG6');
let modal6 = document.querySelector('.modal6');
aSvg6.addEventListener('click', function() {
    if (modal6.className === 'modal6') {
        modal6.classList.add('dop')
        modal1.classList.remove('dop')
        modal2.classList.remove('dop')
        modal3.classList.remove('dop')
        modal4.classList.remove('dop')
        modal5.classList.remove('dop')
    }
    else {
        modal6.classList.remove('dop')
    }
})
let bSvg = document.querySelector('.svg');
let modal01 = document.querySelector('.modal01');
bSvg.addEventListener('click', function() {
    if (modal01.className === 'modal01') {
        modal01.classList.add('dop')
    }
    else {
        modal01.classList.remove('dop')
    }
})
let bSvg2 = document.querySelector('.svg2');
let modal02 = document.querySelector('.modal02');
bSvg2.addEventListener('click', function() {
    if (modal02.className === 'modal02') {
        modal02.classList.add('dop')
    }
    else {
        modal02.classList.remove('dop')
    }
})
let bSvg3 = document.querySelector('.svg3');
let modal03 = document.querySelector('.modal03');
bSvg3.addEventListener('click', function() {
    if (modal03.className === 'modal03') {
        modal03.classList.add('dop')
    }
    else {
        modal03.classList.remove('dop')
    }
})