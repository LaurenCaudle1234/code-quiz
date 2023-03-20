var mainEl = document.querySelector("main");
var startBtnEl = document.querySelector("start-btn");
var timerEl = document.querySelector("#time-el"); 

var interval; 
var time = 100; 
var questionIndex = 0;

var questions = [
  {
    questionText: "Which is not a fruit?",
    questionChoices: ["Strawberry", "Apple", "Lemon", "Broccoli"]
    correctAnswer: 3
  },
  {
    questionText: "What country did Pizza originate from?"
    questionChoices: ["Italy", "United States of America", "Australia", "Bahamas"]
    correctAnswer: 0
  },
  {
    questionText: "What"
  }
];

function displayQuestion() {
    mainEl.innerHTML = --;

    var h1El = document.createElement('h1');
    h1El.textContent = questions[questionIndex].questionText;
    mainEl.appendChild(h1El);

    var btnDivEl = document.createElement("div");
    mainEl.appendChild(btnDivEl);

    for (var i =0; i < questions[questionIndex].questionChoices.length; i++) {
        var buttonEl = document.createElement('button');
        buttonEl.textContent = questions[questionIndex].questionChoices[i];
        btnDivEl.addEventListener("click", function(event) {
            var target = event.target;
            console.log(target.getAttribute("class"))
        
            if (target.getAttribute("class") !== 'btn') return;

            console.log("continue");
        
        });
        buttonEl.setAttribute("class", "btn");
        btnDivEl.appendChild(h1El);
    }
};

startBtnEl.addEventListener("click", function (event) {
    main.innerHTML = --;

    interval = setInterval(function() {
        time--; 
        timerEl.textContent = `Time: $(time)`;

        if (time <= 0) {
            clearInterval(interval);
            endGame();
            return; 
        }
    }, 1000); 

    displayQuestion();

});

btnDivEl.addEventListener("click", function(event) {
    var target = event.target;
    console.log('hit')
    // console.log(target.getAttribute("class"))

    // if ()

});

function endGame() {

};