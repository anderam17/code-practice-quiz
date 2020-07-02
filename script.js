var questions = []
var userScore = 0;
var currentQuestion = 0;
var secondsLeft = 60;

//adding data to the above questions aray in the form of objects
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

//variables that save targeted html elements.
var button = document.querySelector("#quiz-start");
var timer = document.querySelector(".timer");
var main = document.querySelector(".main")
var header = document.querySelector("#question");
var answerChoices = document.querySelector("ol")
var paragraph = document.querySelector("#intro");

//compares user answer to correct answer by looking at target of click event and answer attribute of question array.
//if the user is correct, 20 points are added to their score. 
//if the user is incorrect, 10 seconds are taken away from the timer.
function checkAnswer(arrayIndex, event){    
    if(event.target.textContent === questions[arrayIndex].correctAnswer){
            userScore+=20;
            console.log(userScore);
        }else{
            secondsLeft-=10;
        }
    }
    
    //clears out previous answer choice, pulls information 
    //for next one from array, and appends them to the page.
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

        //creates form for users to input initials.
        var initialsInput = document.createElement("input");
        main.append(initialsInput);

        //creates button to submit user initials.
        var initialsBtn = document.createElement("button");
        initialsBtn.textContent = "Submit";
        main.append(initialsBtn);

        var clearBtn = document.createElement("button");
        clearBtn.textContent = "Clear Scores";
        main.append(clearBtn);

        //saves user input to local storage
        initialsBtn.onclick = function(){
            var initialsValue = initialsInput.value.trim();
            var newScore = {
                score: userScore,
                initials: initialsValue, 
            }
            var scoresList = JSON.parse(window.localStorage.getItem("highscores")) || [];
            scoresList.push(newScore);
            window.localStorage.setItem("highscores", JSON.stringify(scoresList));
            var please = highscoresList();
        }

        clearBtn.onclick = function(){
            localStorage.clear();
            please.textContent = "";
        }
    }

    //prints out list of high scores from local storage. 
    function highscoresList(){
        var scoresList = JSON.parse(window.localStorage.getItem("highscores")) || [];
        scoresList.sort(function(a, b){
            return b.score - a.score;
        })
        scoresList.forEach(function(score){
            var list = document.createElement("div");
            list.textContent = score.initials + "-" + score.score;
            main.appendChild(list);
            return list;
        });

    }
    

    //This button clears off the introductory page and starts the quiz
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
    //this allows user to click on questions, check if they are correct 
    //by calling another function, and creates the next question through another function
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
//todo: TODO ACTIVITY IS VERY HELPFUL

//todo: comments, readME, make prettier
