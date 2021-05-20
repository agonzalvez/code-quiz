var startBtn = document.querySelector("#start-button");
var timer = document.querySelector(".timer");


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

startBtn.addEventListener("click", function () {
    startTimer();
});

startTimer();