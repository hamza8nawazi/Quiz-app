const startbtn = document.getElementById('start-btn');
const nextbtn = document.getElementById('next-btn');
const quescontainer = document.getElementById('question-container');
const questionselement = document.getElementById('question');
const answerbtnelement = document.getElementById('answer-buttons');
const restartbtn = document.getElementById('restart-btn');
const resultcontainer = document.getElementById('result-container');
const resulttext = document.getElementById('result-text');
const timercontainer=document.getElementById('timer-container');
const questionNumberElement = document.getElementById('question-number');


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
    nextbtn.style.display = 'inline-block'
    restartbtn.style.display = 'none'
    currentquestion = 0; // Reset the question index to 0
    showques(currentquestion);
    startTimer();
}

function startTimer() {
    const timerText = document.getElementById('timer-text');
    const circle = document.getElementById('circle');

    timerText.innerHTML = timeLeft;

    timerInterval = setInterval(function() {
        timeLeft--;
        timerText.innerHTML = timeLeft;

        
        let progressDegree = (timeLeft / totalTime) * 360;
        circle.style.background = `conic-gradient(lightblue ${progressDegree}deg, white 0deg)`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerText.innerHTML = 'Time\'s up!';
            nextbtn.classList.add('hide'); 
            restartbtn.classList.remove('hide'); 
            showResult();
        }
    }, 1000); // Update every second
}

function showques(i) {
    questionNumberElement.innerHTML = `Question ${i + 1} / ${allques.length}`;
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
        const sound = new Audio('./rightanswer-95219.mp3');
        sound.play();
        button.style.backgroundColor = 'green';
    } else {
        const sound = new Audio('./wrong.mp3');
        sound.play();
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
    restartbtn.style.display = 'inline-block'
    nextbtn.style.display = 'none'
    resultcontainer.classList.remove('hide');
    resulttext.classList.remove('hide');
    resulttext.innerHTML = `Quiz Over! Your score is ${score} out of ${allques.length}`;
    timercontainer.style.display= 'none'
}

function restartquiz() {
    clearInterval(timerInterval);
    startquiz();
}
