# Code-Quiz

Looking for a challenge? Take this quiz about CODE! This **Code-Quiz** is easy to play. This game is set up so you are prompted questions and given 4 multiple choice answers. You'll be rewarded +10 points for each answer you get correct and deducted -10 seconds off of the **Timer** for each answer you get wrong. When the timer runs out, it's GAMEOVER. You can save your score and it'll be displayed in the **View High Scores** page. Happy quizzing!!!


## Getting Started

Follow the link to [PLAY](https://cheng21tang.github.io/Code-Quiz/).

1. Start by click on the **Start Quiz** button and you'll be taken to the first question. From there, you'll be given 4 choices.
2. Select your answer.
3. When the timer runs out the game is over.
4. Add your initials to your score.
5. View your high score anytime by clicking the link .**View High Scores**.
6. If you want to play, again, click **Play, again**.


## Features and Highlights
1. **Timer**
    - A timer is deployed when you begin the game.
2. **View High Scores**
    - View High Scores is a linked page where it saves any users score with their initials so they can come back and view their competition.
3. **setNextQuestion**
    - When a user selects an answer we use it as a prompt to bring up the next questions reducing the clicks/input from the user.
4. **-10 second timer deduction**
    - When a user selects an incorrect answer, we use that to deduct -10 seconds from the timer, making the game more challenging.
5. **Game Over**
    - When the timer reaches zero, the user will be displayed a game over message along with their score and an opportunity to enter their initials so we can record it to the High Scores page.
6. **Local Storage**
    - We use local storage to record the high scores so the user(s) can compare and compete.


## Screenshots

**Code Quiz application**
![code-quiz](/assets/images/code-quiz.PNG)

**After Start Quiz with timer running**
![code-quiz_after-start](/assets/images/code-quiz_after-start.PNG)

**View High Scores page**
![code-quiz](/assets/images/view-high-score.png)


## Challenges

Having blockers was a big challenge as I could not continue coding parts of the application without first completing a prerequisite portion. This made it difficult to complete and exercise knowledge I have in other areas of the application.

1. **setNextQuestion**
    - My function **setNextQuestion** was not working as expected and therefore I could not continue to work through my code on other functions. This ended up being my biggest **blocker**.
2. **addEventListener**
    - I struggled with the event listener on when the user selected an **answer button** to then be able to use that to iterate to the next question.
3. **Score**
    - I was going to use the function **score**, that if the answer button was select was true, then add +10 points to **score**. Else, if the answer was false then -5 points from **score** and subtract 10 seconds from the **timer**.
4. **localStorage**
    - I ran out of time to be able to implement **localStorage**.


### Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript)


### References

* [Functions](https://www.w3schools.com/js/js_functions.asp)
* [Parameters](https://www.w3schools.com/js/js_function_parameters.asp)
* [Arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments)
* [DOM getElementById](https://www.w3schools.com/jsref/met_document_getelementbyid.asp)
* [DOM textContent](https://www.w3schools.com/jsref/prop_node_textcontent.asp)
* [CSS display](https://www.w3schools.com/css/css_display_visibility.asp)
* [clearInterval](https://www.w3schools.com/jsref/met_win_clearinterval.asp)
* [localStorage](https://www.w3schools.com/jsref/prop_win_localstorage.asp)


### Deployed Link

* https://cheng21tang.github.io/Code-Quiz/
* https://cheng21tang.github.io/Code-Quiz/high-score.html


### License

This project is licensed under the MIT License 


### Acknowledgements

* Special thanks to my tutor **Julio Valdez** for the assist.