var questions = [
"Commonly used data types DO NOT include: ", 
"String values must be enclosed within _______ when being assigned to variables.", 
"Arrays in JavaScript can be used to store _______", 
"A very useful tool used during development and debugging for printing content to the debugger is:",
"The condition in an if/else statement is enclosed within ________"]

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

button.addEventListener("click", function(){
    
    //!need to also go to screen that tells you your score
    //!need another if statement that checks if they got it wrong and takes away 10 seconds
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