const height = document.getElementById('header').offsetHeight;



function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
  window.addEventListener('scroll', debounce(activate));

  function activate(){
    if (window.scrollY > height){
        document.querySelector('.navbar').classList.add('fixed');
    }else{
        document.querySelector('.navbar').classList.remove('fixed');
    
    }
  }