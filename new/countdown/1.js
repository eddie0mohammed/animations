

var countDate = new Date('Jan 1, 2021 00:00:00').getTime();

function newYear(){
    var now = new Date().getTime();
    gap = countDate - now;


    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;

    var d = Math.floor((gap / day));
    var h = Math.floor((gap % hour) / hour);
    var m = Math.floor((gap % hour) / minute);
    var w = Math.floor((gap % minute) / second);


    document.getElementById('day').textContent = d;
    document.getElementById('hour').textContent = h;
    document.getElementById('minute').textContent = m;
    document.getElementById('second').textContent = w;
}

setInterval(function(){
    newYear();
}, 1000 );
