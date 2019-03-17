const XLSX = require('xlsx');

var ConsoleHelper = require('./ConsoleHelper')
var Questionnaire = require('./Questionnaire')
var Question = require('./Question')
var Answer = require('./Answer')

const workbook = XLSX.readFile('lps.xlsx');
const sheet_name_list = workbook.SheetNames;

let lps = XLSX
                .utils
                .sheet_to_json(workbook.Sheets[
                    sheet_name_list[0]
                ]);

const MAX_QUESTIONS = 4;
const STRING_QUESTION = "Question";
const STRING_ANSWER = "Answer";

let numberOfQuestionnaires = 1;
console.clear();
ConsoleHelper.fullSizeText("=");
ConsoleHelper.fullSizeText("       SCRIPT STARTED      ");
ConsoleHelper.fullSizeText("=");

var questionnaires = [];

for (let index = 0; index < lps.length; index++) {
    const element = lps[index];

    //if is the new line add the title and the question
    if (index % MAX_QUESTIONS == 0) {
        ConsoleHelper.fullSizeText(` NEW LINE OF QUESTIONNAIRE (${numberOfQuestionnaires}) `, "green");
        var questionnaire = new Questionnaire(lps[index]['TITLE']);
        console.log(questionnaire.title);

        //increment the new questionnaire
        numberOfQuestionnaires++;
        questionnaires.push(questionnaire);
    } else { // add the anwser for the correct question
        
    }

    for (const key of Object.keys(element)) {
        const val = element[key];

        if (key.match(STRING_QUESTION)) {
            let question = new Question(element[key]);

            let keyOfQuestion = ( parseInt(
                key.replace(STRING_QUESTION + " ", '')) - 1);
            
            questionnaire.addQuestion(keyOfQuestion, question);
        }

        if (key.match(STRING_ANSWER)) {
            let answer = new Answer(element[key]);
            
            let keyOfQuestion = ( parseInt(
                key.replace(STRING_ANSWER + " ", '')) - 1);
            questionnaire.questions[keyOfQuestion].answers.push(answer);
        }
    }

}
ConsoleHelper.fullSizeText("=");
ConsoleHelper.fullSizeText("       SCRIPT FINISHED      ");
ConsoleHelper.fullSizeText("=");
console.log(JSON.stringify(questionnaires));