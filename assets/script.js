document.querySelector("#start").addEventListener("click",game);
document.querySelector("#rules").addEventListener("click",rules);
document.querySelector("#topScores").addEventListener("click",topScreen);

// An array full of every standard question.
// Question (objects) and answer answers (properties).

var standardQue = [
    {
    question: "What is this: var human {eyeColor = \"blue\", hairColor = \"brown\", occupation = \"writer\"}?",
    answers: [
        { text: "human is an object with several indexes", correct: false },
        { text: "human is an array with several indexes", correct: false },
        { text: "human is an object with several properties", correct: true },
        { text: "human is an array with several properties", correct: false },
    ],        
},
{
    question: "<a href>... <img src>... href and src are both:",
    answers: [
        { text: "attributes", correct: true },
        { text: "classes", correct: false },
        { text: "styles", correct: false },
        { text: "entities", correct: false },
    ],        
},
{
    question: "What is the parent and child elements necessary for a bulleted list?",
    answers: [
        { text: "parent: <li> child: <ol>", correct: false },
        { text: "parent: <li> child: <ul>", correct: false },
        { text: "parent: <ol> child: <li>", correct: false },
        { text: "parent: <ul> child: <li>", correct: true },
    ],        
},
{
    question: "How do you comment out something in HTML, CSS, and Javascript?",
    answers: [
        { text: "HTML: /* This */, CSS: <!-- This -->, JavaScript: // This", correct: false },
        { text: "HTML: <!-- This -->, CSS: /* This */, JavaScript: // This", correct: true },
        { text: "HTML: // This, CSS: /* This */, JavaScript: <!-- This -->", correct: false },
        { text: "HTML: <!-- This -->, CSS: // This, JavaScript: /* This */", correct: false },
    ],        
},
{
    question: "What is the effect of the operator ++?",
    answers: [
        { text: "To increase the value of a variable by 2.", correct: false },
        { text: "To add two variables.", correct: false },
        { text: "To add more than 2 variables.", correct: false },
        { text: "To increase the value of a variable by 1.", correct: true },
    ],        
},
{
    question: "What type of loop will loop until a condition is no longer true?",
    answers: [
        { text: "for", correct: false },
        { text: "conditional", correct: false },
        { text: "while", correct: true },
        { text: "numerical", correct: false },
    ],        
},
{
    question: "What is true about local variables?",
    answers: [
        { text: "They are declared within a Javascript function and available to other functions.", correct: false },
        { text: "They are declared within a Javascript function and saved locally.", correct: false },
        { text: "They are declared outside of any Javascript functions and saved locally.", correct: false },
        { text: "They are declared within a Javascript function and not available to other functions.", correct: true },
    ],        
},
{
    question: "How do you include quotes within a string?",
    answers: [
        { text: "Put a | before the double quotes.", correct: false },
        { text: "Put a \ before the double quotes.", correct: true },
        { text: "Put an ! before the double quotes.", correct: false },
        { text: "Put a - before the double quotes.", correct: false },
    ],        
},
{
    question: "The area around an element and outside of borders is called the:",
    answers: [
        { text: "margins", correct: true },
        { text: "padding", correct: false },
        { text: "border ridges", correct: false },
        { text: "border-sides", correct: false },
    ],        
},
{
    question: "What is the syntax for id of 1 and class of A?", 
    answers: [
        { text: "#1 for Id and .A for class.", correct: true },
        { text: "#1 for class and .A for Id.", correct: false },
        { text: "$1 for Id and & for class", correct: false },
        { text: "None of the above.", correct: false },
    ],        
},
];

// Randomly pull 5 standard questions
// Splice array to avoid duplicates
var standardRan01 = ""
var standardRan01 = Math.floor(Math.random() * standardQue.length);
var q01 = [standardQue[standardRan01]]
standardQue.splice(standardRan01,1);

var standardRan02 = ""
var standardRan02 = Math.floor(Math.random() * standardQue.length);
var q02 = [standardQue[standardRan02]]
standardQue.splice(standardRan02,1);

var standardRan03 = ""
var standardRan03 = Math.floor(Math.random() * standardQue.length);
var q03 = [standardQue[standardRan03]]
standardQue.splice(standardRan03,1);

var standardRan04 = ""
var standardRan04 = Math.floor(Math.random() * standardQue.length);
var q04 = [standardQue[standardRan04]]
standardQue.splice(standardRan04,1);

var standardRan05 = ""
var standardRan05 = Math.floor(Math.random() * standardQue.length);
var q05 = [standardQue[standardRan05]]
standardQue.splice(standardRan05,1);

quizQuestions = q01.concat(q02, q03, q04, q05);

console.log("Standard Questions:", quizQuestions)

