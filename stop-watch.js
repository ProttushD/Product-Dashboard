const stopWatchBtn = document.getElementById("stopwatchbtn");
const stopWatch = document.querySelector(".stop-watch");


const stopWatchCloseBtn = document.getElementById("stop-watch-closebtn");
const h1 = document.getElementById("stop-watch-heading-title");

const hours = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const milliseconds = document.getElementById("milliseconds");

const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const resetBtn = document.getElementById("reset-btn");



stopWatchBtn.addEventListener("click" , () => {
    dashboard.style.display = "none";
    stopWatch.style.display = "block";
    h1.innerHTML = "Stop Watch !";

    

});


stopWatchCloseBtn.addEventListener("click" , () => {
    dashboard.style.display = "block";
    stopWatch.style.display = "none";
});

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let timer = null;



function runClock(){

    hours.textContent = hour < 10 ? "0" + hour + " :" : hour + " : ";
    minutes.textContent = minute < 10 ? "0" + minute + " :" : minute + " : " ;
    seconds.textContent = second < 10 ? "0" + second + " :" : second + " : " ;
    milliseconds.textContent = millisecond < 10 ? "0" + millisecond : millisecond;


}

startBtn.addEventListener("click" , () =>{
    if(timer !== null){
        return;
    }

    timer = setInterval( () =>{
        millisecond++;

        if(millisecond === 100){
            millisecond = 0;
            second++;
        }

        if(second === 60){
            second = 0;
            minute++;
        }

        if(minute === 60){
            minute = 0;
            hour++;
        }
        
        runClock();

    },10);


});

pauseBtn.addEventListener("click" , () => {
    clearInterval(timer);
    timer = null;
});

resetBtn.addEventListener("click" , () => {
    clearInterval(timer);
    timer = null;

    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;

    runClock();
})


runClock();
