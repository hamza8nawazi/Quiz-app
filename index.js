const startbtn = document.getElementById('start-btn')
const nextbtn = document.getElementById('next-btn')
const quescontainer = document.getElementById('question-container')
const questionselement = document.getElementById('question')
const answerbtnelement = document.getElementById('answer-buttons')
const restartbtn = document.getElementById('restart-btn')
const correctbtn= document.querySelector('.btn')
const resultcontainer = document.getElementById('result-container')
const resulttext = document.getElementById('result-text')
const timerDisplay = document.getElementById('timer');

let currentquestion = 0
let score = 0
let totalTime = 60; 
let timerInterval;

function startquiz(){
    score = 0;
    totalTime = 60;
    quescontainer.style.display= "inline-block"
    startbtn.style.display ="none"
    nextbtn.style.display = "inline-block"
    restartbtn.style.display = "none"
    resulttext.style.display = "none"
    currentquestion = 0 // Reset the question index to 0
    showques(currentquestion);
    startTimer();
   
}

function startTimer() {
    timerDisplay.style.display = 'inline-block'; // Show timer
    timerDisplay.innerHTML = `Time left: ${Math.floor(totalTime / 60)}:${totalTime % 60}`;
    
    timerInterval = setInterval(function() {
        totalTime--;
        let minutes = Math.floor(totalTime / 60);
        let seconds = totalTime % 60;
        timerDisplay.innerHTML = `Time left: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        
        if (totalTime <= 0) {
            clearInterval(timerInterval);
            showResult();
        }
    }, 1000); 
}



function showques(i){
    
    questionselement.innerHTML = allques[i].question
    showans(i);
}

function showans(i){
    answerbtnelement.innerHTML = ""

    for (let j = 0; j < allques[i].answer.length; j++) {
        const button = document.createElement('button');
        button.classList.add('btn');
        button.innerHTML = allques[i].answer[j].text;

        button.addEventListener('click', function() {
            checkAnswer(allques[i].answer[j], button);
        });

        answerbtnelement.appendChild(button);

        function checkAnswer(selectedAnswer, button) {
        
            if (selectedAnswer.correct) {
                score++ ;
                button.style.backgroundColor = 'green'       

          } else {
              button.style.backgroundColor = 'red'
              
          }
          document.querySelectorAll('.btn').forEach(btn => btn.disabled = true)
          nextbtn.disabled = false
          restartbtn.disabled = false
        }

    
    
    }
}


function next(){
    
    currentquestion++
    
    if(currentquestion < allques.length){
        showques(currentquestion)

    
    }else{
        clearInterval(timerInterval);
        nextbtn.style.display = "none"
        restartbtn.style.display ="inline-block"
        showResult();
    }
    
}
function showResult() {
    clearInterval(timerInterval);
    quescontainer.classList.add('hide') 
    nextbtn.classList.add('hide') 
    restartbtn.classList.remove('hide') 
    resultcontainer.style.display = "inline-block" // Show the result container
    resulttext.style.display = "inline-block"
    resulttext.innerHTML = `Quiz Over! Your score is ${score} out of ${allques.length}`
    quescontainer.style.display = "none"
    timerDisplay.style.display = 'none';
    
}

function restartquiz(){
    clearInterval(timerInterval);
    startquiz()
}