// An array full of every bonus question.
// Question (objects) and answer choices (properties).

var bonusQue = [
    {
    question: "What does CSS stand for?",
    answers: [
        { text: "Cleaner Style Sheets", correct: false },
        { text: "Consolidated Style Sheets", correct: false },
        { text: "Cascading Style Sheets", correct: true },
        { text: "Classy Style Sheets", correct: false },
    ],        
},
{
    question: "How many pets does Spencer have (not including the pets in Visual Studio)?",
    answers: [
        { text: "2", correct: false },
        { text: "4", correct: false },
        { text: "6", correct: false },
        { text: "8", correct: true },
    ],        
},
{
    question: "When testing or troubleshooting, this is a good command to run:",
    answers: [
        { text: "console.look()", correct: false },
        { text: "console.listen()", correct: false },
        { text: "console.get()", correct: false },
        { text: "console.log()", correct: true },
    ],        
},
{
    question: "What allows JavaScript to change styles while the user is on the page?",
    answers: [
        { text: "Cascading Java Sheets (CJS)", correct: false },
        { text: "Document Object Model (DOM)", correct: true },
        { text: "Java Style Sheets (JSS)", correct: false },
        { text: "That's not an option.", correct: false },
    ],        
},
{    
    question: "If I want to store the user's name (userName) in local storage under a field called lastLogin:",
    answers: [
        { text: "localStorage.getItem(\"lastLogin\", userName)", correct: false },
        { text: "localStorage.setItem(\"lastLogin\", userName)", correct: true },
        { text: "localStorage.getItem(userName, \"lastLogin\")", correct: false },
        { text: "localStorage.setItem(userName, \"lastLogin\")", correct: false },
    ],        
},
{
    question: "If I have an array with [\"A,\" \"B\", \"C\", \"D\"], what is in index 3?",
    answers: [
        { text: "A", correct: false },
        { text: "B", correct: false },
        { text: "C", correct: false },
        { text: "D", correct: true },
    ],        
},
{
    question: "When writing the condition in an IF statement, you put what will happen if the condition is true. After what word do you put what happens if the condition is false?",
    answers: [
        { text: "OR", correct: false },
        { text: "BUT", correct: false },
        { text: "YET", correct: false },
        { text: "ELSE", correct: true },
    ],        
},
{
    question: "If I want to ensure that the form is filled out:",
    answers: [
        { text: "if (x = \"\") alert(\"Try again\")", correct: false },
        { text: "if (x == <>) alert(\"Try again\")", correct: false },
        { text: "if (x == \"\") alert(\"Try again\")", correct: true },
        { text: "if (x = <>) alert(\"Try again\")", correct: false },
    ],        
},
{
    question: "What is not an example of a semantic element name in HTML?",
    answers: [
        { text: "div", correct: true },
        { text: "section", correct: false },
        { text: "header", correct: false },
        { text: "article", correct: false },
    ],        
},
{
    question: "How do I add rounded borders?",
    answers: [
        { text: "border-radius:", correct: true },
        { text: "border-style:", correct: false },
        { text: "border-bend:", correct: false },
        { text: "border-ridge:", correct: false },
    ],        
},
];

// Randomly pull 2 bonus questions
// Splice array to avoid duplicates

var bonusRan01 = "";
var bonusRan01 = Math.floor(Math.random() * bonusQue.length);
var b01 = [bonusQue[bonusRan01]]
bonusQue.splice(bonusRan01,1);

var bonusRan02 = "";
var bonusRan02 = Math.floor(Math.random() * bonusQue.length);
var b02 = [bonusQue[bonusRan02]]
bonusQue.splice(bonusRan02,1);

bonusQuestions = b01.concat(b02);

console.log("Bonus Questions:", bonusQuestions)

// Randomly choose when each bonus will appear
var bonusAfter = ["1", "2", "3", "4"];

var b01ran = "";
var b01ran = Math.floor(Math.random() * bonusAfter.length);
var b01After = bonusAfter[b01ran]
bonusAfter.splice(b01ran,1);
console.log("Bonus 01 after:", b01After)

var b02ran = "";
var b02ran = Math.floor(Math.random() * bonusAfter.length);
var b02After = bonusAfter[b02ran]
console.log("Bonus 02 after:", b02After)

var i = 0;
var queNum = 1;
var totCorrect = 0;        
var askPlayer = document.querySelector("#quiz");

