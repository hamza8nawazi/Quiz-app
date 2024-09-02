const startbtn = document.getElementById('start-btn')
const nextbtn = document.getElementById('next-btn')
const quescontainer = document.getElementById('question-container')
const questionselement = document.getElementById('question')
const answerbtnelement = document.getElementById('answer-buttons')
const restartbtn = document.getElementById('restart-btn')

const allques =[
    {
        question:'1. How many consonants are there in the English alphabet?',
        answer: ['12','22','21','25'],
        correctans : '21'
    },
    {
        question: '2. How many days are there in a week?',
        answer:['12','5','7','8'],
        correctans: '7'
    },
    {
        question: '3. How many vowels are there in the English alphabet?',
        answer:['4','6','7','5'],
        correctans: '5'
    },
    {
        question: '4. How many hours are there in a day?',
        answer:['12','24','28','49'],
        correctans: '24'
    },
    {
        question: '5. How many seconds are there in a minute?',
        answer:['33','66','60','61'],
        correctans: '60'
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

