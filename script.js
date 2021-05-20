var timer = document.querySelector(".timer");
var score = document.querySelector(".scores");
var startButton = document.querySelector("#start-button");
var answerButton = document.querySelector(".answers-buttons");

var questions = [{
    question: "Inside which HTML element do we put the JavaScript?",
    answers: [
        { text: "<script>", correct: true },
        { text: "<javascript>", correct: false },
        { text: "<js>", correct: false },
        { text: "<scripting>", correct: false },
    ]
}
]

// Possible questions:
// Where is the correct place to insert a JavaScript? <body>, <head>, <footer>, <title>
// How do you write "Hello World" in an alert box? alert("Hello Word"); msg("Hello Word") ; alertBox("Hello Word"); msgBox("Hello Word");
// How do you create a function in JavaScript? function = myFunction(), function:myFunction(), function myFunction(), function == myFunction(),
// How can you add a comment in a JavaScript? //This is comment, 'This is a comment, <!--This is a comment-->, *This is a comment

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

startButton.addEventListener("click", function () {
    startTimer();
    console.log()
});


function nextQuestions() {

}

function selectAnswer() {

}


