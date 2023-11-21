const question = document.getElementById('question');                       // atrelando a id da pergunta a uma variável do JS
const choices = Array.from(document.getElementsByClassName('choice-text')); // atrelando a classe das respostas a variável
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');

let currentQuestion = {};      
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];    // serão jogadas as perguntas dentro desse array

let questions = [];

fetch("https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple").then(res => {
    return res.json();
})
.then(loadedQuestions => {
    console.log(loadedQuestions.results);
    questions = loadedQuestions.results.map(loadedQuestion => {
        const formattedQuestion = {
            question: loadedQuestion.question
        };

        const answerChoices = [...loadedQuestion.incorrect_answers];
        formattedQuestion.answer = Math.floor(Math.random() * 3) +1;
        answerChoices.splice(formattedQuestion.answer - 1, 0, loadedQuestion.correct_answer);
        answerChoices.forEach((choice, index) => {
            formattedQuestion["choice" + (index + 1)] = choice;
        })

        return formattedQuestion;
    })
    startGame();
})
.catch(error => {
    console.error('ERRO:', error)
});


// CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];        // apenas as perguntas que ainda não foram chamadas
    getNewQuestion();           // aqui apenas pegará a primeira pergunta do quiz
};
///////////////////////////////////////
getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        //go to the end  page
        return window.location.assign("end.html");
    }
    questionCounter++;              // contagem apenas para controle de quantas questões ainda faltam
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS} `

    // updating the progress bar
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });
    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};
////////////////////////////////////////
choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        let classToApply = 'incorrect';
        if (selectedAnswer == currentQuestion.answer) {
            classToApply = 'correct';
        }
        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout( () => {
            selectedChoice.parentElement.classList.remove(classToApply);    

            getNewQuestion();       // aqui é o comando para ir à próxima pergunta logo após responder a atual
        }, 1000 );

        

        /*const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'; */

        
    });
})

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
}

