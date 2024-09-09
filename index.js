const startbtn = document.getElementById('start-btn')
const nextbtn = document.getElementById('next-btn')
const quescontainer = document.getElementById('question-container')
const questionselement = document.getElementById('question')
const answerbtnelement = document.getElementById('answer-buttons')
const restartbtn = document.getElementById('restart-btn')
const correctbtn= document.querySelector('.btn')
const resultcontainer = document.getElementById('result-container')
const resulttext = document.getElementById('result-text')

let currentquestion = 0
let score = 0

function startquiz(){
    score = 0;
    quescontainer.style.display= "inline-block"
    startbtn.style.display ="none"
    nextbtn.style.display = "inline-block"
    restartbtn.style.display = "none"
     resulttext.style.display = "none"
    currentquestion = 0 // Reset the question index to 0
    showques(currentquestion);
   
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
        nextbtn.style.display = "none"
        restartbtn.style.display ="inline-block"
        showResult();
    }
    
}
function showResult() {
    quescontainer.classList.add('hide') 
    nextbtn.classList.add('hide') 
    restartbtn.classList.remove('hide') 
    resultcontainer.style.display = "inline-block" // Show the result container
    resulttext.style.display = "inline-block"
    resulttext.innerHTML = `Quiz Over! Your score is ${score} out of ${allques.length}`
    quescontainer.style.display = "none"
    
}

function restartquiz(){
    startquiz()
}