function game() {         
    // Gathering player's name
    playerName = (prompt("Enter player name:"));
    while(playerName == "") {
        alert("This cannot be skipped.");
        var playerName = (prompt("Enter player name:"));    
    }
        console.log(playerName)
        if (playerName === null) {
            return;
        } else {        
        quiz()
        }

    function quiz() {
        document.body.style.backgroundColor = "black";        
        document.getElementById("logo").style.width = "750px";        
        document.getElementById("middle").style.display = "none";        
        document.getElementById("rules").style.display = "none";
        document.getElementById("topScores").style.display = "none";        
        document.getElementById("quiz").style.display = "block";
    }
        
    startTimer()

    // Timer code

    wheelArray = 283;
    var warning = 40;
    var alert = 20;
        
    var colors = {
      info: {
        color: "green"
      },
      warning: {
        color: "orange",
        threshold: warning
      },
      alert: {
        color: "red",
        threshold: alert
      }
    };
    
    // Duration of timer
    var timeMax = 75;
    // Amount of time that passes 
    // var timePassed = 0;       
    var timeLeft = timeMax;
    var timerInterval = 1;
    var remainingPathColor = colors.info.color;
    
    document.getElementById("clock").innerHTML = `
    <div class="base-timer">
      <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g class="base-timer__circle">
          <circle class="path-elapsed" cx="50" cy="50" r="45"></circle>
          <path id="base-timer-path-remaining" stroke-dasharray="283" class="path-remaining ${remainingPathColor}"
          d="
              M 50,50
              m -45,0
              a 45,45 0 1,0 90,0
              a 45,45 0 1,0 -90,0
            "
          ></path>
        </g>
      </svg>
      <span id="base-timer-label" class="base-timer__label">${formatTime(
        timeLeft
      )}</span>
    </div>
    `;
        
    function onTimesUp() {
      clearInterval(timerInterval);
      showResults();
    }
    
    function startTimer() {        
      timerInterval = setInterval(() => {
        // timePassed = timePassed += 1;
        timeLeft--;
        document.getElementById("base-timer-label").innerHTML = formatTime(timeLeft);
        setCircleDasharray();
        setRemainingPathColor(timeLeft);
    
        if (timeLeft === 0) {
          onTimesUp();
        }
      }, 1000);
    }
            
    function formatTime(time) {
      var minutes = Math.floor(time / 60);
      let seconds = time % 60;
    
      if (seconds < 10) {
        seconds = `0${seconds}`;
      }
    
      return `${minutes}:${seconds}`;
    }
    
    function setRemainingPathColor(timeLeft) {
      var { alert, warning, info } = colors;
      if (timeLeft <= alert.threshold) {
        document.getElementById("base-timer-path-remaining")
          .classList.remove(warning.color);
        document.getElementById("base-timer-path-remaining")
          .classList.add(alert.color);
      } else if (timeLeft <= warning.threshold) {
        document.getElementById("base-timer-path-remaining")
          .classList.remove(info.color);
        document.getElementById("base-timer-path-remaining")
          .classList.add(warning.color);
      }
    }
    
    function calculateTimeFraction() {
      var rawTimeFraction = timeLeft / timeMax;
      return rawTimeFraction - (1 / timeMax) * (1 - rawTimeFraction);
    }
    
    function setCircleDasharray() {
        var circleDasharray = `${(calculateTimeFraction() * wheelArray).toFixed(0)} 283`;
        document.getElementById("base-timer-path-remaining")
        .setAttribute("stroke-dasharray", circleDasharray);
    }

    // The screen that shows the player's score after the timer has ended or the player finishes.

    function showResults() {        

        document.getElementById("clock").style.display = "none";
                                
        if (totCorrect == "5") {
            var score = "100";
            var rank = "Admiral";
        }
        if (totCorrect == "4") {
            var score = "80";
            var rank = "Captain";
        }
        if (totCorrect == "3") {
            var score = "60";
            var rank = "Commander"
        }
        if (totCorrect == "2") {
            var score = "40";
            var rank = "Lieutenant";
        }
        if (totCorrect == "1") {
            var score = "20";
            var rank = "Ensign";
        }
        if (totCorrect == "0") {
            var score = "0";
            var rank = "Cadet";
        }                    

        askPlayer.innerHTML = `                                       
        <br>
        <h1>Results</h1>
        <br>                    
        <font size="16px" color="blue">${score}%</font>                    
        <p>You got ${totCorrect} correct out of 5!</p>                    
        <p>You have earned the rank of <font color="blue">${rank}</font>!
        <p>
        <button id="return" onClick="window.location.reload()">Return</button>
        `
        console.log(playerName)                                       
        console.log(score)                                       
        
        if (parseFloat(localStorage.getItem("topScore")) <= score || localStorage.getItem("topScore") == null) {
            if (score > 0) {                                    
            localStorage.setItem("topPlayer", playerName)
            localStorage.setItem("topScore", score)
        }
    }
}
    showQuestion()    

        // Show a standard question.
        function showQuestion() {
            console.log(i)
            var currentQuestion = quizQuestions[i]            
            console.log(currentQuestion)            
            askPlayer.innerHTML = `
            <p>${currentQuestion.question}</p>
            <ul>
                ${currentQuestion.answers.map(answer => `
                    <li>
                        <button class="answer-btn">${answer.text}</button>
                    </li>                    
                `).join("")}
            </ul>`;
            var answerBtn = document.querySelectorAll(".answer-btn");
            answerBtn.forEach(button => {
                button.addEventListener("click", checkAnswer);
            });

        // Check the answers on a standard question.
        function checkAnswer(e) {        
        console.log("This is BEFORE", timeLeft)

        var selectedBtn = e.target;
        var isCorrect = currentQuestion.answers.find
        (answer => answer.text === selectedBtn.textContent).correct;                        

        if (isCorrect) {
        totCorrect++;                    
        document.getElementById("correct").style.display = "inline";
        setTimeout(() => { var correct = document.getElementById("correct").style.display = "none"; }, 800);
        } else { timeLeft-= 10;
        document.getElementById("incorrect").style.display = "inline";
        setTimeout(() => { var incorrect = document.getElementById("incorrect").style.display = "none"; }, 800);

        console.log("This is AFTER", timeLeft)                    
        }

        console.log(i)
        console.log(queNum)          

        if (queNum == b01After || queNum == b02After) {
            i++;
            queNum++;                    
            showBonus()
        } else if (queNum === quizQuestions.length) {
            showResults()                
        } else {
            i++;
            queNum++;
            showQuestion()
        }               
        
        // Show a bonus question.
        function showBonus() {
            var j = "0";
            var currentBonus = bonusQuestions[j];

        askPlayer.innerHTML = `
        <p>${currentBonus.question}</p>
        <ul>
            ${currentBonus.answers.map(answer => `
                <li>
                    <button class="answer-btn">${answer.text}</button>
                </li>                    
            `).join("")}
        </ul>`;
        var answerBtn = document.querySelectorAll(".answer-btn");
        answerBtn.forEach(button => {
            button.addEventListener("click", checkBonus);
        });
        
        // Check the answers on a bonus question.
        function checkBonus(e) {        
            
            var selectedBtn = e.target;
            var isCorrect = currentBonus.answers.find
            (answer => answer.text === selectedBtn.textContent).correct;
            
            if (isCorrect) {
                timeLeft+= 10;
                document.getElementById("correct").style.display = "inline";
                setTimeout(() => { var correct = document.getElementById("correct").style.display = "none"; }, 800);
                showQuestion();                                
            } else {
                document.getElementById("incorrect").style.display = "inline";
                setTimeout(() => { var incorrect = document.getElementById("incorrect").style.display = "none"; }, 800);
                showQuestion() }
                    }                           
                }         
                }
                
            }
            
        }    
    
        // The screen that shows the rules.
        function rules () {
            askPlayer = document.querySelector("#quiz");
            document.getElementById("middle").style.display = "none";
            document.getElementById("rules").style.display = "none";
            document.getElementById("topScores").style.display = "none";        
            document.getElementById("quiz").style.display = "block";
            document.getElementById("quiz").style.fontFamily = "sans-serif";
            document.getElementById("quiz").style.fontSize = "18px"

            askPlayer.innerHTML = `
            <p>
            Welcome to Git Answers - a game BY developers, and FOR developers. After you click Start, you will enter your name.
            You will then have 75 seconds to answer 5 questions. If you miss one, you lose 15 seconds!
            However, you can get them back. There are two bonus questions that will randomly appear and pause the clock.
            If correct, you get 15 seconds back.
            </p>
            <button id="return" onClick="window.location.reload()">Return</button>
            </p>`        
        }

        // The screen that shows the top player if there is one.
        function topScreen() {
            askPlayer = document.querySelector("#quiz");
            document.getElementById("middle").style.display = "none";
            document.getElementById("rules").style.display = "none";
            document.getElementById("topScores").style.display = "none";        
            document.getElementById("quiz").style.display = "block";
            
            if (localStorage.getItem("topPlayer") == null) {
                askPlayer.innerHTML = `
                <p>
                <h1>There isn't a top player yet!</h1>
                </p>
                <p>
                <button id="return" onClick="window.location.reload()">Return</button>
                </p>`
            } else {                            
                askPlayer.innerHTML = `                                       
                <br>
                <font size="28px">Top Score</font>
                <p>
                The player with the highest score and who most recently played was
                <p>
                <font color="blue">${localStorage.getItem("topPlayer")} with a score of ${localStorage.getItem("topScore")}</font>.
                <p>
                <button id="return" onClick="window.location.reload()">Return</button>`
                }
        }
