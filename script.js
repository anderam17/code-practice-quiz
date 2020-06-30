var questions = [
"Commonly used data types DO NOT include: ", 
"String values must be enclosed within _______ when being assigned to variables.", 
"Arrays in JavaScript can be used to store _______", 
"A very useful tool used during development and debugging for printing content to the debugger is:",
"The condition in an if/else statement is enclosed within ________"]

var answers = ["alerts", "quotes", "all of the above", "console.log", "parentheses"]

var button = document.querySelector("#quiz-start");
var main = document.querySelector(".main")

//Function that goes from one question to another
//function that starts timer in the top right corner
//on click function for the Start quiz button that creates first question, starts timer, 

button.addEventListener("click", function(){
    main.textContent = " ";
})