//IDEA
// ---------------------------------------------------

// var numberArray = ["john", "doe", "jane"];
// // console.log(numberArray.length);
//     for(var i = 0; i < numberArray.length; i++) {
//         console.log([i]);
//     }


// var actor = {
//     name: "john",
//     age: 9,
//     lastName: "doe",
//     isSleeping: true
// }

// console.log(cat);

// ---------------------------------------------------
// ---- step 1: Start with an Function
// var QuestionArray = {}

// ---- step 2: add an Array of questions within the function
// var QuestionArray = {
//     Questions: [Question1, Question2, Question3, Question4, Question5]
// }

// ---- step 3: per index (within the array), add an object in each 
// var QuestionArray = {
//     Questions: [{},{},{},{},{}]
// }
// -----------------------------------------------------

// ---- START OF CODE ---- //

var questionArray = {
    questions: [
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
        }]
} 
    
    console.log(questionArray);




