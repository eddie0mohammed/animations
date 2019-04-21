const menuBtn = document.querySelector('.menu-btn');

// set initial state if menu(open = true / closed = false)
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if (!showMenu){
        menuBtn.classList.add('close');
      
        //set menu state
        showMenu = true;
    }else{
        menuBtn.classList.remove('close');
     
        //set menu state
        showMenu = false;

    }
}