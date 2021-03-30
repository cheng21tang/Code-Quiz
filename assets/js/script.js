// ACCEPTANCE CRITERIA

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score


//-----------------------//
// PSEUDO CODE

// I need to add an event listener to the "start quiz" button
// I need to create a timer from 100 seconds counting down
// The timer needs start when "start quiz" button is clicked
// I need to then show the first question
// I need to create the questions and the correct answers
// That first question needs to have 4 answer selections the users can choose
// If the user chooses the correct answer then I need to go to the next question
// If the user chooses the incorrect answer then I need to deduct 10 seconds off of the timer and then go to the next question
// the previous 3 steps need to repeat until the timer reaches 0
// When the timer reaches zero I want to display "Game Over" and show their "score"
// the score will be +10 points for each questions answered correctly
// There will not be a negative score for unanswered questions only a deduction of -10 seconds off of the timer
// When the score is displayed I need to allow the user to enter their initials
// I need to display the "Play Again" button again (this will be the same as the "Start Game" button)
// I need a "View Highscores" button on the screen where the user can click and see the highscores
// When i refresh the page the highscores stay stored locally
// if i close the webpage and reopen the high scores will be blank

var start = document.getElementById("startButton")
start.addEventListener("click", startQuiz);

var timerEl = document.getElementById("countdown");

function countdown() {
    var timeLeft = 100;
    var timeInterval = setInterval(function() {
        if (timeLeft > 1) {
            timerEl.textContent = "Timer: " + timeLeft;
            timeLeft--;
        } else {
            timeEl.textContent = "";
            clearInterval(timeInterval);
        }
    }, 1000);
}



var codeQuestions = [
    {
        question: 'What does "var" start for?',
        correctAnswer: 'variable',
        answers: ['function', 'method', 'sum', 'variable']
    }, {
        question: 'What does NBA stand for?',
        correctAnswer: 'National Basketball Association',
        answers: ['National Football League', 'Major League Baseball', 'National Hockey League', 'National Basketball Association']
    }
]

function startQuiz() {
    var x = document.getElementById("quiz");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    countdown();
}