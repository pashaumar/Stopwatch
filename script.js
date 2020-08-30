let miliSeconds = "00";
let seconds = "00";
let minutes = "00";
let hours = "00";
let clear;
const stopwatch = document.querySelector('.stopwatch');
function timer(){
    miliSeconds++;
    miliSeconds = (miliSeconds < 10) ? "0" + miliSeconds : miliSeconds;
    if(miliSeconds/100 == 1){
        miliSeconds = "0" + 0;
        seconds++;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        if(seconds/60 == 1){
            seconds = "0" + 0;
            minutes++;
            minutes = (minutes < 10) ? "0" + minutes : minutess;
            if(minutes/60 == 1){
                minutes = "0" + 0;
                hours++;
                hours = (hours < 10) ? "0" + hours : hours;
            }
        }
    }
    stopwatch.innerHTML = `${hours}:${minutes}:${seconds}:${miliSeconds}`;
}

const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');

start.addEventListener('click',function(){
    clear = setInterval(timer,10);
});
stop.addEventListener('click',function(){
    clearInterval(clear);
});
reset.addEventListener('click',function(){
    clearInterval(clear);
    miliSeconds = "00";
    seconds = "00";
    minutes = "00";
    hours = "00";
    stopwatch.innerHTML = `${hours}:${minutes}:${seconds}:${miliSeconds}`;
});