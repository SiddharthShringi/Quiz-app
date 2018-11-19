let question = document.querySelector('.question');
let option = document.querySelector('.options');
let status = document.querySelector('.qstatus');
let welcomePage = document.querySelector('#welcome');
let quizPage = document.querySelector('#quiz');
let resultPage = document.querySelector('.result');

class Question {
    constructor(questionText, questionChoices, answer) {
        this.questionText = questionText;
        this.questionChoices = questionChoices;
        this.answer = answer;
    }
    checkAnswer() {

    }
}

let questions = [
    new Question('What is the Capital of Mongolia?', ['Ulanbatar', 'Maputo'], 'Ulanbatar'),
    new Question('Who is the father of the atomic bomb?', ['Alan Turing', 'Robert Oppenheimer'], 'Robert Oppenheimer'),
    new Question('Which planet is nearest the sun?', ['Venus', 'Mercury'], 'Mercury'),
    new Question('What is the lightest existing metal?', ['Aluminium', 'Cast iron'], 'Aluminium'),
    new Question('What is the organ that is affected when one is suffering from hepatitis?', ['Liver', 'Kidney'], 'Liver'),
    new Question('What is the name of the network of computers from which the Internet has emerged?', ['Ethernet', 'Arpanet'], 'Arpanet'),
    new Question('What is the national animal of China?	', ['Panda', 'Elephant'], 'Panda'),
    new Question('Where was built the first subway?', ['New York', 'London'], 'London')
]

class Quiz {
    constructor(questionList) {
        this.score = 0;
        this.currentQuestionIndex = 0;
        this.questionArray = questionList;
    }
    startScreen() {
        quizPage.classList.add("none");
        resultPage.classList.add("none")

    }
    questionScreen() {
        if (this.currentQuestionIndex > (this.questionArray.length-1)) {
            console.log(this.current)
            this.resultScreen();
        } else {
            quizPage.classList.remove("none");
            welcomePage.classList.add("none");
            resultPage.classList.add("none");
            let question = document.querySelector('.question');
            let option = document.querySelector('.options');
            let status = document.querySelector('.qstatus');
            let choiceArray = this.questionArray[this.currentQuestionIndex].questionChoices;
            question.innerHTML = `<p>${this.questionArray[this.currentQuestionIndex].questionText}</p>`
            option.innerHTML = ""
            choiceArray.forEach(element => {
            option.innerHTML += `<li><button class="choice">${element}</button></li>`
            });
            status.innerHTML = `<p>You are seeing question no.${this.currentQuestionIndex + 1} out of ${this.questionArray.length}</p>`
        }
    }
    displayNextQuestion(event) {
        if (!event.target.classList.contains("choice")) return;
        if (event.target.innerText == this.questionArray[this.currentQuestionIndex].answer) {
            this.score++;
        }
        this.currentQuestionIndex++;
        this.questionScreen();
    }
    resultScreen() {
        quizPage.classList.add('none');
        resultPage.classList.remove('none');
        welcomePage.classList.add('none');
        status.classList.add('none')
        resultPage.innerHTML = `<p>Your final score is ${this.score}`;
    }
}

let newQuiz = new Quiz(questions);
let start = document.querySelector('.start');
newQuiz.startScreen();
start.addEventListener('click', newQuiz.questionScreen.bind(newQuiz));
option.addEventListener('click', newQuiz.displayNextQuestion.bind(newQuiz));