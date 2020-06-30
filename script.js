var questions = []

questions[0] = {
    question: "Commonly used data types DO NOT include:",
    choices: ["Strings", "Booleans", "Alerts", "Numbers"],
    correctAnswer: 3,
};

questions[1] = {
    question: "String values must be enclosed within _______ when being assigned to variables.",
    choices: ["Commas", "Curly Brackets", "Quotes", "Parentheses"],
    correctAnswer: 3,
};

questions[2] = {
    question: "Arrays in JavaScript can be used to store _______.",
    choices: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the Above"],
    correctAnswer: 4,
};

questions[3] = {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "Terminal/Bash", "For Loops", "Console.log"],
    correctAnswer: 4,
}

questions[4] = {
    question: "The condition in an if/else statement is enclosed within ________",
    choices: ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"],
    correctAnswer: 3,
}

var answers = ["alerts", "quotes", "all of the above", "console.log", "parentheses"]

var button = document.querySelector("#quiz-start");
var timer = document.querySelector(".timer");
var main = document.querySelector(".main")
var header = document.querySelector("h1");
var answerOptions = document.querySelector("ul")
var paragraph = document.body.querySelector("p");

var secondsLeft = 60;

//Function that goes from one question to another
//function that starts timer in the top right corner
//on click function for the Start quiz button that creates first question, starts timer, 
//add click event on all of main

//Need to solidify the change from welcome screen to first question
button.addEventListener("click", function(){
    
    //!need to also go to screen that tells you your score
    //!need another if statement that checks if they got it wrong and takes away 10 seconds
    //!For some reason there is a delay before the timer starts
    var timeInterval = setInterval(function(){
        secondsLeft--;
        timer.textContent = "Timer: " + secondsLeft;
        
        if(secondsLeft === 0){
            clearInterval(timeInterval);
        }

    }, 1000)
    paragraph.textContent= "";
    header.textContent = questions[0];
    var li= document.createElement("li");
    li.innerHTML = questions[0];
    answerOptions.appendChild(li);
})




// Maybe save answer options in an object?