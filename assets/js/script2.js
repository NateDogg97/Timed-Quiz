var viewHighScores = document.querySelector('#viewHighScores');
var timeLeft = document.querySelector('#timeLeft');
var score = document.querySelector('#score');
var finalScore = document.querySelector('#finalScore');
var quizForm = document.querySelector('#quizForm');
var resultsForm = document.querySelector('#resultsForm');
var header = document.querySelector('#header');
var question = document.querySelector('#question');
var answers = document.querySelector('#answers');
var userName = document.querySelector('#userName');
var submitBtn = document.querySelector('#submit');
var readyBtn = document.querySelector('#readyBtn');
var highScoresForm = document.querySelector('#highScoresForm');
var studScores = document.querySelector('#studScores');
var returnBtn = document.querySelector('#return');
var clearHighScores = document.querySelector('#clearHighScores');
var textA = document.querySelector('#answer1').textContent;
var textB = document.querySelector('#answer2').textContent;
var textC = document.querySelector('#answer3').textContent;
var textD = document.querySelector('#answer4').textContent;

//This is just a test to get the highscores page working correctly//

// resultsPage();
beginQuiz();

viewHighScores.addEventListener('click', hsPage);

function beginQuiz(){
    quizForm.style.display = 'block';
    resultsForm.style.display = 'none';
    highScoresForm.style.display = 'none';
    header.textContent = 'Welcome to my Coding Quiz!';
    question.textContent = 'Are you ready to begin?';
    readyBtn.addEventListener('click', function(e){
        e.preventDefault();
        timeLeft.style.visibility = 'visible';
        time = 105;
        resultsPage();
    })

}

function question1(){
    quizForm.style.display = 'block';
    resultsForm.style.display = 'none';
    highScoresForm.style.display = 'none';

}

function resultsPage(){
    quizForm.style.display = 'none';
    resultsForm.style.display = 'block';
    highScoresForm.style.display = 'none';
    finalScore.innerHTML = score.innerHTML;
    submitBtn.addEventListener('click', function(event){
        event.preventDefault();
        timeLeft.style.visibility ='hidden';
        hsPage();
        return
    });
}

function hsPage(){
    quizForm.style.display = 'none';
    resultsForm.style.display = 'none';
    highScoresForm.style.display = 'block';
    init();
    returnBtn.addEventListener('click', function(event){
        event.preventDefault();
        timeLeft.style.visibility ='hidden';
        time = 105;
        beginQuiz();
        return
    });
    clearHighScores.addEventListener('click', function(event){
        event.preventDefault;
        window.localStorage.clear();
        users = [];
        init();
        return
    }); 
}

////////////////////////////////////////////////////////////////////////////////////////////////

var users= [];


function renderUsers() {
    studScores.innerHTML = "";
    
    for (var i = 0; i < users.length; i++) {
      var user = users[i];
  
      var li = document.createElement("li");
      li.textContent = user;
      li.setAttribute("data-index", i);

      studScores.appendChild(li);
    }
}

function init() {
    var storedUsers = JSON.parse(localStorage.getItem("users"));

    if (storedUsers !== null) {
      users = storedUsers;
    }
    renderUsers();
}

function storeUsers() {
    localStorage.setItem("users", JSON.stringify(users));
}

submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    var userHs = userName.value.trim();

    if (userHs === "") {
      return;
    }

    users.push(userHs + ": " + finalScore.innerHTML);
    userName.value = "";
   
    storeUsers();
    renderUsers();
});

////////////////////////////////////////////////////////////////////////////////////////////////

var time = 105;

var startTimer = setInterval(timer, 1000);
// var stopTimer = clearInterval(startTimer);

function timer(){
    
    if (time <= 0){
    score.innerHTML = 'Out of Time';
    return '0';

    } else {
    score.innerHTML = time;    
    time -= 1;
    }
}