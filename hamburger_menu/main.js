

const menuBtn = document.querySelector('.menu__container');

let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
    }else{
        menuOpen = false;
        menuBtn.classList.remove('open');
    }
})