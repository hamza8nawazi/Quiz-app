const startbtn = document.getElementById('start-btn');
const nextbtn = document.getElementById('next-btn');
const quescontainer = document.getElementById('question-container');
const questionselement = document.getElementById('question');
const answerbtnelement = document.getElementById('answer-buttons');
const restartbtn = document.getElementById('restart-btn');
const resultcontainer = document.getElementById('result-container');
const resulttext = document.getElementById('result-text');
const timercontainer=document.getElementById('timer-container');


let currentquestion = 0;
let score = 0;
let totalTime = 60;
let timeLeft = totalTime;
let timerInterval;

function startquiz() {
    score = 0;
    timeLeft = totalTime;
    timercontainer.style.display='inline-block'
    quescontainer.classList.remove('hide');
    startbtn.classList.add('hide');
    nextbtn.classList.add('hide');
    restartbtn.classList.add('hide');
    resulttext.classList.add('hide');
    currentquestion = 0; // Reset the question index to 0
    showques(currentquestion);
    startTimer();
}

function startTimer() {
    const timerText = document.getElementById('timer-text');
    const circle = document.getElementById('circle');

    timerText.innerHTML = timeLeft; // Initial time

    timerInterval = setInterval(function() {
        timeLeft--;
        timerText.innerHTML = timeLeft;

        // Calculate the degree for the progress bar (360 degrees total)
        let progressDegree = (timeLeft / totalTime) * 360;
        circle.style.background = `conic-gradient(green ${progressDegree}deg, lightgray 0deg)`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerText.innerHTML = 'Time\'s up!';
            nextbtn.classList.add('hide'); // Hide the next button when time is up
            restartbtn.classList.remove('hide'); // Show restart button
            showResult();
        }
    }, 1000); // Update every second
}

function showques(i) {
    questionselement.innerHTML = allques[i].question;
    showans(i);
}

function showans(i) {
    answerbtnelement.innerHTML = "";

    for (let j = 0; j < allques[i].answer.length; j++) {
        const button = document.createElement('button');
        button.classList.add('btn');
        button.innerHTML = allques[i].answer[j].text;

        button.addEventListener('click', function() {
            checkAnswer(allques[i].answer[j], button);
        });

        answerbtnelement.appendChild(button);
    }
}

function checkAnswer(selectedAnswer, button) {
    if (selectedAnswer.correct) {
        score++;
        button.style.backgroundColor = 'green';
    } else {
        button.style.backgroundColor = 'red';
    }

    document.querySelectorAll('.btn').forEach(btn => btn.disabled = true);
    nextbtn.disabled = false;
    restartbtn.disabled = false;
    nextbtn.classList.remove('hide');
}

function next() {
    currentquestion++;

    if (currentquestion < allques.length) {
        showques(currentquestion);
    } else {
        clearInterval(timerInterval);
        nextbtn.classList.add('hide');
        restartbtn.classList.remove('hide');
        showResult();
    }
}

function showResult() {
    quescontainer.classList.add('hide');
    nextbtn.classList.add('hide');
    restartbtn.classList.remove('hide');
    resultcontainer.classList.remove('hide');
    resulttext.classList.remove('hide');
    resulttext.innerHTML = `Quiz Over! Your score is ${score} out of ${allques.length}`;
}

function restartquiz() {
    clearInterval(timerInterval);
    startquiz();
}

