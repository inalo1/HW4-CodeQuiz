// TIMER //
var timer = document.querySelector(".timer");
var secondsLeft = 30;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = secondsLeft + " seconds left";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

setTime();

// QUESTION & ANSWER //
var questions = [
        {
            question: "Which one is NOT a fundamental programming language of the web?",
            choices: ["HTML", "Java", "CSS", "JavaScript"],
            answer: 1,
            id: "question-one"
        }, 
        {
            question: "How do you call a function?",
            choices: ["()", "{}", "[]", "<>"],
            answer: 0,
            id: "question-two"
        },
        {
            question: "the parenthesis () suggests that it is..",
            choices: ["a function", "a property", "a method", "an object"],
            answer: 2,
            id: "question-three"
        },
        {
            question: "the curly bracket {} suggests that it is..",
            choices: ["a function", "a property", "a method", "a variable"],
            answer: 0,
            id: "question-four"
        },
        {
            question: "Which one is not an HTML Element?",
            choices: ["Div", "Body", "Singletons", "none of the above"],
            answer: 3,
            id: "question-five"
        }
]

    console.log(questionArray);
    
    // QUIZ FUNCTIONS //
//     var startButton = document.getElementById("start-btn");
//     var questionContainerElement = document.getElementById("question-container");
//     var questionElement = document.getElementById("question");
// var answerButtonsElement = document.getElementById("answer-btns");


// var shuffledQuestions, CurrentQuestionIndex;
// startButton.addEventListener("click", startGame)

// function startGame(){
//     console.log('started')
//     startButton.classList.add('hide')
//     shuffledQuestions = questions.sort(() => Math.random() - .5);
//     CurrentQuestionIndex = 0;
//     questionContainerElement.classList.remove('hide')
//     nextQuestion()
// }

// function nextQuestion() {
//     showQuestion(shuffledQuestions[CurrentQuestionIndex]);
// }

// function showQuestion (questions) {
//     questionElement.innerText = question.questions
// }

// nextButton.addEventListener("click", nextQuestion);
// var nextButton = document.getElementById("next-btn");




// ORDERED LIST

// set initial index for the question we're on
// var currentQuestion= 0;

// for loop each time a question is answered
// or everytime a button is pressed currentQuestion ++ increments up
// to increment the index value on line 74

// set an on click or something to trigger the for loop one time each time its pressed


// var question = document.getElementById("questions")
// populate the html 
// questionArray.question[currentQuestion].question

// this shows the first question 
// questionArray.question[0].question

// generate your answers
// questionArray.question[currentQuestion].choices

// when selecting an answer make sure to grab the index 

//  id of each answer choice correlates to the index of the choices array 

// userChoice === //whatever index var score ++
