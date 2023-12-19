let header = document.querySelector('.head__bgraund2');
window.addEventListener('scroll', function() {
    if (this.scrollY > 10) {
        header.classList.add('new')
    }
    else {
        header.classList.remove('new')
    }
})
let mainBlock2 = document.querySelector('.main__block2');
window.addEventListener('scroll', function() {
    if (this.scrollY > 650) {
        mainBlock2.classList.add('new')
    }
    else {
        mainBlock2.classList.remove('new')
    }
})
let mainBlock4left = document.querySelector('.main__block4-left');
window.addEventListener('scroll', function() {
    if (this.scrollY > 1300) {
        mainBlock4left.classList.add('new')
    }
    else {
        mainBlock4left.classList.remove('new')
    }
})
let mainBlock4right = document.querySelector('.main__block4-right');
window.addEventListener('scroll', function() {
    if (this.scrollY > 1700) {
        mainBlock4right.classList.add('new')
    }
    else {
        mainBlock4right.classList.remove('new')
    }
})