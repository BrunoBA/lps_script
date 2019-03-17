class Question {

    constructor(title = "") {
        this.title = title;
        this.answers = [];
    }

    addAnswer (answer) {
        this.answers.push(answer);
    }
}

module.exports = Question;