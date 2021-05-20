var timer = document.querySelector(".timer");
var score = document.querySelector(".scores");
var startButton = document.querySelector("#start-button");
var answerButton = document.querySelector(".answers-buttons")


function startTimer() {
    var timeRemaining = 60;
   

    var timeInterval = setInterval(function () {
        if (timeRemaining > 1) {
            timeRemaining--;
            timer.textContent = "Time: " + timeRemaining;
        } else {
            timer.textContent = "";
            clearInterval(timeInterval);
        }
    }, 1000)
};

startButton.addEventListener("click", function(){
    startTimer();
    console.log()
});

startTimer();
