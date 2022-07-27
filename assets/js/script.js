var viewHighScores = document.querySelector('#viewHighScores');
var timeLeft = document.querySelector('#timeLeft');
var quizForm = document.querySelector('#quizForm');
var header = document.querySelector('#header');
var userInitials = document.querySelector('.userInitials');
var userName = document.querySelector('#userName');
var submitBtn = document.querySelector('#submit');
var highScores = document.querySelector('#highScores');
var studScores = document.querySelector('#studScores');
var returnBtn = document.querySelector('#return');
var clearHighScores = document.querySelector('#clearHighScores');
var answers = document.querySelector('#answers');
var textA = document.querySelector('#answer1').textContent
var textB = document.querySelector('#answer2').textContent
var textC = document.querySelector('#answer3').textContent
var textD = document.querySelector('#answer4').textContent


function beginQuiz(){
    quizForm.setAttribute('style', 'display:block;');
    userInitials.setAttribute('style', 'display:none;');
    highScores.setAttribute('style', 'display:none;');
    clearInterval(clock);
    header.textContent = '';
    header.textContent = "The Beginner's Coding Quiz";
    var description = document.createElement("h6");
    var readyBtn = document.createElement('button');
    var lineBreak = document.createElement('br')
    description.setAttribute('style', 'line-height:1.5; text-style');
    readyBtn.setAttribute('style', 'background-color:#F0F8FF; margin:15px; padding:10px; border-radius:15px;');
    description.textContent = 'This multiple choice quiz will test your knowledge of coding. You are given 105 points at the beginning and one point is deducted every second. If you answer a question incorrectly 10 points are deducted from your score. When you are finished with the quiz, your score will be stored in the high scores.';
    readyBtn.textContent = 'Begin Quiz';
    header.append(description);
    description.append(lineBreak);
    description.append(readyBtn);
    readyBtn.addEventListener('click', function(event){
        event.preventDefault;
        readyTimer();
    })
    
}

var readyTimer = function() {
header.textContent = '';
header.textContent = '3'
var countdown = 2;
var int = setInterval(function() {
    if (countdown <= -1){
        clearInterval(int);
        clock = setInterval(timer, 1000);
        timerPaused = false;
        question1();
        
    } else if (countdown <= 0){
        header.textContent = 'Begin!';
    } else {
        header.textContent = countdown;    
    }   
    countdown -= 1;
}, 1000); 
}

function question1(){
    document.querySelector('nav').style.visibility = 'visible';
    header.textContent = '';
    header.textContent = 'Question 1:';
    var h6 = document.createElement('h6');
    h6.textContent = "What is question 1?";
    header.append(h6);
    textA = 'A';
    textB = 'B';
    textC = 'C';
    textD = 'D';
    document.querySelector('#answers').setAttribute('style', 'display:block;');
    userInitials.setAttribute('style', 'display:none;');
    answers.addEventListener('click', function(event){
        event.preventDefault;
        question2(); 
        return
    });
}

function question2(){
    header.textContent = '';
    header.textContent = 'Quesion 2:';
    var h6 = document.createElement('h6');
    h6.textContent = "What is question 2?";
    header.append(h6);
    textA = 'A';
    textB = 'B';
    textC = 'C';
    textD = 'D';
    document.querySelector('#answers').setAttribute('style', 'display:block;');
    answers.addEventListener('click', function(event){
        event.preventDefault;
        question3();
        return
    });
}

function question3(){
    header.textContent = '';
    header.textContent = 'Quesion 3:';
    var h6 = document.createElement('h6');
    h6.textContent = "What is question 3?";
    header.append(h6);
    textA = 'A';
    textB = 'B';
    textC = 'C';
    textD = 'D';
    document.querySelector('#answers').setAttribute('style', 'display:block;');
    answers.addEventListener('click', function(event){
        event.preventDefault;
        question4();
        return
    });
}

function question4(){
    header.textContent = '';
    header.textContent = 'Quesion 4:';
    var h6 = document.createElement('h6');
    h6.textContent = "What is question 4?";
    header.append(h6);
    textA = 'A';
    textB = 'B';
    textC = 'C';
    textD = 'D';
    document.querySelector('#answers').setAttribute('style', 'display:block;');
    answers.addEventListener('click', function(event){
        event.preventDefault;
        question5();
        return
    });
}

function question5(){
    header.textContent = '';
    header.textContent = 'Quesion 5:';
    var h6 = document.createElement('h6');
    h6.textContent = "What is question 5?";
    header.append(h6);
    textA = 'A';
    textB = 'B';
    textC = 'C';
    textD = 'D';
    document.querySelector('#answers').setAttribute('style', 'display:block;');
    answers.addEventListener('click', function(event){
        event.preventDefault;
        results();
        return
    });
}

function results() {
    timerPaused = true;
    clearInterval(clock);
    answers.setAttribute('style', 'display:none;');
    header.textContent = 'insert High scores';
    var h6 = document.createElement('h6');
    userInitials.setAttribute('style', 'display:flex;');
    h6.textContent = 'Your final score is ' + finalScore;
    header.append(h6);
    submitBtn.addEventListener('click', function(event){
        event.preventDefault();
        highScoresPage();
        return
    }); 
}


var users = [];

function highScoresPage() {
    quizForm.setAttribute('style', 'display:none;');
    highScores.setAttribute('style', 'display:block;');
    document.querySelector('nav').style.visibility = 'hidden';
    renderUser();
    returnBtn.addEventListener('click', function(event){
        event.preventDefault();
        beginQuiz();
    });
    clearHighScores.addEventListener('click', function(event){
        event.preventDefault;
        console.log('failure');
    });
}

var time = 105;
var timerPaused = false;
var clock;
var score = document.querySelector('#score');
var finalScore = timer();

function timer() {
    
    if (!timerPaused){
        if (time <= 0){
            score.innerHTML = "0";
        } else {
            score.innerHTML = time;    
            time -= 1;
        }
    } else {
        finalScore = score.innerHTML;
        return finalScore;
    }
}

// function timer(){      
//     setInterval(function() {
//     if (!timerPaused){
//         if (time <= 0){
//         clearInterval(clock);
//         score.innerHTML = "0";
//         } else {
//         score.innerHTML = time;    
//         time -= 1;
//     }
//     } else {
//         clearInterval(clock);
//         var newTime = time.value;
//         return newTime;
//     }
    
// }, 1000); return
// }

beginQuiz();






