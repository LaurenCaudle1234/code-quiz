var mainEl = document.querySelector("main");
var startBtnEl = document.querySelector("#start-btn");
var timerEl = document.querySelector("#time-el"); 
var btnDivEl;

var interval; 
var time = 100; 
var questionIndex = 0;
var lastQuestionCorrect = '';

var questions = [
  {
    questionText: "Which of the following is not a fruit?",
    questionChoices: ["Strawberry", "Apple", "Lemon", "Broccoli"],
    correctAnswer: 3
  },
  {
    questionText: "What country did pizza originate from?",
    questionChoices: ["Italy", "United States of America", "Australia", "Bahamas"],
    correctAnswer: 0
  },
  {
    questionText: "Which food is the most healthy?",
    questionChoices: ["Gummy Bears", "Maple Syrup", "Apples", "Popcorn"],
    correctAnswer: 2
  }
];

function displayQuestion() {
    mainEl.innerHTML = "—"

    if (questionIndex >= questions.length) {
        endGame();
        return;
    }

    var h1El = document.createElement('h1');
    h1El.textContent = questions[questionIndex].questionText;
    mainEl.appendChild(h1El);

    btnDivEl = document.createElement("div");
    mainEl.appendChild(btnDivEl);

    var pEl = document.createElement('p');
    pEl.textContent = lastQuestionCorrect;
    mainEl.appendChild(pEl); 

    btnDivEl.addEventListener("click", function (event) {
        var target = event.target;

        if (target.getAttribute("class") !== 'btn') return;

        var clickedQuestionIndex = target.getAttribute("data-index");

        console.log(clickedQuestionIndex);
        if (clickedQuestionIndex == questions[questionIndex].correctAnswer) {

            lastQuestionCorrect = "Correct"


        } else {
            time = time -10;
            lastQuestionCorrect = "Incorrect"
        }

        questionIndex++;
        displayQuestion();

    });

    for (var i = 0; i < questions[questionIndex].questionChoices.length; i++) {
        var buttonEl = document.createElement('button');
        buttonEl.textContent = questions[questionIndex].questionChoices[i];
        buttonEl.setAttribute("class", "btn");
        buttonEl.setAttribute("data-index", i);
        btnDivEl.appendChild(buttonEl);
    }
};

startBtnEl.addEventListener("click", function (event) {
    console.log('startquiz')
 
    mainEl.innerHTML = "—" 

    interval = setInterval(function() {
        time--; 
        timerEl.textContent = `Time: ${time}`;

        if (time <= 0) {
            clearInterval(interval);
            endGame();
            return; 
        }
    }, 1000); 

    displayQuestion();

});

// btnDivEl.addEventListener("click", function(event) {
    // var target = event.target;
    // console.log('hit')
    // console.log(target.getAttribute("class"))

    // if ()

// });
// startBtnEl.addEventListener("submit", function (event) {
//     console.log('startquiz')

function endGame() {
    clearInterval(interval);

};