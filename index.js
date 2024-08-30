const startbtn = document.getElementById('start-btn')
const nextbtn = document.getElementById('next-btn')
const quescontainer = document.getElementById('question-container')
const questions = document.getElementById('question')

const allques =[
    {
        question:'what is your name',
        answer: ['hamza','haris','hitler','hooman'],
        correctans : 'hamza'
    }
]
console.log(allques[0].correctans)