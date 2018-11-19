class Question {
    constructor(questionText, questionChoices, answer) {
        this.questionText = questionText;
        this.questionChoices = questionChoices;
        this.answer = answer;
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

    }
}