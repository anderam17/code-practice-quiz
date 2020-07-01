var questions = []
var userScore = 0;
var currentQuestion = 0;
var secondsLeft = 60;

questions[0] = {
    question: "Commonly used data types DO NOT include:",
    choices: ["Strings", "Booleans", "Alerts", "Numbers"],
    correctAnswer: "Alerts",
};
questions[1] = {
    question: "String values must be enclosed within _______ when being assigned to variables.",
    choices: ["Commas", "Curly Brackets", "Quotes", "Parentheses"],
    correctAnswer: "Quotes",
};
questions[2] = {
    question: "Arrays in JavaScript can be used to store _______.",
    choices: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the Above"],
    correctAnswer: "All of the Above",
};
questions[3] = {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "Terminal/Bash", "For Loops", "Console.log"],
    correctAnswer: "Console.log",
}
questions[4] = {
    question: "The condition in an if/else statement is enclosed within ________",
    choices: ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"],
    correctAnswer: "Parentheses",
}

var button = document.querySelector("#quiz-start");
var timer = document.querySelector(".timer");
var main = document.querySelector(".main")
var header = document.querySelector("#question");
var answerChoices = document.querySelector("ol")
var paragraph = document.querySelector("#intro");


function checkAnswer(arrayIndex, event){    
    if(event.target.textContent === questions[arrayIndex].correctAnswer){
            userScore+=20;
            console.log(userScore);
        }else{
            secondsLeft-=10;
        }
    }
    
    function choicesCreator(arrayIndex){
        //clears out previous answer choices so that there are only 4 showing at a time
        answerChoices.textContent = "";
        for(var i=0; i<4; i++){
            var listItem = document.createElement("li");
            listItem.textContent = questions[arrayIndex].choices[i];
            answerChoices.appendChild(listItem);
        }
    }
    
    //Creates a question with the respective list of answer choices by pulling from the questions array
    function createQuestion(arrayIndex){
        header.textContent = questions[arrayIndex].question;
        choicesCreator(arrayIndex);
    }

    function endQuiz() {
        answerChoices.setAttribute("style", "display: none");
        header.textContent = "All done!"
        paragraph.setAttribute("style", "display: flex");
        paragraph.textContent = "Your final score is " + userScore; //Need to add up score
        
        //! Start here tomorrow
        //! var initialsInput = document.createElement("form");

    }
    

    //This is where actual actions start
    button.addEventListener("click", function(){
        createQuestion(0);
        button.setAttribute("style", "display: none");
        paragraph.setAttribute("style", "display: none");
        
        var timeInterval = setInterval(function(){
            secondsLeft--;
            timer.textContent = "Timer: " + secondsLeft;
            
            if(secondsLeft === 0 || currentQuestion === 5){
                clearInterval(timeInterval);
                endQuiz();
            }
            
        }, 1000)
    })
    answerChoices.addEventListener("click", function(event){
        checkAnswer(currentQuestion, event);
        currentQuestion++;
        createQuestion(currentQuestion);
    })
    




//todo: create form for user to enter initials
//todo: save initials in local storage
//todo: create buttons to submit initials
//todo: list of highscores
//todo: button to clear list of highscores or go back to beginning
//todo: alerts when you get one right or wrong

//todo: comments, readME, make prettier
