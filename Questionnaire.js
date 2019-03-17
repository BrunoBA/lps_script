class Questionnaire {
    constructor(title = "") {
        this.title = title;
        this.requiredEmail = false;
        this.requiredPhone = true;
        this.questions = [];
    }

    // set title (title) {
    //     this.title = title;
    // }

    addQuestion (index, question) {
        this.questions[index] = question;
    }

    stringfy () {
        return JSON.stringify(this);
    }
}

module.exports = Questionnaire;