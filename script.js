const timeDisplay = document.querySelector('#timeDisplay');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const resetButton = document.querySelector('#reset');


let startTime = 0;
let pause = true;
let elapsedTime = 0;
let interval;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;


startButton.addEventListener('click', ()=>{
    if(pause){
        pause = false;
        startTime = Date.now() - elapsedTime;
        interval = setInterval(updateTime, 1)
    }
})
pauseButton.addEventListener('click', ()=>{
    if(!pause){
        pause = true;
        clearInterval(interval);
    }
})
resetButton.addEventListener('click', ()=>{
    pause = true;
    clearInterval(interval);
    startTime = 0;
    elapsedTime = 0;
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    timeDisplay.innerText = '00:00:00:00'
})

function updateTime(){
    elapsedTime = Date.now() - startTime;

    milliseconds = Math.floor(elapsedTime % 100)
    seconds = Math.floor((elapsedTime / 1000) % 60);
    minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

    timeDisplay.innerText = `${hours <= 9 ? '0' + hours: hours}:${minutes <= 9 ? '0' + minutes: minutes}:${seconds <= 9 ? '0' + seconds: seconds}:${milliseconds <= 9 ? '0' + milliseconds: milliseconds}`
}


