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
        console.log(event.target);   
        console.log(questions[arrayIndex].correctAnswer);    
    if(event.target.textContent === questions[arrayIndex].correctAnswer){
            console.log("Yes");
        }else{
            console.log("No");
        }

//      answerOptions.addEventListener("click", function(event){
//         if (currentQuestion === 4 || secondsLeft === 0){
//             console.log("done");    //check if this works
//             console.log(currentQuestion);

//         } else if (event.target === questions[arrayIndex].correctAnswer)
//         userScore++;
//         //alert that they got it right
//         // else{
//             //     //alert that they got it wrong
//             // }

//             createQuestion(currentQuestion)
//         })

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
    

    //This is where actual actions start
    button.addEventListener("click", function(){
        createQuestion(0);
        button.setAttribute("style", "display: none");
        paragraph.setAttribute("style", "display: none");
        
        var timeInterval = setInterval(function(){
            secondsLeft--;
            timer.textContent = "Timer: " + secondsLeft;
            
        //     if(secondsLeft === 0){
        //         clearInterval(timeInterval);
        //         header.textContent = "All done!"
        //         paragraph.textContent = "Your final score is "  //Need to add up score
        //     }
            
        }, 1000)
    })
    answerChoices.addEventListener("click", function(event){
        checkAnswer(currentQuestion, event);
        currentQuestion++;
        createQuestion(currentQuestion);
    })
    
//     for(var i=0; i<questions.length; i++){
//         checkAnswer(i);
//         currentQuestion++;
//         console.log(userScore);    //check if it's tracking score
//     }

// //Function that goes from one question to another
// //add click event on ordered list
// //Need to solidify the change from welcome screen to first question
// //get rid of start quiz button

// //!need to also go to screen that tells you your score    
// //!need another if statement that checks if they got it wrong and takes away 10 seconds
// //!For some reason there is a delay before the timer starts
// //! Cannot get rid of paragraph for some reason