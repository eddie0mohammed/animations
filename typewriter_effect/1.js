const text = ['Websites', 'Youtube Videos', 'Anything You Want'];

let word_index = 0;
let array_index = 0;
let currentText = '';
let letters = '';

(function type(){

    if (array_index === text.length){
        array_index = 0;
    }
    currentText = text[array_index];
    letters = currentText.slice(0, ++word_index);

    document.querySelector(".typing").textContent = letters;
    if (letters.length === currentText.length){
        array_index++;
        word_index = 0;
    }
    setTimeout(type, 200);
}());