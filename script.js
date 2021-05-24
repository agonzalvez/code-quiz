var timerEl = document.querySelector(".timer");
var startButtonEl = document.querySelector("#start-button");
var questionEl = document.querySelector(".questions");
var choicesEl = document.querySelector(".choices");
var answerEl = document.querySelector(".answers");
var questionDivEl = document.querySelector("#quiz-content")


var questionCounter = 0;
var timer = 60;
var score = 0;
var playerScores = [];
var initials =[];
var lsPlayerScores = "";
var lsPlayerInitials = "";
var aChoice,
    bChoice,
    cChoice,
    dChoice;
var resultScore, resultInitial;


var quizQuestions = [{
    questions: "Inside which HTML element do we put the JavaScript?",
    choices: {
        a: "<script>",
        b: "<javascript>",
        c: "<js>",
        d: "<scripting>",
    },
    correctAnswer: "a",
    },
    {
    questions: "Where is the correct place to insert a JavaScript?",
    choices: {
        a: "In the <body>",
        b: "In the <head>",
        c: "In the <footer>",
        d: "In the <title>",
    },
    correctAnswer: "a",
    },
    {
    questions: "How do you write 'Hello World' in an alert box?",
    choices: {
        a: "alert('Hello World!')",
        b: "msg('Hello Word')",
        c: "alertBox('Hello Word')",
        d: "msgBox('Hello Word')",
    },
    correctAnswer:"a",
    },
    {
    questions: "How do you create a function in JavaScript?",
    choices:{
        a: "function = myFunction()",
        b: "function:myFunction()",
        c: "function myFunction())",
        d: "function == myFunction()",
    },
    correctAnswer:"c",
    },
    {
    questions: "How can you add a comment in a JavaScript?",
    answers:{
        a: "//This is a comment",
        b: "'This is a comment",
        c: "<!--This is a comment-->",
        d: "*This is a comment",
    },
    correctAnswer:"a",
    },
];


// Timer

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
    startButton.disabled = true;
};

startButton.addEventListener("click", function () {
    startTimer()
    renderFirstQuestion()
});


function renderFirstQuestion() {
var question1 = questions[questionCounter];

var question = question1.questions;
questionh2 = document.createElement("h2")
questionDiv.appendChild(questionh2)

var choices = question1.answers;
var correctAnswer = question1.correctAnswer
console.log(question1)

questionCounter++;

};


function renderNextQuestion(){
    var question1 = questions[questionCounter];

    var question = question1.questions
    var choices = question1.choices
    var correctAnswer = question1.correctAnswer

    questionCounter++;
};
