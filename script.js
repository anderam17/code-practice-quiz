//set variables to their starting positions at the beginning of the quiz
var questions = [];
var userScore = 0;
var currentQuestion = 0;
var secondsLeft = 60;

//adding data to the above questions array in the form of objects
questions[0] = {
  question: "Commonly used data types DO NOT include:",
  choices: ["Strings", "Booleans", "Alerts", "Numbers"],
  correctAnswer: "Alerts",
};
questions[1] = {
  question:
    "String values must be enclosed within _______ when being assigned to variables.",
  choices: ["Commas", "Curly Brackets", "Quotes", "Parentheses"],
  correctAnswer: "Quotes",
};
questions[2] = {
  question: "Arrays in JavaScript can be used to store _______.",
  choices: [
    "Numbers and Strings",
    "Other Arrays",
    "Booleans",
    "All of the Above",
  ],
  correctAnswer: "All of the Above",
};
questions[3] = {
  question:
    "A very useful tool used during development and debugging for printing content to the debugger is:",
  choices: ["JavaScript", "Terminal/Bash", "For Loops", "Console.log"],
  correctAnswer: "Console.log",
};
questions[4] = {
  question: "The condition in an if/else statement is enclosed within ________",
  choices: ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"],
  correctAnswer: "Parentheses",
};

//variables that save targeted html elements.
var button = document.querySelector("#quiz-start");
var timer = document.querySelector(".timer");
var main = document.querySelector(".main");
var header = document.querySelector("#question");
var answerChoices = document.querySelector("ol");
var paragraph = document.querySelector("#intro");

//compares user answer to correct answer by looking at target of click event and answer attribute of question array.
//if the user is correct, 20 points are added to their score.
//if the user is incorrect, 10 seconds are taken away from the timer.
function checkAnswer(arrayIndex, event) {
  if (event.target.textContent === questions[arrayIndex].correctAnswer) {
    userScore += 20;
  } else {
    secondsLeft -= 10;
  }
}

//clears out previous answer choice, pulls information
//for next one from array, and appends them to the page.
function choicesCreator(arrayIndex) {
  //clears out previous answer choices so that there are only 4 showing at a time
  answerChoices.textContent = "";
  for (var i = 0; i < 4; i++) {
    var listItem = document.createElement("li");
    listItem.textContent = questions[arrayIndex].choices[i];
    answerChoices.appendChild(listItem);
  }
}

//Creates a question with the respective list of answer choices by pulling from the questions array
function createQuestion(arrayIndex) {
  header.textContent = questions[arrayIndex].question;
  choicesCreator(arrayIndex);
}

//function called when out of time or questions.
//erases questions and displays end of quiz text.
function endQuiz() {
  answerChoices.setAttribute("style", "display: none");
  header.textContent = "All done!";
  paragraph.setAttribute("style", "display: flex");
  paragraph.textContent =
    "Your final score is " +
    userScore +
    ". Enter your initials below to save your score.";

  //calls function to create buttons, initial input, and high score list
  createButtons();
}
//create buttons, initial input, and high score list
function createButtons() {
  //creates form for users to input initials.
  var initialsInput = document.createElement("input");
  main.append(initialsInput);

  //creates button to submit user initials.
  var submitBtn = document.createElement("button");
  submitBtn.textContent = "Submit";
  main.append(submitBtn);

  //creates button to clear current list
  var clearBtn = document.createElement("button");
  clearBtn.textContent = "Clear Scores";
  main.append(clearBtn);

  //saves user input to local storage
  submitBtn.onclick = function () {
    //this deletes any previously printed lists
    var listToDelete = document.getElementById("high-score-list");
    if (typeof listToDelete != "undefined" && listToDelete != null) {
      listToDelete.remove();
    }
    //takes user input and stores it in an object
    var initialsValue = initialsInput.value.trim();
    var newScore = {
      score: userScore,
      initials: initialsValue,
    };
    //variable created that stores anything in localStorage in an array
    var scoresList =
      JSON.parse(window.localStorage.getItem("highscores")) || [];
    //any new input is pushed into the array created above
    scoresList.push(newScore);
    //now that new input is in an array with the local storage, all of that is added to local storage
    window.localStorage.setItem("highscores", JSON.stringify(scoresList));
    //calls function to print high score lise
    highscoresList();
  };

  //when clear button clicked, local storage is cleared and the previous list is deleted.
  clearBtn.onclick = function () {
    localStorage.clear();
    document.getElementById("high-score-list").remove();
  };
}

//prints out list of high scores from local storage.
function highscoresList() {
  //scores are pulled from local storage and sorted from highest to lowest
  var scoresList = JSON.parse(window.localStorage.getItem("highscores")) || [];
  scoresList.sort(function (a, b) {
    return b.score - a.score;
  });

  //ordered list is created to push scores to later
  //given id of high-score-list so we can delete it in the "clearBtn" button
  var list = document.createElement("ol");
  list.setAttribute("id", "high-score-list");

  //each item in the array pulled from local storage to be added to list
  scoresList.forEach(function (score) {
    var listItem = document.createElement("li");
    listItem.textContent = score.initials + "-" + score.score;
    list.appendChild(listItem);
  });

  //list appended to the "main" div element
  main.appendChild(list);
}

//This button clears off the introductory page and starts the quiz
button.addEventListener("click", function () {
  createQuestion(0);
  button.setAttribute("style", "display: none");
  paragraph.setAttribute("style", "display: none");

  //timer started here
  var timeInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = "Timer: " + secondsLeft;

    if (secondsLeft === 0 || currentQuestion === 5) {
      clearInterval(timeInterval);
      endQuiz();
      //make buttons function?
    }
  }, 1000);
});

//this allows user to click on questions, check if they are correct
//by calling another function, and creates the next question through another function
answerChoices.addEventListener("click", function (event) {
  checkAnswer(currentQuestion, event);
  currentQuestion++;
  if (currentQuestion < questions.length) {
    createQuestion(currentQuestion);
  }
});
