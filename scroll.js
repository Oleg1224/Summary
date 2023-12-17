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