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
        // I need to create a timer from 60 seconds counting down
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

var hide = document.getElementById("startButton")
start.addEventListener("click", hideStartButton);

var timerEl = document.getElementById("countdown");

function countdown() {
    var timeLeft = 60;
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

// Questions and answers
var codeQuestions = [
    {
        question: 'What does "var" stand for?',
        correctAnswer: 'variable',
        answers: ['function', 'method', 'sum', 'variable']
    }, {
        question: 'Which would you use to link an external style sheet',
        correctAnswer: '<link rel="stylesheet" href="styles.css">',
        answers: ['<img src="stylesheet">', '<script src="scripts.js"></script>', '<script src="jquery-3.5.1.min.js"></script>', '<link rel="stylesheet" href="styles.css">']
    }, {
        question: 'What does "nav" stand for?',
        correctAnswer: 'navigation',
        answers: ['navigation', 'section', 'article', 'footer']
    }, {
        question: 'Which is not a semantic html tag?',
        correctAnswer: '<div>',
        answers: ['<main>', '<div>', '<mark>', '<time>']
    }, {
        question: 'Which is not a semantic html tag?',
        correctAnswer: '<div>',
        answers: ['<main>', '<div>', '<mark>', '<time>']
    }, {
        question: 'Which property would set 2 flexboxes on opposites ends of a flex container?',
        correctAnswer: 'space-between',
        answers: ['space-around', 'space-evenly', 'space-between', 'flex-end']
    }, {
        question: 'What is the default value for align-items?',
        correctAnswer: 'stretch',
        answers: ['flex-start', 'start', 'self-start', 'stretch']
    }, {
        question: 'What is the default value for flex-wrap',
        correctAnswer: 'nowrap',
        answers: ['nowrap', 'wrap', 'wrap-reverse', 'column']
    }, {
        question: 'Which one is not a property of flex-direction?',
        correctAnswer: 'row-block',
        answers: ['row-reverse', 'column', 'row-block', 'column-reverse']
    }, {
        question: 'Which order is correct for the flex "shorthand?',
        correctAnswer: 'flex-grow, flex-shrink, flex-basis',
        answers: ['flex-basis, flex-grow, flex-shrink', 'flex-grow, flex-shrink, flex-basis', 'flex-shrink, flex-grow, flex-basis', 'flex-grow, flex-shrink, flex-auto']
    }, {
        question: 'What is the css selector for class="class"?',
        correctAnswer: '.class',
        answers: ['.class', '#class', 'class', '*class']
    }, {
        question: 'How do you write the selector for the id="id"?',
        correctAnswer: '#id',
        answers: ['.id', '#id', 'id', '*id']
    }, {
        question: 'Which is not an anchor pseudo-class?',
        correctAnswer: 'visitedlink',
        answers: ['link', 'visitedlink', 'hover', 'active']
    }, {
        question: 'What does the tag <p> stand for?',
        correctAnswer: 'paragraph',
        answers: ['pause', 'parse', 'paragraph', 'protect']
    }, {
        question: 'Which is not a css pseudo-class?',
        correctAnswer: 'visitedlink',
        answers: [':checked', ':invalid', ':focus', ':focused']
    }, {
        question: 'Which would you use to delcare a global css selector?',
        correctAnswer: 'visitedlink',
        answers: [':root', '*root', '*', '.root']
    }
]

// startQuiz begins when the "Start Quiz" button is clicked
function startQuiz() {
    var x = document.getElementById("quiz");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    countdown();
}

function hideStartButton() {
    var y = document.getElementById("startButton");
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
}