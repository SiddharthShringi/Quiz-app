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
    new Question('Which planet is nearest the sun?', ['Venus','Mercury'],'Mercury'),
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

    }
    questionScreen() {
        let question = document.querySelector('.question');
        let option = document.querySelector('.options');
        let choiceArray = this.questionArray[this.currentQuestionIndex].questionChoices;
        question.innerHTML = `<p>${this.questionArray[this.currentQuestionIndex].questionText}</p>`
        option.innerHTML = ""
        choiceArray.forEach(element => { option.innerHTML += `<li><button>${element}</button></li>`    
        });
        
    }
    resultScreen() {

    }
}

let newQuiz = new Quiz(questions);
let start = document.querySelector('.start');
start.addEventListener('click', newQuiz.questionScreen.bind(newQuiz));