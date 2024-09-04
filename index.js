const startbtn = document.getElementById('start-btn')
const nextbtn = document.getElementById('next-btn')
const quescontainer = document.getElementById('question-container')
const questionselement = document.getElementById('question')
const answerbtnelement = document.getElementById('answer-buttons')
const restartbtn = document.getElementById('restart-btn')

const allques =[
    {
        id: 1,
        question:'1. How many consonants are there in the English alphabet?',
        answer: [
            { text: "22", correct: false, id: 'a' },
            { text: "26", correct: false, id: 'b' },
            { text: "21", correct: true, id: 'c' },
            { text: "20", correct: false, id: 'd' },
          ],
    },
    {
        id: 2,
        question: '2. How many days are there in a week?',
        answer:[
            { text: "4", correct: false, id: 'a' },
            { text: "8", correct: false, id: 'b' },
            { text: "7", correct: true , id: 'c' },
            { text: "9", correct: false, id: 'd' },
          ],
    },
    {
        id: 3,
        question: '3. How many vowels are there in the English alphabet?',
        answer:[
            { text: "4", correct: false, id: 'a' },
            { text: "6", correct: false, id: 'b' },
            { text: "7", correct: false, id: 'c' },
            { text: "5", correct: true, id: 'd' },
          ],
    },
    {
        id: 4,
        question: '4. How many hours are there in a day?',
        answer:[
            { text: "26", correct: false, id: 'a' },
            { text: "24", correct: true, id: 'b' },
            { text: "25", correct: false, id: 'c' },
            { text: "23", correct: false, id: 'd' },
          ],
    },
    {
        id: 5,
        question: '5. How many seconds are there in a minute?',
        answer:[
            { text: "60", correct: true, id: 'a' },
            { text: "66", correct: false, id: 'b' },
            { text: "76", correct: false, id: 'c' },
            { text: "65", correct: false, id: 'd' },
          ],
    }
]

let currentquestion = 0

function startquiz(){
    quescontainer.style.display= "inline-block"
    startbtn.style.display ="none"
    nextbtn.style.display = "inline-block"
    restartbtn.style.display = "none"
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

        // Add an event listener to check the answer when the button is clicked
        button.addEventListener('click', function() {
            checkAnswer(allques[i].answer[j], button);
        });

        answerbtnelement.appendChild(button);

        function checkAnswer(selectedAnswer, button) {
            if (selectedAnswer.correct) {
                  button.style.backgroundColor = 'green'
                  alert('correct answer')
            } else {
                button.style.backgroundColor = 'red'
                alert('wrong answer, try again!')
            }
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
    }
    
}

function restartquiz(){
    startquiz()
}

